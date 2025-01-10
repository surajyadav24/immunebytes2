import React, { useState, useEffect } from "react";
import "./style.css"; // Create a corresponding CSS file for styling

const BlogCard = ({ title, categories, date, description, imageUrl, link }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
      <div className="blog-card-content">
       
        <div className="blog-card-meta">
          {/* <span>{categories}</span> */}
          <span>{date}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="read-more">
          READ MORE <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsAndCategories = async () => {
      try {
        // Fetch categories
        const categoryResponse = await fetch("https://sahilkaul.com/blog/wp-json/wp/v2/categories");
        const categoryData = await categoryResponse.json();
        const categoryMap = categoryData.reduce((acc, category) => {
          acc[category.id] = category.name;
          return acc;
        }, {});

        setCategories(categoryMap);

        // Fetch posts
        const postResponse = await fetch("https://sahilkaul.com/blog/wp-json/wp/v2/posts?_embed&per_page=3");
        const postData = await postResponse.json();

        const formattedPosts = postData.map((post) => {
          const imageUrl =
            post._embedded &&
            post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0]
              ? post._embedded["wp:featuredmedia"][0].source_url
              : null;

          const categoryNames = post.categories.map((id) => categoryMap[id]).join(", ");

          return {
            id: post.id,
            title: post.title.rendered,
            categories: categoryNames,
            date: new Date(post.date).toLocaleDateString(),
            description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
            imageUrl,
            link: post.link,
          };
        });

        setPosts(formattedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchPostsAndCategories();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <section className="blog-section  ">
      <h1 className="homepage-heading heading-h1">Blogs</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
      <button className="view-more btn btn-primary">View More &rarr;</button>
    </section>
  );
};

export default BlogSection;

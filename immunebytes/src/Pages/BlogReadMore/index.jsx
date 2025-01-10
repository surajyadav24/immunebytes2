import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the post ID from the URL

const BlogReadMore = () => {
  const { postId } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch post details by ID
    const fetchPostDetail = async () => {
      try {
        const postResponse = await fetch(`https://sahilkaul.com/blog/wp-json/wp/v2/posts/${postId}?_embed`);
        const postData = await postResponse.json();
        setPost(postData);

        // Fetch categories from WordPress API
        const categoryResponse = await fetch("https://sahilkaul.com/blog/wp-json/wp/v2/categories");
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching WordPress post:", error);
      }
    };

    fetchPostDetail();
  }, [postId]);

  // Function to get category names based on category IDs
  const getCategoryNames = (categoryIds) => {
    return categoryIds
      .map((id) => categories.find((category) => category.id === id)?.name)
      .join(", ");
  };

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (!post) {
    return <p>Post not found!</p>;
  }

  // Ensure the featured media exists before accessing it
  const featuredImage =
    post._embedded &&
    post._embedded["wp:featuredmedia"] &&
    post._embedded["wp:featuredmedia"][0]
      ? post._embedded["wp:featuredmedia"][0].source_url
      : null;

  // Get category names
  const categoryNames = getCategoryNames(post.categories);

  return (
    <div className="post-detail-container text-white">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="post-title" />
      {featuredImage && <img src={featuredImage} alt={post.title.rendered} className="post-image" />}
      <div className="post-meta">
        <p className="post-date">Published on: {new Date(post.date).toLocaleDateString()}</p>
        <p className="post-categories">Categories: {categoryNames || "No categories"}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="post-content" />
    </div>
  );
};

export default BlogReadMore;

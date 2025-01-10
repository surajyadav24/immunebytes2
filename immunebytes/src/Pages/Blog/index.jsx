import React, { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'yourwordpresssite.com' with your WordPress site URL
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://sahilkaul.com/blog/wp-json/wp/v2/posts");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching WordPress posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="text-white">
      <h1>WordPress Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

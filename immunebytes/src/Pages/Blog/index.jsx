import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // To use Links for routing

const Blog = () => {
  const [posts, setPosts] = useState([]); // All posts
  const [categories, setCategories] = useState([]); // Categories for filtering
  const [selectedCategory, setSelectedCategory] = useState(""); // Selected category for filtering
  const [loading, setLoading] = useState(true); // Loading state
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [postsPerPage] = useState(10); // Posts to display per page

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let allPosts = [];
        let page = 1;
        const postsPerRequest = 100; // Set a higher value (or remove the limit for larger fetch)
        let totalPages = 1;

        // Fetch all posts with pagination
        while (page <= totalPages) {
          const postResponse = await fetch(`https://sahilkaul.com/blog/wp-json/wp/v2/posts?_embed&per_page=${postsPerRequest}&page=${page}`);
          const postData = await postResponse.json();
          
          // If posts are returned, add to the list
          allPosts = [...allPosts, ...postData];

          // Update total pages (based on response headers or number of posts)
          const totalPosts = postResponse.headers.get("X-WP-Total");
          totalPages = Math.ceil(totalPosts / postsPerRequest);
          
          page++;
        }

        setPosts(allPosts);

        // Fetch categories from WordPress API
        const categoryResponse = await fetch("https://sahilkaul.com/blog/wp-json/wp/v2/categories");
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching WordPress data:", error);
      }
    };

    fetchPosts();
  }, []);

  // Function to get category names based on category IDs
  const getCategoryNames = (categoryIds) => {
    return categoryIds
      .map((id) => categories.find((category) => category.id === id)?.name)
      .join(", ");
  };

  // Ensure the filter is applied only after posts and categories are loaded
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(parseInt(selectedCategory))) // ensure ID is compared properly
    : posts;

  // Get the posts to be shown on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Total number of pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="blog-container text-white pt-10">
      <h1 className="text-white bg-pink-200">WordPress Blog Posts</h1>

      {/* Category Dropdown */}
      <div className="category-filter bg-black">
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-black"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Posts Container */}
      <div className="posts-container">
        {currentPosts.map((post) => {
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
            <div key={post.id} className="post-card">
              {featuredImage && <img src={featuredImage} alt={post.title.rendered} className="post-image" />}
              <div className="post-details">
                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="post-title" />
                <div className="post-meta">
                  <p className="post-date">
                    Published on: {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="post-categories">Categories: {categoryNames || "No categories"}</p>
                </div>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="post-excerpt" />
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-number">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;

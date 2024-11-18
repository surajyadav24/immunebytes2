import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlatformManagement = () => {
  const [platforms, setPlatforms] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedPlatform, setEditedPlatform] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const platformsPerPage = 5;
  const [error, setError] = useState("");
  const [platformName, setAddPlatform] = useState("");

  // Fetch platforms on component mount
  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.post('/api/v1/users/getplatforms', { withCredentials: true });
        console.log("Fetched platforms data:", response.data);
        if (response.data.statusCode === 200) {
          const sortedPlatforms = response.data.data.platforms.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPlatforms(sortedPlatforms); // Ensure it's an array
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch platforms");
      }
    };
    fetchPlatforms();
  }, []);

  const savePlatform = async () => {
    if (!editedPlatform.trim()) {
      setError("Platform name cannot be empty.");
      return;
    }
  
    try {
      const response = await axios.post(
        `/api/v1/users/updateplatform/${platforms[editIndex]._id}`, // Send platform ID for the update
        { platformName: editedPlatform.trim() },
        { withCredentials: true }
      );
  
      console.log("Updated platform:", response.data);
  
      if (response.data.statusCode === 200) {
        // Update the platforms list with the newly updated platform
        const updatedPlatforms = [...platforms];
        updatedPlatforms[editIndex] = { ...updatedPlatforms[editIndex], platformName: editedPlatform.trim() };
        setPlatforms(updatedPlatforms);
        setEditIndex(null);
        setEditedPlatform("");
      } else {
        setError(response.data.message || "Update failed");
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Failed to update platform");
    }
  };

  // Handle pagination
  const indexOfLastPlatform = currentPage * platformsPerPage;
  const indexOfFirstPlatform = indexOfLastPlatform - platformsPerPage;
  const currentPlatforms = Array.isArray(platforms) ? platforms.slice(indexOfFirstPlatform, indexOfLastPlatform) : [];

  // Handle add platform
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!platformName.trim()) {
      setError("Platform name cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(
        '/api/v1/users/Platform',
        { platformName },
        { withCredentials: true }
      );
  
      console.log("response-data", response.data);
  
      if (response.data.statusCode === 200) {
        // Update the platforms list with the newly added platform
        setPlatforms((prevPlatforms) => [
          { platformName: platformName.trim(), createdAt: new Date() }, // Add createdAt for sorting
          ...prevPlatforms // Existing platforms come after
        ]);
        setAddPlatform(""); // Clear input field
      } else {
        setError(response.data.message || 'Add platform failed');
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Platform details are invalid');
    }
  };

  // Start editing a platform
  const startEditing = (index) => {
    setEditIndex(index);
    setEditedPlatform(platforms[index].platformName); // Initialize the editedPlatform with current platform name
  };

  // Save the edited platform
  // const savePlatform = () => {
  //   const updatedPlatforms = [...platforms];
  //   updatedPlatforms[editIndex] = { ...updatedPlatforms[editIndex], platformName: editedPlatform.trim() };
  //   setPlatforms(updatedPlatforms);
  //   setEditIndex(null);
  //   setEditedPlatform("");
  // };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="w-full max-w-3xl mb-6">
        <h1 className="text-3xl font-bold mb-2">Platform</h1>
        <div className="flex justify-between items-center text-gray-400 text-sm">
          <p>Date</p>
          <p>Filter</p>
        </div>
      </div>

      {/* Add Platform */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg p-4 shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Platform</h2>
        <div className="flex items-center gap-4">
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              value={platformName}
              onChange={(e) => setAddPlatform(e.target.value)}
              placeholder="Enter new platform"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md transition">
              Submit
            </button>
          </form>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
        </div>
      </div>

      {/* Platform List */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg p-4 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Platforms</h2>
        <div className="space-y-4">
          {currentPlatforms.map((platform, index) => (
            <div key={index + indexOfFirstPlatform} className="flex items-center justify-between bg-gray-700 rounded-md p-2">
             {editIndex === index + indexOfFirstPlatform ? (
  <>
    <input
      type="text"
      value={editedPlatform}
      onChange={(e) => setEditedPlatform(e.target.value)}
      className="flex-1 p-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
    <button
      onClick={savePlatform}
      className="ml-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1 px-4 rounded-md transition"
    >
      Save
    </button>
  </>
) : (
  <>
    <p className="flex-1">{platform.platformName}</p> {/* Correctly render platformName */}
    <button
      onClick={() => startEditing(index + indexOfFirstPlatform)}
      className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-1 px-4 rounded-md transition"
    >
      Edit
    </button>
  </>
)}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {Array.from({
            length: Math.ceil(platforms.length / platformsPerPage),
          }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex + 1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === pageIndex + 1
                  ? "bg-pink-500 text-white"
                  : "bg-gray-700 text-gray-400"
              } hover:bg-pink-500 hover:text-white transition`}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformManagement;

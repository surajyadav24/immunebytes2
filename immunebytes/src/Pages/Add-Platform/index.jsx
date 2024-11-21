import React, { useState, useEffect } from "react";
import axios from "axios";
import PlatformList from "../Platform-List"; 
import "./style.css";

const PlatformManagement = (props) => {
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
        const response = await axios.post("/api/v1/users/getplatforms", {
          withCredentials: true,
        });
        if (response.data.statusCode === 200) {
          const sortedPlatforms = response.data.data.platforms.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPlatforms(sortedPlatforms);
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
        `/api/v1/users/updateplatform/${platforms[editIndex]._id}`,
        { platformName: editedPlatform.trim() },
        { withCredentials: true }
      );

      if (response.data.statusCode === 200) {
        const updatedPlatforms = [...platforms];
        updatedPlatforms[editIndex] = {
          ...updatedPlatforms[editIndex],
          platformName: editedPlatform.trim(),
        };
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

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!platformName.trim()) {
      setError("Platform name cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/v1/users/Platform",
        { platformName },
        { withCredentials: true }
      );

      if (response.data.statusCode === 200) {
        setPlatforms((prevPlatforms) => [
          { platformName: platformName.trim(), createdAt: new Date() },
          ...prevPlatforms,
        ]);
        setAddPlatform("");
      } else {
        setError(response.data.message || "Add platform failed");
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Platform details are invalid");
    }
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditedPlatform(platforms[index].platformName);
  };

  const indexOfLastPlatform = currentPage * platformsPerPage;
  const indexOfFirstPlatform = indexOfLastPlatform - platformsPerPage;
  const currentPlatforms =
    platforms?.slice(indexOfFirstPlatform, indexOfLastPlatform) || [];

  return (
    <>
      <div className="dashboard-header">
        <h2>{props.headname}</h2>
      </div>
      <div className="addplatform flex flex-col items-center min-h-screen text-white p-6">
        <div className="platform-widget w-full max-w-3xl bg-gray-800 rounded-lg p-4 shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Add Platform</h3>
          <form onSubmit={handlesubmit} className="flex items-center gap-4">
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
          {error && <div className="error-message">{error}</div>}
        </div>

        <PlatformList
          platforms={platforms}
          currentPlatforms={currentPlatforms}
          editIndex={editIndex}
          editedPlatform={editedPlatform}
          setEditedPlatform={setEditedPlatform}
          savePlatform={savePlatform}
          startEditing={startEditing}
          indexOfFirstPlatform={indexOfFirstPlatform}
        />

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
    </>
  );
};

export default PlatformManagement;

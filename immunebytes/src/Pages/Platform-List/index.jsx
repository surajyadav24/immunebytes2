import React from "react";

const PlatformList = ({
  platforms,
  currentPlatforms,
  showAll = false, // Default to false for backward compatibility
  editIndex,
  editedPlatform,
  setEditedPlatform,
  savePlatform,
  startEditing,
  indexOfFirstPlatform = 0, // Default to 0 when `showAll` is true
  deletePlatform, // Prop for delete functionality
}) => {
  const platformsToDisplay = showAll ? platforms : currentPlatforms;

  if (!platformsToDisplay || platformsToDisplay.length === 0) {
    return <p>No platforms to display.</p>;
  }

  return (
    <div className="platform-list w-full max-w-3xl bg-gray-800 rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Platforms</h2>
      <div className="space-y-4">
        {platformsToDisplay.map((platform, index) => (
          <div
            key={showAll ? index : index + indexOfFirstPlatform}
            className="flex items-center justify-between bg-gray-700 rounded-md p-2"
          >
            {editIndex === (showAll ? index : index + indexOfFirstPlatform) ? (
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
                <p className="flex-1">{platform.platformName}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      startEditing(showAll ? index : index + indexOfFirstPlatform)
                    }
                    className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-1 px-4 rounded-md transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      deletePlatform(showAll ? index : index + indexOfFirstPlatform)
                    }
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded-md transition"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformList;

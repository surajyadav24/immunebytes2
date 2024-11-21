const PlatformList = ({
    currentPlatforms,
    editIndex,
    editedPlatform,
    setEditedPlatform,
    savePlatform,
    startEditing,
    indexOfFirstPlatform,
  }) => {
    if (!currentPlatforms || currentPlatforms.length === 0) {
      return <p>No platforms to display.</p>;
    }
  
    return (
      <div className="platform-list w-full max-w-3xl bg-gray-800 rounded-lg p-4 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Platforms</h2>
        <div className="space-y-4">
          {currentPlatforms.map((platform, index) => (
            <div
              key={index + indexOfFirstPlatform}
              className="flex items-center justify-between bg-gray-700 rounded-md p-2"
            >
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
                  <p className="flex-1">{platform.platformName}</p>
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
      </div>
    );
  };
  
  export default PlatformList;
  
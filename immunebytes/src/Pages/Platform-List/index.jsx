import React, { useState } from "react";
import close from '../../assets/images/cross.svg';

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

  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [platformToDelete, setPlatformToDelete] = useState(null);

  if (!platformsToDisplay || platformsToDisplay.length === 0) {
    return <p>No platforms to display.</p>;
  }

  const openDeleteConfirmation = (platformIndex) => {
    setPlatformToDelete(platformIndex); // Store the platform to delete
    setIsDeleteConfirmationOpen(true); // Open confirmation modal
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false); // Close confirmation modal
    setPlatformToDelete(null); // Clear platform to delete
  };

  const handleDelete = () => {
    if (platformToDelete !== null) {
      deletePlatform(platformToDelete); // Call deletePlatform with platform to delete
    }
    closeDeleteConfirmation(); // Close the modal after deletion
  };

  return (
    <div className="platform-list w-full max-w-3xl bg-gray-800 rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 add-platform">Platforms</h2>
      <div className="space-y-4 add-platform">
        {platformsToDisplay.map((platform, index) => (
          <div
            key={showAll ? index : index + indexOfFirstPlatform}
            className="flex items-center justify-between bg-gray-700 rounded-md p-2 add-platform "
          >
            {editIndex === (showAll ? index : index + indexOfFirstPlatform) ? (
              <>
                <input
                  type="text"
                  value={editedPlatform}
                  onChange={(e) => setEditedPlatform(e.target.value)}
                  className="flex-1 input-editing p-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 add-platform focus:ring-pink-500"
                />
                <button
                  onClick={savePlatform}
                  className="ml-4 save-btn bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1 px-4 rounded-md transition add-platform"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap add-platform">{platform.platformName}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      startEditing(showAll ? index : index + indexOfFirstPlatform)
                    }
                    className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-1 lg:px-4 px-2 rounded-md transition add-platform"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      openDeleteConfirmation(showAll ? index : index + indexOfFirstPlatform)
                    }
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 lg:px-4 px-2 rounded-md transition add-platform"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {isDeleteConfirmationOpen && (
 
        <div className="modal-overlay-delete">
        <div className="modal-content-delete  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
          <button className="close-btn-delete" onClick={closeDeleteConfirmation}>
            <img src={close} alt="Close" />
          </button>
          <p className='text-white pt-3'>Are you sure you want to delete this platform?</p>
          <div className="modal-actions-delete">
            <button
              className="confirm-btn-delete"
              onClick={handleDelete}
            >
              Yes, Delete
            </button>
            <button className="cancel-btn-delete" onClick={closeDeleteConfirmation}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default PlatformList;

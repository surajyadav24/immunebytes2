import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
import { useNavigate, useParams } from "react-router-dom";
// import { Navigate } from "react-router-dom";


const UpdatePortfolio = (props) => {
  const navigate = useNavigate()

  const {selectedItemId} =useParams()
  const [errorEntries, setErrorEntries] = useState([
    { errorType: "", errorStatus: "", errorDescription: "" },
  ]);

  // Handle changes in dynamic error entry fields
  const handleDynamicChange = (index, field, value) => {
    setErrorEntries(prevEntries => {
      const updatedEntries = [...prevEntries];
      updatedEntries[index][field] = value;
      return updatedEntries;
    });
  };
  

  // Add a new error entry
  const addErrorEntry = () => {
    setErrorEntries([
      ...errorEntries,
      { errorType: "", errorStatus: "", errorDescription: "" },
    ]);
  };

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    platform: "",
    auditDate: "",
    status: "",
    errorBags: "",
    companyDescription: "",
    errorType: "",
    image: null,
    pdf: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [platforms, setPlatforms] = useState([]);

  const [previewImage, setPreviewImage] = useState("");
  const [previewPDF, setPreviewPDF] = useState("");


    useEffect(() => {
      const fetchPortfolioDetails = async () => {
        try {
          console.log("useeffect for details fetch")
          const response = await axios.post(`/api/v1/users/getportfolio/${selectedItemId}`, { withCredentials: true });
          if (response.data.statusCode === 200) {
            const portfolio = response.data.data.portfolio;
            setFormData({
              ...formData,
              name: portfolio.name,
              platform: portfolio.platform,
              auditDate: portfolio.auditDate
              ? new Date(portfolio.auditDate).toISOString().split("T")[0] // Convert to YYYY-MM-DD format
              : "",
              status: portfolio.status,
              errorBags: portfolio.errorBags,
              companyDescription: portfolio.companyDescription,
              image: portfolio.image, // Assuming you might want to pre-load the image URL for display
              pdf: portfolio.pdf || null, // Assuming you might want to pre-load the PDF URL for display
            });

            setPreviewImage(portfolio.image);
            setPreviewPDF(portfolio.pdf || null);
            // Set the dynamic error entries
            setErrorEntries(portfolio.errorEntries || []);
          } else {
            console.log("failed to fetch old details")
            setError('Failed to fetch portfolio details');
          }
        } catch (error) {
          console.error(error);
          console.log("can not fetch by selecteditemid")
          setError('Error fetching portfolio details');
        }
      };
      // console.log(portfolio.pdf ,"portfolio.pdf")
      console.log(formData.pdf ,"FormData.pdf")

  
      // if (selectedItemId) {
      //   fetchPortfolioDetails();
      // }
      fetchPortfolioDetails();

  


    const fetchPlatforms = async () => {
      try {
        console.log("useeffect for fetching platforms")
        const response = await axios.post('/api/v1/users/getplatforms', { withCredentials: true });
        if (response.data.statusCode === 200) {
          setPlatforms(response.data.data.platforms);
        } else {
          setError('Failed to fetch platforms');
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch platforms');
      }
    };
    fetchPlatforms();
  },[selectedItemId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value, // This should work fine for flat fields
    }));
    setFormErrors(prevState => ({
      ...prevState,
      [name]: "", // Reset any existing error on that field
    }));
  };
  

 // Handle file uploads
 const handleFileChange = (e) => {
  const { name, files } = e.target;
  if (files && files[0]) {
    setFormData(prevData => ({
      ...prevData,
      [name]: files[0], // Ensure the file is properly updated in the state
    }));

    // Set preview for image or pdf
    if (name === "image") {
      setPreviewImage(URL.createObjectURL(files[0]));
    } else if (name === "pdf") {
      setPreviewPDF(URL.createObjectURL(files[0]));
    }
  }
};

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.platform) errors.platform = "Platform is required.";
    if (!formData.auditDate) errors.auditDate = "Audit Date is required.";
    if (!formData.status) errors.status = "Status is required.";
    // if (!formData.errorType) errors.errorType = "Error Type is required.";
    if (!formData.companyDescription) errors.companyDescription = "Company Description is required.";
    // if (!formData.errorBags || isNaN(formData.errorBags)) {
    //   errors.errorBags = "Error Bags must be a number.";
    // }
    if (!formData.image) errors.image = "Image is required.";
    
      // Validate error entries
  const validErrorEntry = errorEntries.some(
    (entry) =>
      entry.errorType.trim() !== "" ||
      entry.errorStatus.trim() !== "" ||
      entry.errorDescription.trim() !== ""
  );

  // if (!validErrorEntry) {
  //   errors.errorEntries = "At least one valid error entry is required.";
  // }
  // console.log("Valid Error Entries:", validErrorEntry);

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Form details are not valid")
    }
    setLoading(true);


    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    if (formData.image instanceof File) {
      form.append("image", formData.image);
    } else {
      form.append("existingImage", formData.image); // Send existing URL
    }
  
    // Append PDF or retain existing PDF URL
    if (formData.pdf instanceof File) {
      form.append("pdf", formData.pdf);
    console.log(formData.pdf,"formData.pdf -- 185 ")
    }
      
    // } else {
    //   form.append("existingPDF", formData.pdf); // Send existing URL
    // }
    if (!formData.pdf) {
      form.append("existingPDF", null); // Explicitly remove the PDF
    console.log(formData.pdf,"formData.pdf -- 185 ")

    }
  // Append dynamic error entries
  errorEntries.forEach((entry, index) => {
    form.append(`errorEntries[${index}][errorType]`, entry.errorType);
    form.append(`errorEntries[${index}][errorStatus]`, entry.errorStatus);
    form.append(`errorEntries[${index}][errorDescription]`, entry.errorDescription);
  });

  // Debug form data
  for (let [key, value] of form.entries()) {
    console.log(`${key}:`, value);
  }


    try {
      const response = await axios.post(`/api/v1/users/updateportfolio/${selectedItemId}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      if (response.data.statusCode === 200) {
        // alert('Portfolio added successfully!');
        navigate('/dashboard-main')
      } else {
        setError(response.data.message || 'Add portfolio failed');
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Add portfolio details are invalid');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="dashboard-header">
  <h2>
    {props.headname}
  </h2>
</div>
      <div className="addportfolio">
        <div className="addportfolio-wrapper flex items-center justify-center min-h-screen text-white">
          <form
            className="rounded-lg p-8 shadow-md max-w-3xl w-full"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
              </div>

              {/* Upload Image */}
              <div>
  <label htmlFor="image" className="block text-sm font-medium mb-1">
    Image
  </label>
  {previewImage && (
    <img
      src={previewImage}
      alt="Preview"
      className="w-40 h-40 object-cover rounded-md mb-2"
    />
  )}
  <input
    type="file"
    id="image"
    name="image"
    onChange={handleFileChange}
    className="w-full p-3 border border-gray-600 rounded-md"
  />
  {!formData.image && (
    <p className="text-gray-500 text-sm mt-1">Existing: {formData.image}</p>
  )}
  {formErrors.image && <p className="text-red-500 mt-1">{formErrors.image}</p>}
</div>

              {/* Platform */}
              <div>
                <label htmlFor="platform" className="block text-sm font-medium mb-1">Platform</label>
                <select
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full p-3 border bg-black border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Select Platform</option>
                  {platforms.map((platform) => (
                    <option key={platform._id} value={platform.platformName}>
                      {platform.platformName}
                    </option>
                  ))}
                </select>
                {formErrors.platform && <p className="text-red-500 mt-1">{formErrors.platform}</p>}
              </div>

              {/* Audit Date */}
              <div>
                <label htmlFor="auditDate" className="block text-sm font-medium mb-1">Audit Date</label>
                <input
                  type="date"
                  id="auditDate"
                  name="auditDate"
                  value={formData.auditDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  min={new Date().toISOString().split("T")[0]} // Prevent past date
                />
                {formErrors.auditDate && <p className="text-red-500 mt-1">{formErrors.auditDate}</p>}
              </div>

              {/* Error Bags */}
              <div>
                <label htmlFor="errorBags" className="block text-sm font-medium mb-1">Error / Bags</label>
                <input
                  type="number"
                  id="errorBags"
                  name="errorBags"
                  value={formData.errorBags}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {formErrors.errorBags && <p className="text-red-500 mt-1">{formErrors.errorBags}</p>}
              </div>

              {/* Status */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Select Status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  {/* <option value="Pending">Pending</option> */}
                </select>
                {formErrors.status && <p className="text-red-500 mt-1">{formErrors.status}</p>}
              </div>

              {/* Company Description */}
              <div>
                <label htmlFor="companyDescription" className="block text-sm font-medium mb-1">Company Description</label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {formErrors.companyDescription && <p className="text-red-500 mt-1">{formErrors.companyDescription}</p>}
              </div>

              {/* Upload PDF */}
              <div>
              {(formData.pdf !== "null") ? (
  <a href={formData.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-2 block">
    View Existing PDF 
  </a>
):(<label htmlFor="uploadPdf" className="block text-sm font-medium mb-1">Upload pdf</label>)}
 

  <input
    type="file"
    id="pdf"
    name="pdf"
    // value={formData.pdf || null}
    onChange={handleFileChange}
    className="w-full p-3 border border-gray-600 rounded-md"
  />
  {formErrors.pdf && <p className="text-red-500 mt-1">{formErrors.pdf}</p>}
</div>

            </div>

{/* Dynamic Error Entries */}
<div className="mt-6">
  <label htmlFor="errorType" className="block text-sm font-medium mb-1">Error Entries</label>
  {errorEntries.map((entry, index) => (
    <div key={index} className="mb-2 border-b border-gray-600">
      <div className="grid grid-cols-3 gap-4">
        {/* Error Type Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Error Type</label>
          <select
            value={entry.errorType}
            onChange={(e) => handleDynamicChange(index, "errorType", e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-md bg-black"
          >
            <option value="">Select Error Type</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Critical">Critical</option>
            <option value="Informational">Informational</option>
          </select>
        </div>

        {/* Error Status Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Error Status</label>
          <select
            value={entry.errorStatus}
            onChange={(e) => handleDynamicChange(index, "errorStatus", e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-md bg-black"
          >
            <option value="">Select Error Status</option>
            <option value="Closed">Closed</option>
            <option value="Open">Open</option>
            <option value="Acknowledged">Acknowledged</option>
            <option value="PartiallyResolved">Partially Resolved</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        {/* Error Description Textarea */}
        <div>
          <label htmlFor="errorDescription" className="block text-sm font-medium mb-1">Error Description</label>
          <textarea
            id="errorDescription"
            name="errorDescription"
            value={entry.errorDescription}
            onChange={(e) => handleDynamicChange(index, "errorDescription", e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            rows="1"
            placeholder="Enter a detailed description of the error"
          ></textarea>
        </div>
      </div>
    </div>
  ))}
  
  
  {formErrors.errorEntries && <p className="text-red-500 mt-1">{formErrors.errorEntries}</p>}
</div>


            <div className="mt-4">
              <button
                type="button"
                onClick={addErrorEntry}
                className="text-white  add-btn rounded-md py-2 px-4"
              >
                +
              </button>
            </div>

            {/* Submit */}
            <div className="mt-6">
            <button
            type="submit"
            className="submitportfolio  w-full bg-pink-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Portfolio"}
          </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePortfolio;

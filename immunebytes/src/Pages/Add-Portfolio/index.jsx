import React, { useState, useEffect ,useRef} from "react";
import axios from "axios";
import './style.css';
import {useNavigate} from 'react-router-dom'


const AddPortfolio = (props) => {
  const navigate = useNavigate()
  const [errorEntries, setErrorEntries] = useState([
    { errorType: "", errorStatus: "", errorDescription: "" },
  ]);


  const inputRef = useRef(null);
  const nameRef = useRef(null);

  const imageRef = useRef(null);
  const errorRef = useRef(null);
  const statusRef = useRef(null);
  const platformsRef = useRef(null);
  const auditDateRef = useRef(null);
  const companyDesRef = useRef(null);




  // Handle changes in dynamic error entry fields
  const handleDynamicChange = (index, field, value) => {
    const updatedEntries = [...errorEntries];
    updatedEntries[index][field] = value;
    setErrorEntries(updatedEntries);
    console.log("Updated Error Entries:", updatedEntries);
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



  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.post('/api/v1/users/getplatforms', { withCredentials: true });
        if (response.data.statusCode === 200) {
          setPlatforms(response.data.data.platforms)
  
          
        } else {
          setError('Failed to fetch platforms');
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch platforms');
      }
    };
    fetchPlatforms();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Validate errorBags to ensure it doesn't go below 0
    if (name === "errorBags" && (value < 0 || value === "")) {
      setFormData({ ...formData, [name]: 0 }); // Set default to 0 if value is negative or empty
      setFormErrors({ ...formErrors, [name]: "" });
    } else {
      setFormData({ ...formData, [name]: value });
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };
  

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
  
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.platform) errors.platform = "Platform is required.";
    if (!formData.auditDate) errors.auditDate = "Audit Date is required.";
    if (!formData.status) errors.status = "Status is required.";
    if (!formData.companyDescription) errors.companyDescription = "Company Description is required.";
    if (!formData.image) errors.image = "Image is required.";
  
    // Optional: Validate dynamic error entries
    const validErrorEntry = errorEntries.some(
      (entry) =>
        entry.errorType.trim() !== "" ||
        entry.errorStatus.trim() !== "" ||
        entry.errorDescription.trim() !== ""
    );
  
    // if (!validErrorEntry) {
    //   errors.errorEntries = "At least one valid error entry is required.";
    // }
  
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
      const response = await axios.post('/api/v1/users/Add-Portfolio', form, {
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

  const hasFocusedOnce = useRef(false);

  useEffect(() => {
    const errorFields = [
      { key: 'name', ref: nameRef },
      { key: 'image', ref: imageRef },
      { key: 'platform', ref: platformsRef },
      { key: 'auditDate', ref: auditDateRef },
      { key: 'errorBags', ref: errorRef },
      { key: 'status', ref: statusRef },
      { key: 'companyDescription', ref: companyDesRef },
    ];
  
    for (const field of errorFields) {
      if (formErrors[field.key] && field.ref.current) {
        // Only focus the field if it hasn't been focused once or if errors change
        if (!hasFocusedOnce.current) {
          field.ref.current.focus();
          field.ref.current.scrollIntoView({ behavior: "smooth", block: "center" }); // Ensure it’s visible
          hasFocusedOnce.current = true;
        }
        break;
      }
    }
  
    // Reset the focus tracker if all errors are cleared
    if (Object.keys(formErrors).length === 0) {
      hasFocusedOnce.current = false;
    }
  }, [formErrors]);
  
  
  
  


  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
        console.log("No error checking just ")
      }, 5000); // Error disappears after 3 seconds
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [error]);

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
                ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${error ? "input-error" : ""}`}
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>

              {/* Upload Image */}
              <div className="image-upload">
                <label htmlFor="image" className="block text-sm font-medium mb-1">Upload Image</label>
                <input
                ref={imageRef}
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                  className={`w-full p-3 border text-sm border-gray-600 rounded-md focus:outline-none  focus:ring-2 focus:ring-pink-500 ${error ? "input-error" : ""}`}
                />
                {formErrors.image && <p className="text-red-500 mt-1">{formErrors.image}</p>}
              </div>

              {/* Platform */}
              <div>
                <label htmlFor="platform" className="block text-sm font-medium mb-1">Platform</label>
                <select
                ref={platformsRef}

                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className={` w-full p-3 border text-sm border-gray-600 rounded-md bg-black  focus:outline-none  focus:ring-2 focus:ring-pink-500 ${error ? "input-error" : ""}`}
                 
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
                ref={auditDateRef}

                  type="date"
                  id="auditDate"
                  name="auditDate"
                  value={formData.auditDate}
                  onChange={handleChange}
                  className={`w-full p-3 border text-sm border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500  ${error ? "input-error" : ""}`}
                  // min={new Date().toISOString().split("T")[0]} // Prevent past date
                />
                {formErrors.auditDate && <p className="text-red-500 mt-1">{formErrors.auditDate}</p>}
              </div>

              {/* Error Bags */}
              <div>
                <label htmlFor="errorBags" className="block text-sm font-medium mb-1">Error / Bags</label>
                <input
                ref={errorRef}

                  type="number"
                  id="errorBags"
                  name="errorBags"
                  value={formData.errorBags}
                  onChange={handleChange}
                  className={`w-full p-3 border text-sm border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${error ? "input-error" : ""}`}
                />
                {formErrors.errorBags && <p className="text-red-500 mt-1">{formErrors.errorBags}</p>}
              </div>

              {/* Status */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
                <select
                ref={statusRef}

                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={`w-full p-3 border text-sm border-gray-600 rounded-md focus:outline-none focus:ring-2 bg-black focus:ring-pink-500 ${error ? "input-error" : ""}`}
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
                ref={companyDesRef}

                  id="companyDescription"
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full p-3 border text-sm border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${error ? "input-error" : ""}`}
                />
                {formErrors.companyDescription && <p className="text-red-500 mt-1">{formErrors.companyDescription}</p>}
              </div>

              {/* Upload PDF */}
              <div>
                <label htmlFor="pdf" className="block text-sm font-medium mb-1">Upload PDF</label>
                <input
                ref={inputRef}
                  type="file"
                  id="pdf"
                  name="pdf"
                  onChange={handleFileChange}
                  className="w-full p-3 border text-sm border-gray-600 rounded-md focus:outline-none"
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
            <option value="Partially Resolved">Partially Resolved</option>
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
            {loading ? "Adding..." : "Submit"}
          </button>
            </div>

            {/* Error Message */}
            {error && <p className=" error-message text-red-500 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPortfolio;

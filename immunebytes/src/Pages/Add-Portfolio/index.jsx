import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'
const AddPortfolio = () => {
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
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
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
    if (!formData.errorType) errors.errorType = "Error Type is required.";
    if (!formData.companyDescription) errors.companyDescription = "Company Description is required.";
    if (!formData.errorBags || isNaN(formData.errorBags)) {
      errors.errorBags = "Error Bags must be a number.";
    }
    if (!formData.image) errors.image = "Image is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await axios.post('/api/v1/users/Add-Portfolio', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      if (response.data.statusCode === 200) {
        alert('Portfolio added successfully!');
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
<div className="addportfolio">
<div className="flex items-center justify-center min-h-screen  text-white">
      <form
        className=" rounded-lg p-8 shadow-md max-w-3xl w-full "
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
              className="w-full p-3   border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
          </div>
  {/* Upload Image */}
  <div>
            <label htmlFor="image" className="block text-sm font-medium mb-1">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full p-3   border border-gray-600 rounded-md focus:outline-none"
            />
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
              className="w-full p-3   border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
<div>

  {/* audit date  */}
  <label htmlFor="auditDate" className="block text-sm font-medium mb-1">Audit Date</label>
  <input
    type="date"
    id="auditDate"
    name="auditDate"
    value={formData.auditDate}
    onChange={handleChange}
    className="w-full p-3   border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
              className="w-full p-3   border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {formErrors.errorBags && <p className="text-red-500 mt-1">{formErrors.errorBags}</p>}
          </div>
{/* status */}
<div>
  <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
  <select
    id="status"
    name="status"
    value={formData.status}
    onChange={handleChange}
    className="w-full p-3   border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
  >
    <option value="">Select Status</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
    <option value="Pending">Pending</option>
  </select>
  {formErrors.status && <p className="text-red-500 mt-1">{formErrors.status}</p>}
</div>
          {/* Company Description */}
          <div className="">
            <label htmlFor="companyDescription" className="block text-sm font-medium mb-1">Company Description</label>
            <textarea
              id="companyDescription"
              name="companyDescription"
              value={formData.companyDescription}
              onChange={handleChange}
              rows="1"
              className="w-full p-3   border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {formErrors.companyDescription && <p className="text-red-500 mt-1">{formErrors.companyDescription}</p>}
          </div>
          <div>

{/* upload pdf */}

  <label htmlFor="pdf" className="block text-sm font-medium mb-1">Upload PDF</label>
  <input
    type="file"
    id="pdf"
    name="pdf"
    accept=".pdf"
    onChange={(e) => setFormData({ ...formData, pdf: e.target.files[0] })}
    className="w-full p-3   border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
  />
  <p className="text-sm text-gray-400 mt-1">Only PDF files are allowed.</p>
  {formErrors.pdf && <p className="text-red-500 mt-1">{formErrors.pdf}</p>}
</div>

          {/* Error Type */}
          <div>
            <label htmlFor="errorType" className="block text-sm font-medium mb-1">Error Type</label>
            <select
              id="errorType"
              name="errorType"
              value={formData.errorType}
              onChange={handleChange}
              className="w-full p-3   border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Select Error Type</option>
              <option value="Critical">Critical</option>
              <option value="Non-Critical">Non-Critical</option>
            </select>
            {formErrors.errorType && <p className="text-red-500 mt-1">{formErrors.errorType}</p>}
          </div>


          <div>

            
  <label htmlFor="errorStatus" className="block text-sm font-medium mb-1">Error Status</label>
  <select
    id="errorStatus"
    name="errorStatus"
    value={formData.errorStatus || ""}
    onChange={(e) => setFormData({ ...formData, errorStatus: e.target.value })}
    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
  >
    <option value="">Select Error Status</option>
    <option value="Critical">Critical</option>
    <option value="Fixed">Fixed</option>
  </select>
  {formErrors.errorStatus && <p className="text-red-500 mt-1">{formErrors.errorStatus}</p>}
</div>

<div>
  <label htmlFor="errorDescription" className="block text-sm font-medium mb-1">Error Description</label>
  <textarea
    id="errorDescription"
    name="errorDescription"
    value={formData.errorDescription || ""}
    onChange={(e) => setFormData({ ...formData, errorDescription: e.target.value })}
    className="w-full p-3  border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
    rows="4"
    placeholder="Enter a detailed description of the error"
  ></textarea>
  {formErrors.errorDescription && <p className="text-red-500 mt-1">{formErrors.errorDescription}</p>}
</div>


       
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="submitportfolio  w-full bg-pink-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Portfolio"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </form>
    </div>
</div>
</>
  );
};

export default AddPortfolio;

import React, { useState } from "react";
import './style.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPortfolio = () => {
  const navigate = useNavigate()
  const [error,setError]=useState('')
  const [formData, setFormData] = useState({
    name: "",
    platform: "",
    errorBags: "",
    auditDate: "",
    status: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('platform', formData.platform);
    form.append('status', formData.status);
    form.append('errorBags', formData.errorBags);
    form.append('auditDate', formData.auditDate);
    
    if (formData.image) {
      form.append('image', formData.image);
    }
    
    console.log(formData);
    try {
      const response = await axios.post(
        '/api/v1/users/Add-Portfolio',
        form,
        {
          headers: { 
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
  
      console.log("response-data", response.data);

      if (response.data.statusCode === 200) {
        navigate('/dashboard-main');
      } else {
        setError(response.data.message || 'add portfolio failed');  // Set the error message from response
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'add portfolio details are invalid');
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-900 text-white">
      <form
        className="bg-gray-800 rounded-lg p-8 shadow-md max-w-2xl w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Add Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Upload Image */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium mb-1">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              // accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none"
            />
            <p className="text-sm text-gray-400 mt-1">JPEG, PNG, SVG, JPG</p>
          </div>
          {/* Platform */}
          <div>
            <label htmlFor="platform" className="block text-sm font-medium mb-1">
              Platform
            </label>
            <select
              id="platform"
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Select Platform</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Binance">Binance</option>
              <option value="Polygon">Polygon</option>
            </select>
          </div>
          {/* Audit Date */}
          <div>
            <label htmlFor="auditDate" className="block text-sm font-medium mb-1">
              Audit Date
            </label>
            <input
              type="date"
              id="auditDate"
              name="auditDate"
              value={formData.auditDate}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Error / Bags */}
          <div>
            <label htmlFor="errorBags" className="block text-sm font-medium mb-1">
              Error / Bags
            </label>
            <input
              type="number"
              id="errorBags"
              name="errorBags"
              value={formData.errorBags}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Select Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="submit-btn text-center w-50 mt-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-semibold transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;

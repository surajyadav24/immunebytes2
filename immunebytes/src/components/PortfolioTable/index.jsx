import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioModal from '../PortfolioModal'; // Modal component for popup
import './style.css'; // Add custom styles for div layout
import forward from '../../assets/images/portfolio/forward.svg';
import backward from '../../assets/images/portfolio/backward.svg';
import eye from '../../assets/images/portfolio/eye.svg';

const PortfolioTable = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [portfolios, setPortfolios] = useState([]); // Updated to hold fetched data
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch portfolio data from the backend
  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axios.post('/api/v1/users/getportfolio');
        // Ensure the response is an array
        if (response.data && response.data.data && Array.isArray(response.data.data.Portfolio)) {
          setPortfolios(response.data.data.Portfolio);  // Access Portfolio array correctly
        } else {
          console.error('Invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching portfolio data', error);
      }
    };

    fetchPortfolios();
  }, []);

  // Filter portfolio data based on search input
  const filteredData = (portfolios || []).filter(item =>
    item.name && item.name.toLowerCase().includes(search.toLowerCase())  // Add check for item.name
  );
  

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      setItemsPerPage(isMobile ? 2 : 9);
    };

    // Set initial value
    updateItemsPerPage();

    // Add event listener to update on window resize
    window.addEventListener("resize", updateItemsPerPage);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page change (Backward & Forward)
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Open modal with selected item
  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  // Close modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <div className="portfolio-table-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Portfolio Items */}
        <div className="portfolio-grid">
          <div className="portfolio-grid-header">
            <div>Name</div>
            <div>Platform</div>
            <div>Audit Date</div>
            <div>Errors</div>
            <div>Status</div>
            <div>Report</div>
          </div>
          {currentItems.map(item => (
            <div
              key={item._id}
              className="portfolio-grid-row"
              onClick={() => handleRowClick(item)}
            >
              <div><img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} /></div>
              {/* <div>{item.name}</div> */}
              <div>{item.platform}</div>
              <div>{new Date(item.auditDate).toLocaleDateString()}</div>
              <div>{item.errorBags}</div>
              <div>{item.status}</div>
              <div><button className="report-btn"><img src={eye} alt="View Report" /></button></div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <img src={backward} alt="Previous" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            <img src={forward} alt="Next" />
          </button>
        </div>

        {/* Modal */}
        {selectedItem && (
          <PortfolioModal item={selectedItem} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default PortfolioTable;

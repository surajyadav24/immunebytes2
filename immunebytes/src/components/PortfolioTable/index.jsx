import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioModal from '../PortfolioModal'; // Modal component for popup
import './style.css'; // Add custom styles for div layout
import forward from '../../assets/images/portfolio/forward.svg';
import backward from '../../assets/images/portfolio/backward.svg';
import eye from '../../assets/images/portfolio/eye.svg';
import { useNavigate } from 'react-router-dom';

const PortfolioTable = ({ showEditButton }) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [portfolios, setPortfolios] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axios.post('/api/v1/users/getportfolio');
        if (response.data && response.data.data && Array.isArray(response.data.data.portfolios)) {
          setPortfolios(response.data.data.portfolios); // Use 'portfolios' instead of 'Portfolio'
        } else {
          console.error('Invalid response data:', response.data);
        }
        
      } catch (error) {
        console.error('Error fetching portfolio data', error);
      }
    };

    fetchPortfolios();
  }, []);
  const filteredData = portfolios.filter(item =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );
  

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isMobile = window.innerWidth <= 768;
      setItemsPerPage(isMobile ? 2 : 9);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleRowClick = item => {
    setSelectedItem(item._id);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  const handleEdit = (item) => {
    navigate(`/updateportfolio/${item._id}`);
  }
  

  return (
    <div className="container">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <div className="portfolio-table-container " >
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={e => setSearch(e.target.value)}
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
            <div>Actions</div>
          </div>
          {currentItems.map(item => (
            <div key={item._id} className="portfolio-grid-row" onClick={() => handleRowClick(item)}  >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ }}
                />
              </div>
              <div>{item.platform}</div>
              <div>{new Date(item.auditDate).toLocaleDateString()}</div>
              <div>{item.errorBags}</div>

              <div>{item.status || 'N/A'}</div>

              <div className="portfolio-actions">
                <button className="report-btn">
                  <img src={eye} alt="View Report" />
                </button>
                {showEditButton && (
                  <button className="edit-btn" onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                )}
              </div>
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
          <PortfolioModal selectedItemId={selectedItem} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default PortfolioTable;

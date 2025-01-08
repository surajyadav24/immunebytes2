import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioModal from '../PortfolioModal';
import './style.css';
import forward from '../../assets/images/portfolio/forward.svg';
import backward from '../../assets/images/portfolio/backward.svg';
import eye from '../../assets/images/portfolio/eye.svg';
import close from '../../assets/images/cross.svg';

import red from '../../assets/images/portfolio/red-svg.svg';
import { useNavigate } from 'react-router-dom';

const PortfolioTable = ({ showEditButton, showDeleteButton }) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [portfolios, setPortfolios] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    portfolioId: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axios.post('/api/v1/users/getportfolio');
        if (response.data && response.data.data?.portfolios) {
          setPortfolios(response.data.data.portfolios);
        } else {
          console.error('Invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching portfolio data', error);
      }
    };
    fetchPortfolios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/users/deleteportfolio/${id}`);
      setPortfolios((prev) => prev.filter((item) => item._id !== id));
      setSelectedItem(null);
      // alert('Portfolio deleted successfully');
      navigate('/dashboard-main');
    } catch (error) {
      console.error('Error deleting portfolio', error);
      alert('Failed to delete portfolio');
    }
  };

  const filteredData = portfolios.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isMobile = window.innerWidth <= 768;
      setItemsPerPage(isMobile ? 2 : 8);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const openDeleteConfirmation = (id) =>
    setDeleteConfirmation({ isOpen: true, portfolioId: id });

  const closeDeleteConfirmation = () =>
    setDeleteConfirmation({ isOpen: false, portfolioId: null });

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const closeModal = () => setSelectedItem(null);

  const handleEdit = (item) => navigate(`/updateportfolio/${item._id}`);

  return (
    <div className="container">
      <h2 className="portfolio-title homepage-heading">Our Portfolio</h2>
      <div className="portfolio-table-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-grid-header">
            <div>Name</div>
            <div>Platform</div>
            <div>Audit Date</div>
            <div>Errors</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
          {currentItems.map((item) => (
            <div key={item._id} className="portfolio-grid-row">
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div>{item.platform}</div>
              <div>{new Date(item.auditDate).toLocaleDateString()}</div>
              <div>{item.errorBags}</div>
              <div>{item.status || 'N/A'}</div>
              <div className="portfolio-actions">
                <button
                  className="report-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item._id);
                  }}
                >
                  <img src={eye} alt="View Report" />
                </button>
                {showEditButton && (
                  <button
                    className="edit-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(item);
                    }}
                  >
                    Edit
                  </button>
                )}
                {showDeleteButton && (
                  <button
                    className='delete-btn'
                    onClick={(e) => {
                      e.stopPropagation();
                      openDeleteConfirmation(item._id);
                    }}
                  >
                    <img src={red} alt="Delete Report" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

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

        {selectedItem &&
          portfolios.some((item) => item._id === selectedItem) && (
            <PortfolioModal selectedItemId={selectedItem} closeModal={closeModal} />
          )}

        {deleteConfirmation.isOpen && (
          <div className="modal-overlay-delete">
            <div className="modal-content-delete  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
              <button className="close-btn-delete" onClick={closeDeleteConfirmation}>
                <img src={close} alt="Close" />
              </button>
              <p className='text-white pt-3'>Are you sure you want to delete this portfolio?</p>
              <div className="modal-actions-delete">
                <button
                  className="confirm-btn-delete"
                  onClick={() => {
                    handleDelete(deleteConfirmation.portfolioId);
                    closeDeleteConfirmation();
                  }}
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
    </div>
  );
};

export default PortfolioTable;

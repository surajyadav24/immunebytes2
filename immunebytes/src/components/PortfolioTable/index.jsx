import React, { useState,useEffect } from 'react';
import PortfolioModal from '../PortfolioModal'; // Modal component for popup
import './style.css'; // Add custom styles for div layout
import forward from '../../assets/images/portfolio/forward.svg';
import backward from '../../assets/images/portfolio/backward.svg';
import eye from '../../assets/images/portfolio/eye.svg';
import csigma from '../../assets/images/portfolio/csigma.svg';
import vanar from '../../assets/images/portfolio/vanar.svg';
import virtua from '../../assets/images/portfolio/virtua.svg';
import demex from '../../assets/images/portfolio/demex.svg';
import supere from '../../assets/images/portfolio/super.svg';
import wam from '../../assets/images/portfolio/wam.svg';
import poly from '../../assets/images/portfolio/csigma.svg';
import retreeb from '../../assets/images/portfolio/csigma.svg';

const portfolioData = [
  { id: 1, name: csigma, nameString: 'CSigma', platform: 'ARBITRUM', auditDate: '2024-05-31', errors: 'ARBITRUM', status: 'Completed' },
  { id: 2, name: vanar, nameString: 'Vanar', platform: 'VANAR', auditDate: '2024-02-12', errors: 'ARBITRUM', status: 'Completed' },
  { id: 3, name: virtua, nameString: 'Virtua', platform: 'ETHEREUM', auditDate: '2023-07-19', errors: 'ARBITRUM', status: 'Progress' },
  { id: 4, name: demex, nameString: 'Demex', platform: 'ARBITRUM', auditDate: '2023-02-03', errors: 'ARBITRUM', status: 'Completed' },
  { id: 5, name: supere, nameString: 'SuperE', platform: 'ETHEREUM', auditDate: '2022-11-06', errors: 'ARBITRUM', status: 'Completed' },
  { id: 6, name: wam, nameString: 'WAM', platform: 'ETHEREUM', auditDate: '2022-10-12', errors: 'ARBITRUM', status: 'Completed' },
  { id: 7, name: poly, nameString: 'Poly', platform: 'ETHEREUM', auditDate: '2021-11-22', errors: 'ARBITRUM', status: 'Completed' },
  { id: 8, name: retreeb, nameString: 'Retreeb', platform: 'FANTOM', auditDate: '2021-11-08', errors: 'ARBITRUM', status: 'Progress' },
  { id: 9, name: vanar, nameString: 'Vanar', platform: 'FANTOM', auditDate: '2021-11-08', errors: 'ARBITRUM', status: 'Progress' },
  { id: 10, name: supere, nameString: 'SuperE', platform: 'FANTOM', auditDate: '2021-11-08', errors: 'ARBITRUM', status: 'Progress' },
  { id: 11, name: poly, nameString: 'Poly', platform: 'FANTOM', auditDate: '2021-11-08', errors: 'ARBITRUM', status: 'Progress' },
  { id: 12, name: retreeb, nameString: 'Retreeb', platform: 'FANTOM', auditDate: '2021-11-08', errors: 'ARBITRUM', status: 'Progress', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." },
];

const PortfolioTable = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(9);
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter portfolio data based on search input
  const filteredData = portfolioData.filter(item => 
    item.nameString.toLowerCase().includes(search.toLowerCase())
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
  // Get current items for pagination
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
            <div key={item.id} className="portfolio-grid-row" onClick={() => handleRowClick(item)}>
              <div><img src={item.name} alt={item.nameString} /></div>
              <div>{item.platform}</div>
              <div>{item.auditDate}</div>
              <div>{item.errors}</div>
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

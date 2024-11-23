import React from 'react';
import LandingPageHeader from '../Header'; // Replace with the correct path
import LandingPageFooter from '../Footer'; // Replace with the correct path
// import './style.css';

function LandingPageLayout({ children }) {
  return (
    <div className="landing-page-container flex flex-col min-h-screen">
      {/* Header */}
      <LandingPageHeader />
      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}

export default LandingPageLayout;

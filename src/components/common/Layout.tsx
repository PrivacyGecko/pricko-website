import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { PageProps } from '../../types';

const Layout: React.FC<PageProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
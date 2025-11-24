import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

interface BreadcrumbProps {
  currentPage?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  return (
    <nav aria-label="Back to home" className="container-max px-4 sm:px-6 lg:px-8 pt-24 pb-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group"
      >
        <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Home</span>
      </Link>
    </nav>
  );
};

export default Breadcrumb;

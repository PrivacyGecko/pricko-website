import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs Component
 *
 * Provides navigation context for users on product detail pages
 * Includes schema.org structured data for SEO
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  // Generate breadcrumb structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://pricko.com${item.href}` })
    }))
  };

  return (
    <>
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <nav
        aria-label="Breadcrumb"
        className={`py-4 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="flex items-center">
                {/* Separator (except for first item) */}
                {!isFirst && (
                  <FaChevronRight className="w-3 h-3 mx-2 text-muted/50" aria-hidden="true" />
                )}

                {/* Breadcrumb link or text */}
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors duration-200"
                  >
                    {isFirst && <FaHome className="w-3.5 h-3.5" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span
                    className={`flex items-center gap-1.5 ${isLast ? 'text-white font-medium' : 'text-muted'}`}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {isFirst && <FaHome className="w-3.5 h-3.5" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;

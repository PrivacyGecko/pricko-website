import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationItem } from '../../types';
import NavigationDropdown, { DropdownItem } from './NavigationDropdown';
import { useProjectConfig } from '../../hooks/useProjectConfig';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

interface DropdownNavItem {
  name: string;
  dropdown: true;
  items: DropdownItem[];
}

interface LinkNavItem {
  name: string;
  href: string;
  dropdown?: false;
}

type NavItem = DropdownNavItem | LinkNavItem;

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onItemClick }) => {
  const location = useLocation();
  const { getLiveProducts } = useProjectConfig();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  // Build $PRICKO Token dropdown items
  const prickoTokenDropdownItems: DropdownItem[] = [
    {
      label: 'What is $PRICKO?',
      href: '/about'
    },
    {
      label: 'Tokenomics',
      href: '/tokenomics'
    },
    {
      label: 'Roadmap',
      href: '/roadmap'
    },
  ];

  // Build Privacy Products dropdown items from products
  const privacyProductsDropdownItems: DropdownItem[] = getLiveProducts().map(product => ({
    label: product.name,
    href: product.url || `/${product.id}`,
    status: product.status as 'live' | 'beta' | 'in-development',
    external: !!product.url
  }));

  // Add "View All Products" link at the end
  privacyProductsDropdownItems.push({
    label: 'View All Products',
    href: '/products'
  });

  // Define navigation structure
  const navigationItems: NavItem[] = [
    {
      name: '$PRICKO Token',
      dropdown: true,
      items: prickoTokenDropdownItems
    },
    {
      name: 'Products',
      dropdown: true,
      items: privacyProductsDropdownItems
    },
    { name: 'How to Buy', href: '/how-to-buy' },
    { name: 'Contact', href: '/contact' }
  ];

  const linkClass = mobile
    ? "block py-3 px-4 text-lg font-medium transition-colors hover:text-accent "
    : "px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent relative ";

  const activeLinkClass = mobile
    ? "text-accent border-l-2 border-accent bg-accent/10"
    : "text-accent";

  return (
    <nav className={mobile ? "space-y-1 mt-4" : "flex items-center space-x-1"}>
      {navigationItems.map((item) => {
        // Handle dropdown items
        if ('dropdown' in item && item.dropdown) {
          return (
            <div key={item.name}>
              <NavigationDropdown
                label={item.name}
                items={item.items}
                mobile={mobile}
                onItemClick={onItemClick}
              />
            </div>
          );
        }

        // Handle regular link items
        const active = isActive(item.href);
        return (
          <div key={item.name}>
            <Link
              to={item.href}
              className={`${linkClass} ${active ? activeLinkClass : ''}`}
              onClick={onItemClick}
            >
              {item.name}
              {!mobile && active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </Link>
          </div>
        );
      })}

      {/* CTA Button - Only show on mobile (desktop button is in Header) */}
      {mobile && (
        <div className="pt-4 border-t border-border mt-4">
          <Link to="/how-to-buy">
            <button className="btn-primary text-sm px-4 py-2 w-full">
              Buy $PRICKO
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

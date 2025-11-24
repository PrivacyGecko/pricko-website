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
  const { getAllProducts } = useProjectConfig();

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
    {
      label: 'How to Buy',
      href: '/how-to-buy'
    }
  ];

  // Build Privacy Tools dropdown items from products
  const privacyToolsDropdownItems: DropdownItem[] = getAllProducts().map(product => ({
    label: product.name,
    href: product.url || `/${product.id}`,
    status: product.status as 'live' | 'beta' | 'in-development',
    external: !!product.url
  }));

  // Add "View All Tools" link at the end
  privacyToolsDropdownItems.push({
    label: 'View All Tools',
    href: '/ecosystem'
  });

  // Define navigation structure
  const navigationItems: NavItem[] = [
    {
      name: '$PRICKO Token',
      dropdown: true,
      items: prickoTokenDropdownItems
    },
    {
      name: 'Privacy Tools',
      dropdown: true,
      items: privacyToolsDropdownItems
    },
    { name: 'How to Buy', href: '/how-to-buy' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const linkClass = mobile
    ? "block py-3 px-4 text-lg font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
    : "px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent relative focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded";

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

      {/* CTA Button - Updated to "Buy $PRICKO" */}
      <div className={mobile ? "pt-4 border-t border-border mt-4" : "ml-4"}>
        <Link to="/how-to-buy">
          <button className="btn-primary text-sm px-4 py-2">
            Buy $PRICKO
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

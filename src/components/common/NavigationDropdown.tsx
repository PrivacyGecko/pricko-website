import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface DropdownItem {
  label: string;
  href: string;
  status?: 'live' | 'beta' | 'in-development' | 'coming-soon';
  icon?: IconType;
  description?: string;
  external?: boolean;
  separator?: boolean;
}

interface NavigationDropdownProps {
  label: string;
  items: DropdownItem[];
  mobile?: boolean;
  onItemClick?: () => void;
  width?: 'default' | 'wide' | 'extra-wide';
}

const STATUS_INDICATORS = {
  live: { emoji: '', color: 'text-green-400', label: 'Live', bg: 'bg-green-400/10' },
  beta: { emoji: '', color: 'text-yellow-400', label: 'Beta', bg: 'bg-yellow-400/10' },
  'in-development': { emoji: '', color: 'text-orange-400', label: 'In Development', bg: 'bg-orange-400/10' },
  'coming-soon': { emoji: '', color: 'text-muted', label: 'Coming Soon', bg: 'bg-muted/10' }
};

const WIDTH_CLASSES = {
  default: 'w-72',
  wide: 'w-80',
  'extra-wide': 'w-96'
};

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({
  label,
  items,
  mobile = false,
  onItemClick,
  width = 'default'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Filter out separator items for keyboard navigation
  const navigableItems = items.filter(item => !item.separator);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          buttonRef.current?.focus();
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex((prev) => (prev < navigableItems.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
        case ' ':
          if (focusedIndex >= 0) {
            event.preventDefault();
            const item = navigableItems[focusedIndex];
            if (item.external) {
              window.open(item.href, '_blank', 'noopener,noreferrer');
            }
            setIsOpen(false);
            onItemClick?.();
          }
          break;
        case 'Tab':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex, navigableItems, onItemClick]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setFocusedIndex(-1);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
    onItemClick?.();
  };

  // Get the navigable index for an item
  const getNavigableIndex = (item: DropdownItem): number => {
    return navigableItems.indexOf(item);
  };

  // Render icon if present
  const renderIcon = (Icon: IconType | undefined, comingSoon: boolean = false) => {
    if (!Icon) return null;
    const colorClass = comingSoon ? 'text-muted/60' : 'text-muted group-hover:text-accent';
    return (
      <Icon 
        className={`w-4 h-4 flex-shrink-0 ${colorClass} transition-colors`} 
        aria-hidden="true"
      />
    );
  };

  // Render status badge
  const renderStatusBadge = (status: DropdownItem['status']) => {
    if (!status) return null;
    const statusInfo = STATUS_INDICATORS[status];
    return (
      <span className={`text-xs px-2 py-0.5 rounded-full ${statusInfo.color} ${statusInfo.bg} font-medium`}>
        {statusInfo.label}
      </span>
    );
  };

  // Mobile accordion rendering
  if (mobile) {
    return (
      <div className="w-full">
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between py-3 px-4 text-lg font-semibold transition-colors hover:text-accent focus:outline-none focus:text-accent rounded"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{label}</span>
          <div
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            <FiChevronDown className="w-5 h-5" />
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pl-4 pt-2 pb-2 space-y-1" role="menu">
            {items.map((item, index) => {
              // Render separator
              if (item.separator) {
                return (
                  <div key={`separator-${index}`} className="my-2 mx-4 border-t border-border/50" />
                );
              }

              const comingSoon = item.status === 'coming-soon';
              const navIndex = getNavigableIndex(item);
              const labelColorClass = comingSoon ? 'text-muted/70' : '';
              const descColorClass = comingSoon ? 'text-muted/50' : 'text-muted';
              const itemDisabledClass = comingSoon ? 'cursor-default pointer-events-none' : '';

              const content = (
                <>
                  <div className="flex items-center gap-3">
                    {item.icon && renderIcon(item.icon, comingSoon)}
                    <div className="flex flex-col">
                      <span className={`flex items-center gap-2 ${labelColorClass}`}>
                        {item.label}
                        {item.external && <FiExternalLink className="w-3 h-3" />}
                      </span>
                      {item.description && (
                        <span className={`text-xs ${descColorClass} mt-0.5`}>
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>
                  {item.status && renderStatusBadge(item.status)}
                </>
              );

              const itemClasses = `group flex items-center justify-between py-2.5 px-4 text-base rounded hover:bg-accent/10 hover:text-accent transition-colors ${
                focusedIndex === navIndex ? 'bg-accent/10 text-accent' : ''
              } ${itemDisabledClass}`;

              return (
                <div key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={itemClasses}
                      onClick={comingSoon ? (e) => e.preventDefault() : handleItemClick}
                      role="menuitem"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      to={comingSoon ? '#' : item.href}
                      className={itemClasses}
                      onClick={comingSoon ? (e) => e.preventDefault() : handleItemClick}
                      role="menuitem"
                    >
                      {content}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Desktop dropdown rendering
  return (
    <div ref={dropdownRef} className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:text-accent relative focus:outline-none focus:text-accent rounded"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <div
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <FiChevronDown className="w-4 h-4" />
        </div>
      </button>

      <div
        className={`absolute top-full left-0 mt-2 ${WIDTH_CLASSES[width]} bg-secondary/95 backdrop-blur-md border border-accent/20 rounded-lg shadow-xl overflow-hidden z-50 transition-all duration-200 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        role="menu"
      >
        <div className="py-2 max-h-[500px] overflow-y-auto custom-scrollbar">
          {items.map((item, index) => {
            // Render separator
            if (item.separator) {
              return (
                <div key={`separator-${index}`} className="my-2 mx-3 border-t border-border/50" />
              );
            }

            const comingSoon = item.status === 'coming-soon';
            const navIndex = getNavigableIndex(item);
            const isFocused = focusedIndex === navIndex;
            const labelColorClass = comingSoon ? 'text-muted/70' : '';
            const descColorClass = comingSoon ? 'text-muted/50' : 'text-muted';
            const cursorClass = comingSoon ? 'cursor-default' : '';

            const hoverClass = (isFocused || !comingSoon) 
              ? 'hover:bg-accent/10 hover:text-accent hover:border-l-accent' 
              : '';
            const focusedClass = isFocused 
              ? 'bg-accent/10 text-accent border-l-accent' 
              : 'border-l-transparent';

            const itemContent = (
              <>
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  {item.icon && (
                    <div className="mt-0.5">
                      {renderIcon(item.icon, comingSoon)}
                    </div>
                  )}
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className={`flex items-center gap-2 font-medium ${labelColorClass}`}>
                      {item.label}
                      {item.external && <FiExternalLink className="w-3 h-3 flex-shrink-0" />}
                    </span>
                    {item.description && (
                      <span className={`text-xs ${descColorClass} mt-0.5 leading-relaxed`}>
                        {item.description}
                      </span>
                    )}
                  </div>
                </div>
                {renderStatusBadge(item.status)}
              </>
            );

            const baseClasses = `group flex items-center justify-between px-4 py-3 text-sm transition-all duration-150 border-l-2 ${hoverClass} ${focusedClass} ${cursorClass}`;

            return (
              <div key={item.href}>
                {item.external ? (
                  <a
                    href={comingSoon ? undefined : item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClasses}
                    onClick={comingSoon ? (e) => e.preventDefault() : handleItemClick}
                    onMouseEnter={() => !comingSoon && setFocusedIndex(navIndex)}
                    onMouseLeave={() => setFocusedIndex(-1)}
                    role="menuitem"
                    aria-disabled={comingSoon}
                  >
                    {itemContent}
                  </a>
                ) : (
                  <Link
                    to={comingSoon ? '#' : item.href}
                    className={baseClasses}
                    onClick={comingSoon ? (e) => e.preventDefault() : handleItemClick}
                    onMouseEnter={() => !comingSoon && setFocusedIndex(navIndex)}
                    onMouseLeave={() => setFocusedIndex(-1)}
                    role="menuitem"
                    aria-disabled={comingSoon}
                  >
                    {itemContent}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationDropdown;

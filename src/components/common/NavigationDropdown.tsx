import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';

export interface DropdownItem {
  label: string;
  href: string;
  status?: 'live' | 'beta' | 'in-development';
  icon?: string;
  external?: boolean;
}

interface NavigationDropdownProps {
  label: string;
  items: DropdownItem[];
  mobile?: boolean;
  onItemClick?: () => void;
}

const STATUS_INDICATORS = {
  live: { emoji: '🟢', color: 'text-green-400', label: 'Live' },
  beta: { emoji: '🧪', color: 'text-yellow-400', label: 'Beta' },
  'in-development': { emoji: '⚡', color: 'text-orange-400', label: 'In Development' }
};

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({
  label,
  items,
  mobile = false,
  onItemClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
          setFocusedIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
        case ' ':
          if (focusedIndex >= 0) {
            event.preventDefault();
            const item = items[focusedIndex];
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
  }, [isOpen, focusedIndex, items, onItemClick]);

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

  // Mobile accordion rendering
  if (mobile) {
    return (
      <div className="w-full">
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between py-3 px-4 text-lg font-medium transition-colors hover:text-accent focus:outline-none rounded"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{label}</span>
          <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <FiChevronDown className="w-5 h-5" />
          </div>
        </button>

        {isOpen && (
          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-4 pt-2 pb-2 space-y-1" role="menu">
              {items.map((item) => {
                const statusInfo = item.status ? STATUS_INDICATORS[item.status] : null;

                return (
                  <div key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between py-2 px-4 text-base rounded hover:bg-accent/10 hover:text-accent transition-colors ${
                          focusedIndex === items.indexOf(item) ? 'bg-accent/10 text-accent' : ''
                        }`}
                        onClick={handleItemClick}
                        role="menuitem"
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                          <FiExternalLink className="w-3 h-3" />
                        </span>
                        {statusInfo && (
                          <span className={`text-xs ${statusInfo.color}`}>
                            {statusInfo.emoji} {statusInfo.label}
                          </span>
                        )}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between py-2 px-4 text-base rounded hover:bg-accent/10 hover:text-accent transition-colors ${
                          focusedIndex === items.indexOf(item) ? 'bg-accent/10 text-accent' : ''
                        }`}
                        onClick={handleItemClick}
                        role="menuitem"
                      >
                        <span>{item.label}</span>
                        {statusInfo && (
                          <span className={`text-xs ${statusInfo.color}`}>
                            {statusInfo.emoji} {statusInfo.label}
                          </span>
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop dropdown rendering
  return (
    <div ref={dropdownRef} className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent relative focus:outline-none rounded"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <FiChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-72 bg-secondary/95 backdrop-blur-md border border-accent/20 rounded-lg shadow-xl overflow-hidden z-50 opacity-100"
          role="menu"
        >
          <div className="py-2 max-h-[500px] overflow-y-auto custom-scrollbar">
            {items.map((item, index) => {
              const statusInfo = item.status ? STATUS_INDICATORS[item.status] : null;
              const isFocused = focusedIndex === index;

              return (
                <div key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between px-4 py-3 text-sm hover:bg-accent/10 hover:text-accent transition-colors ${
                        isFocused ? 'bg-accent/10 text-accent' : ''
                      }`}
                      onClick={handleItemClick}
                      onMouseEnter={() => setFocusedIndex(index)}
                      role="menuitem"
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        <FiExternalLink className="w-3 h-3" />
                      </span>
                      {statusInfo && (
                        <span className={`text-xs ${statusInfo.color} flex items-center gap-1`}>
                          {statusInfo.emoji}
                        </span>
                      )}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center justify-between px-4 py-3 text-sm hover:bg-accent/10 hover:text-accent transition-colors ${
                        isFocused ? 'bg-accent/10 text-accent' : ''
                      }`}
                      onClick={handleItemClick}
                      onMouseEnter={() => setFocusedIndex(index)}
                      role="menuitem"
                    >
                      <span>{item.label}</span>
                      {statusInfo && (
                        <span className={`text-xs ${statusInfo.color} flex items-center gap-1`}>
                          {statusInfo.emoji}
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationDropdown;

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs font-mono text-slate-500">
      <Link to="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-[#DFD3BD] flex-shrink-0" />
            {isLast || !item.path ? (
              <span className="text-slate-900 font-medium truncate max-w-xs">{item.name}</span>
            ) : (
              <Link to={item.path} className="hover:text-blue-600 transition-colors truncate max-w-xs">
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
  const [recentPages, setRecentPages] = useState(() => {
    const saved = localStorage.getItem('recentlyViewed');
    return saved ? JSON.parse(saved) : [];
  });
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/recently-viewed') return;

    const newPage = {
      path: location.pathname,
      title: document.title || location.pathname,
      timestamp: new Date().toISOString()
    };

    setRecentPages(prev => {
      const updated = [newPage, ...prev.filter(p => p.path !== location.pathname)].slice(0, 10);
      localStorage.setItem('recentlyViewed', JSON.stringify(updated));
      return updated;
    });
  }, [location]);

  return (
    <RecentlyViewedContext.Provider value={{ recentPages }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);

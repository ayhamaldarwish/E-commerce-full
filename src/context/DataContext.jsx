/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { 
  products, 
  categories, 
  blogPosts, 
  testimonials, 
  recentPosts, 
  blogCategories, 
  popularTags, 
  offers 
} from '../data/products';

const DataContext = createContext();

export function DataProvider({ children }) {
  const data = {
    products,
    categories,
    blogs: blogPosts,
    testimonials,
    recentPosts,
    blogCategories,
    popularTags,
    offers
  };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

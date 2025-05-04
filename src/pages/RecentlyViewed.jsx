import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

const RecentlyViewed = () => {
  const { recentPages } = useRecentlyViewed();

  return (
    <div className="max-w-[1170px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Recently Viewed Pages</h1>
      
      {recentPages.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No recently viewed pages</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {recentPages.map((page, index) => (
            <Link
              key={index}
              to={page.path}
              className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow flex items-center gap-4"
            >
              <FaClock className="text-blue-600 text-xl" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">
                  {page.title || page.path.replace('/', '')}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(page.timestamp).toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentlyViewed;

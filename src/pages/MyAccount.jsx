import React, { useState } from 'react';
import { FaUser, FaClipboardList, FaDownload, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';
import { RiDashboardLine } from 'react-icons/ri';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo] = useState({
    image: 'src/assets/user-02.jpg',
    name: 'James Septimal',
    email: 'james@example.com',
    memberSince: 'Sep 2020'
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 ">Dashboard</h3>
            <p className="text-gray-600">
              Hello {userInfo.name} (not {userInfo.name}? <button className="text-red-500 hover:text-red-600 cursor-pointer">Log Out</button>)
            </p>
            <p className="text-gray-600">
              From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
            </p>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Orders</h3>
            <div className="border rounded-lg divide-y">
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Order #12345</span>
                  <span className="text-blue-600">$299.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Date: May 1, 2025</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Delivered</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Order #12346</span>
                  <span className="text-blue-600">$199.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Date: April 28, 2025</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Processing</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'downloads':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Downloads</h3>
            <p className="text-gray-600">No downloads available yet.</p>
          </div>
        );

      case 'addresses':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Addresses</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between mb-4">
                  <h4 className="font-medium">Shipping Address</h4>
                  <button className="text-blue-600 hover:text-blue-700">Edit</button>
                </div>
                <address className="text-gray-600 not-italic">
                  James Septimus<br />
                  1234 Market Street<br />
                  San Francisco, CA 94103<br />
                  United States
                </address>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between mb-4">
                  <h4 className="font-medium">Billing Address</h4>
                  <button className="text-blue-600 hover:text-blue-700">Edit</button>
                </div>
                <address className="text-gray-600 not-italic">
                  James Septimus<br />
                  1234 Market Street<br />
                  San Francisco, CA 94103<br />
                  United States
                </address>
              </div>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Account Details</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={userInfo.name}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={userInfo.email}
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Password Change</h4>
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Current password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="src/assets/user-02.jpg"
                  alt={userInfo.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{userInfo.name}</h3>
                  <p className="text-sm text-gray-600">Member Since {userInfo.memberSince}</p>
                </div>
              </div>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <RiDashboardLine />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === 'orders' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaClipboardList />
                  <span>Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('downloads')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === 'downloads' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaDownload />
                  <span>Downloads</span>
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === 'addresses' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaMapMarkerAlt />
                  <span>Addresses</span>
                </button>
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                    activeTab === 'account' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaUser />
                  <span>Account Details</span>
                </button>
                <button
                  className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
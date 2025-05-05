import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyAccount from './pages/MyAccount';
import MailSuccess from './pages/MailSuccess';
import Error from './pages/Error';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import Checkout from './pages/Checkout';
import RecentlyViewed from './pages/RecentlyViewed';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <RecentlyViewedProvider>
                <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <main className="flex-grow pt-[200px] sm:pt-[180px] md:pt-[150px]"> {/* Responsive padding-top */}
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/sign-in" element={<SignIn />} />
                      <Route path="/sign-up" element={<SignUp />} />
                      <Route path="/my-account" element={<MyAccount />} />
                      <Route path="/mail-success" element={<MailSuccess />} />
                      <Route path="/blog" element={<Blogs />} />
                      <Route path="/blog/:id" element={<BlogDetails />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/recently-viewed" element={<RecentlyViewed />} />
                      <Route path="*" element={<Error />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </RecentlyViewedProvider>
            </Router>
          </WishlistProvider>
        </CartProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;

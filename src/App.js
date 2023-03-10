import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// goBtn
import Go from './components/Go';

// pages
import Login from './pages/Login';
import Join from './pages/Join';
import Mypage from './pages/Mypage';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

// style
import './assets/styles/style.scss';
import WishList from './pages/WishList';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="wrap">
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<ProductList />} />
              <Route path=":itemId" element={<ProductDetail />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
            <Route path="mypage" element={<Mypage />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="collection" element={<Collection />} />
            <Route path="wishlist" element={<WishList />} />
          </Routes>
          <Go />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

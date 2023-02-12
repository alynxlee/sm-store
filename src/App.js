import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// goBtn
import Go from "./components/Go";

// pages
import Product from "./pages/Product";

// style
import "./assets/styles/style.scss";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Mypage from "./pages/Mypage";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Product />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="join" element={<Join />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="collection" element={<Collection />} />
      </Routes>
      <Footer />
      <Go />
    </>
  );
}

export default App;

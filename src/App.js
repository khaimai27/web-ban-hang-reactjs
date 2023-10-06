import logo from './logo.svg';
import './App.css';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import Myheader from './components/headerjs';
import MyFooter from './components/footerjs';
import NewsPage from './components/page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './components/detailProduct';

function App() {
  return (
    <>
      <Myheader />
      <>
        <div className='slider-show'>
          {/* <Slide/> */}
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </>
      <MyFooter />
    </>
  );
}

export default App;

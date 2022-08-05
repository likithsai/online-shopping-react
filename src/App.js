import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route , useParams } from 'react-router-dom';  
import './assets/sass/App.scss';
import './assets/js/Script.js';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import DownloadPage from './pages/DownloadPage';

function App() {
  useEffect(() => {
      const URL = "https://checkout.razorpay.com/v1/checkout.js"
      const script = document.createElement("script");
      script.type = 'text/javascript';
      script.src = URL;
      script.async = true;
      document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/products/:productname' element={<ProductPage />} />
              <Route exact path="/cart" element={<CartPage />} />
              <Route path="/download/:fileid" element={<DownloadPage />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;

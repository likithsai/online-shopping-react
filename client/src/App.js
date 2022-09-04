import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route , useParams } from 'react-router-dom';  
import './assets/sass/App.scss';
import './assets/js/Script.js';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import DownloadPage from './pages/DownloadPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import OrderPage from './pages/OrderPage';
import AppData from './data/appdata.json';

function App() {
  const [nodeJSServerStatus, setNodeJSServerStatus] = useState(false);

  useEffect(() => {
      const URL = "https://checkout.razorpay.com/v1/checkout.js"
      const script = document.createElement("script");
      script.type = 'text/javascript';
      script.src = URL;
      script.async = true;
      document.body.appendChild(script);

      //  check if nodejs server is active or not?
      //  if not, then print error message
      fetch(AppData.apiserver).then((res) => {
          if(res.ok) {
              setNodeJSServerStatus(true);
          } else {
            setNodeJSServerStatus(false);
          }
      });
  }, []);
 
  if (nodeJSServerStatus) {
    return (
      <div className="App">
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/products/:productname' element={<ProductPage />} />
                <Route exact path="/cart" element={<CartPage />} />
                <Route path="/download/:fileid" element={<DownloadPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/orders" element={<OrderPage />} />
            </Routes>
        </Router>
      </div>
    );
  } else {
    //  error page
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
              <h1 className="display-1 fw-bold"><i className="bi bi-wifi-off"></i></h1>
              <p className="fs-3 fw-bold text-danger m-0">Server Offline.</p>
              <p className="lead">Please try again after sometime</p>
              <button type="button" className="btn btn-primary mt-2" onClick={() => { window.location.reload(); }}>
                <i className="bi bi-arrow-clockwise me-2"></i>
                <span className="text-uppercase">Refresh</span>
              </button>
          </div>
      </div>
    );
  }
}

export default App;

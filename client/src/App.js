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
      fetch(AppData.apiserver)
      .then((res) => {
          if(res.ok) {
              setNodeJSServerStatus(true);
          } else {
            setNodeJSServerStatus(false);
          }
      });

      // fetch(AppData.apiserver + '/registerorder', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     ordername: 'dvdfvfd',
      //     ordercusid: 5,
      //     orderprice: 10.76
      //   })
      // })
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
            </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <p>Server offline!</p>
    );
  }
}

export default App;

import { BrowserRouter as Router, Routes, Route , useParams } from 'react-router-dom';  
import './assets/sass/App.scss';
import './assets/js/Script.js';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import DownloadPage from './pages/DownloadPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path='/' element={<HomePage />}></Route>
              <Route path='/products/:productname' element={<ProductPage />}></Route>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/download/:fileid" element={<DownloadPage />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;

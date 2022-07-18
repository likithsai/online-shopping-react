import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';  
import './assets/sass/App.scss';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  const OtherPage = (props) => {
      const id  = useParams();
      return(
          <p>Params: { id.productname }</p>
      );
  }

  return (
    <div className="App">
      {/* <Homepage /> */}
      <Router>
          <Routes>
              <Route exact path='/' element={<HomePage />}></Route>
              <Route path='/products/:productname' element={<ProductPage />}></Route>
              <Route path="*" element={<OtherPage />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;

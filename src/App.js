import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import './assets/sass/App.scss';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;

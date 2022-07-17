import './assets/sass/App.scss';
import Header from './component/Header';
import Jumboltron from './component/Jumboltron';
import Content from './component/Content';
import Footer from './component/Footer';
import AppData from './data/appdata.json';

function App() {
  return (
    <div className="App">
      <Header headerTitle={AppData.appname} />
      <Jumboltron title="Shop in style" subTitle="Search with over 1000+ products listed" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

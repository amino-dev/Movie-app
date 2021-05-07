
import './App.css';
import Home from './components/home';
import Films from './components/films';
import Series from './components/series';
import Favorites from './components/favorites'
import Footer from './components/footer'
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <div>
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Films} />
          <Route path="/series" component={Series} />
          <Route path="/favorite" component={Favorites} />
          <Footer/>
      </BrowserRouter>
     </div>
    </div>
  );
}
export default App;




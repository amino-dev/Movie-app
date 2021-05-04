

import './App.css';
import Movies from './components/movies';
import NavBar from './components/nav';
import Text from './components/text';
import Images from './components/carousel'
import Footer from './components/footer'



function App() {
  return (
    <div className="App">
     <NavBar />
     <Images />
     <Text />
     <Movies />
     <Footer/>
     
    </div>
  );
}
export default App;

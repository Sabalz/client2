import logo from './logo.svg';
import './App.css';

import { BrowserRouter} from 'react-router-dom'

import Header from './compnents/Layouts/Header';
import Footer from './compnents/Layouts/Footer';
import Routers from './compnents/Routers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     Hello Saba
     <Header></Header>
     <Routers></Routers>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;


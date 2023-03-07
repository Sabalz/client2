import logo from './logo.svg';
import './App.css';


import Routers from './components/Routers';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';

function App() {
  return (
   
    <div className="App" id="app">

       <BrowserRouter>
     <Header></Header>
     <Routers></Routers>
     <Footer></Footer>
     </BrowserRouter>
     
    </div>
  );
}

export default App;



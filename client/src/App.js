import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Landing from './components/landing/Landing.js';
import Cards from './components/cards/Cards.js';
import InfoPais from './components/infoPais/infoPais.js'


function App() {
  return (
    <div className="App">
      <div className='principal'>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Navbar} />
      <Route exact path='/home' component={Cards} />
      <Route path='/home/country/:idPais' component={InfoPais} />
      {/*
      <Route exact path='/addActivity' component={} /> */}
      </div>
    </div>
  );
}

export default App;

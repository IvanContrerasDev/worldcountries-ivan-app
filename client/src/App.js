import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Landing from './components/landing/Landing.js';
import Cards from './components/cards/Cards.js';
import InfoPais from './components/infoPais/infoPais.js';
import CardsFilter from './components/cards/CardsFilter.js';
import addActivity from './components/addActivity/addActivity.js';


function App() {
  return (
    <div className="App">
      <div className='principal'>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Navbar} />
      <Route exact path='/home' component={Cards} />
      <Route exact path='/home/filter' component={CardsFilter}/>
      <Route exact path='/home/country/:idPais' component={InfoPais} />
      <Route exact path='/home/country/:idPais/addActivity' component={addActivity} />
      </div>
    </div>
  );
}

export default App;

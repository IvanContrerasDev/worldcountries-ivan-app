import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Landing from './components/landing/Landing';
import Cards from './components/cards/Cards';


function App() {
  return (
    <div className="App">
      <div className='principal'>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Navbar} />
      <Route exact path='/home' component={Cards} />
      {/*
      <Route exact path='/country' component={} />
      <Route exact path='/addActivity' component={} /> */}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar/navbar';
import PageHome from './Pages/Home/page-home';
import PageRecipes from './Pages/Recipes/page-recipes';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={PageHome}/>
      <Route exact path="/recipes" component={PageRecipes}/>
      <Footer/>
    </div>
  );
}

export default App;

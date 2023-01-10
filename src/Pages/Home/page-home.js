import React from 'react';
import './page-home.css';
import { Button } from '../../components/Button/button';
import { Link } from 'react-router-dom';

function PageHome() {
  return (
    <div className="pageHome">
      <div className='content'>
        <h1>GOOD FOODS,</h1>
        <h2>GOOD <span>RECIPES</span>.</h2>
        <p>Say good bye to failed cooking and</p>
        <p>get all the food recipes you need here!</p>
        <Link to='/recipes'>
          <Button buttonStyle='btn--primary'>Explore Recipes</Button>
        </Link>
      </div>
    </div>
  );
}

export default PageHome;
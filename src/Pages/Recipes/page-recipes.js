import React, { useEffect, useState }  from "react";
import Recipe from "../../components/Recipe/recipe";
import './page-recipes.css';

function PageRecipes(){
    const APP_ID = "f4c4f848";
    const APP_KEY = "f3d8acc7e99568660bbc0c22744ecb1a";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');


    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };

    return(
        <div className="pageRecipes">
            <div className="background">            
                <div className="title-search">
                    <h1>Find your favorite foods recipes!</h1>
                    <form onSubmit={getSearch} className='search-form'>
                        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
                        <button className='search-btn' type='submit'>
                        <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className='recipes'>
                {recipes.map(recipe =>(
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
                ))}
            </div>
        </div>
    );
}

export default PageRecipes;
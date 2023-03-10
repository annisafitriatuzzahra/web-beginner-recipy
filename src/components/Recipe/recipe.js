import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <img className={style.image} src={image}/>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;
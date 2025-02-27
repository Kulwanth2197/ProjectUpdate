import React from 'react';
import style from './Recipe.module.css';

const Recipes= ({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe} >
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>

                ))}  
                
                  </ol>
            <p>{calories}</p>
            <img src={image} alt=""/> 
        </div>
    )
}
export default Recipes;
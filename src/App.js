import React, { useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap';
import Recipes from './Recipes';
import './App.css';


  const App =()=>{
    const APP_ID = '0f38742f';
    const APP_KEY = " fc7772f319bc28cc18f1cf1d8be8fe10";


    const [recipes,setRecipes]= useState([]);
    const [search,setSearch]=useState("");
    const [query,setQuery]=useState('chicken');

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes= async () => {
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch= e =>{
    setSearch(e.target.value);

  }

  const getsearch= e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return(
    <div className ="Nav">
      <Nav.Link href="HOME">HOME</Nav.Link>
      <Nav.Link href="Foods">Foods</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
   






    <div className="App">
      <form onSubmit={getsearch} className ="search-form">
        <input className="search-bar" type="text" onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button> 

      </form>


      {recipes.map(recipe=>(
        <Recipes 
        title ={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}


    </div>
  </div>
  )
}
export default App;
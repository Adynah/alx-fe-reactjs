import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';


function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Recipe Book</h1>
        <SearchBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm onAddRecipe={addRecipe} />
                <RecipeList recipes={recipes} />
              </>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

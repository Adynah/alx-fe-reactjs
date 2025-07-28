import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';


function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Recipe Book</h1>

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
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

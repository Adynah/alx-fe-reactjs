import { useEffect } from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Recipes</h2>
      <ul>
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <Link to={`/recipe-details/${recipe.id}`} style={{ marginLeft: '10px' }}>
                View Details
              </Link>
            </li>
          ))
        ) : (
          <p>No matching recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;


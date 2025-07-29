import { useEffect } from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const favorites = useRecipeStore(state => state.favorites);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);


  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const isFavorite = (id) => favorites.includes(id);

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
               {!isFavorite(recipe.id) && (
                <button
                  onClick={() => addFavorite(recipe.id)}
                  style={{ marginRight: '10px' }}
                >
                  Add to Favorites
                </button>
              )}
              <button onClick={generateRecommendations}>
                Recommend Similar
              </button>
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


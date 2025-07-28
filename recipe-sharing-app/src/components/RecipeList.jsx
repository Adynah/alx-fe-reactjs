import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3> - 
            <Link to="/recipe-details" style={{ marginLeft: '10px' }}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

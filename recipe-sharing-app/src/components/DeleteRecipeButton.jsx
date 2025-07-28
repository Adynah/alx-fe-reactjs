import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (!confirmed) return;

    const filtered = recipes.filter((r) => r.id !== recipeId);
    setRecipes(filtered);
    deleteRecipe(recipeId);
    alert('Recipe deleted.');
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

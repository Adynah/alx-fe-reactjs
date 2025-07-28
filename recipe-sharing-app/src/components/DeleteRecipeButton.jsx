import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (!confirmed) return;

    const filtered = recipes.filter((r) => r.id !== recipeId);
    setRecipes(filtered);
    alert('Recipe deleted.');
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

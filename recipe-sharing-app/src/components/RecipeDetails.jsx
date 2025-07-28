import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <h3>Delete Recipe</h3>
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;

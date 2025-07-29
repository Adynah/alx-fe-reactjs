import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updated = recipes.map((r) =>
      r.id === recipe.id ? { ...r, title, description } : r
    );

    setRecipes(updated);
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
        style={{ display: 'block', margin: '0.5rem 0' }}
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
        style={{ display: 'block', margin: '0.5rem 0' }}
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;

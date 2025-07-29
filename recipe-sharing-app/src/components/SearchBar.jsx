import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const setIngredientFilter = useRecipeStore(state => state.setIngredientFilter);
  const setTimeFilter = useRecipeStore(state => state.setTimeFilter);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = () => {
    filterRecipes();
  };

  return (
    <div style={{ padding: '1rem', backgroundColor: '#f0f8ff', borderBottom: '1px solid #ccc' }}>
      <input type="text" placeholder="Search by title" onChange={(e) => { setSearchTerm(e.target.value); handleChange(); }} />
      <input type="text" placeholder="Filter by ingredient" onChange={(e) => { setIngredientFilter(e.target.value); handleChange(); }} />
      <input type="number" placeholder="Max cooking time (mins)" onChange={(e) => { setTimeFilter(e.target.value); handleChange(); }} />
    </div>
  );
};

export default SearchBar;

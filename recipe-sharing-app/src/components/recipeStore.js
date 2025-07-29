import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  ingredientFilter: '',
  timeFilter: '',
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
}),


  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  setIngredientFilter: (ingredient) => {
    set({ ingredientFilter: ingredient });
    get().filterRecipes();
  },

  setTimeFilter: (time) => {
    set({ timeFilter: time });
    get().filterRecipes();
  },

  filterRecipes: () => {
  const { recipes, searchTerm, ingredientFilter, timeFilter } = get();
  const filtered = recipes.filter((recipe) => {
    const matchesTitle = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesIngredient = ingredientFilter
      ? recipe.ingredients?.join(', ').toLowerCase().includes(ingredientFilter.toLowerCase())
      : true;

    const matchesTime = timeFilter
      ? recipe.time && parseInt(recipe.time) <= parseInt(timeFilter)
      : true;

    return matchesTitle && matchesIngredient && matchesTime;
  });

  set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;

import { create } from 'zustand'

const useRecipeStore = create(set => ({
    recipe: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe]})),
    setRecipe: (recipe) => set({ recipe })
}));

export default useRecipeStore

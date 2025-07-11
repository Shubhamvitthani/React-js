export const FETCH_RECIPES = 'FETCH_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

const API = 'http://localhost:3001/recipes';

export const fetchRecipes = () => async dispatch => {
  const res = await fetch(API);
  const data = await res.json();
  dispatch({ type: FETCH_RECIPES, payload: data });
};

export const addRecipe = (recipe) => async dispatch => {
  const res = await fetch('http://localhost:3001/recipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe)
  });
  const data = await res.json();
  dispatch({ type: ADD_RECIPE, payload: data });
};


export const updateRecipe = recipe => async dispatch => {
  const res = await fetch(`${API}/${recipe.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe)
  });
  const data = await res.json();
  dispatch({ type: UPDATE_RECIPE, payload: data });
};

export const deleteRecipe = id => async dispatch => {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  dispatch({ type: DELETE_RECIPE, payload: id });
};



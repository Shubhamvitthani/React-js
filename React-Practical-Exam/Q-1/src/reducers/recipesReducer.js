import {
  FETCH_RECIPES,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE
} from '../Action/recipeActions';

const initialState = { items: [] };

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, items: action.payload };

    case ADD_RECIPE:
      // We will not push here, because fetchRecipes replaces items after add
      return state;

    case UPDATE_RECIPE:
      return {
        ...state,
        items: state.items.map(r =>
          r.id === action.payload.id ? action.payload : r
        )
      };

    case DELETE_RECIPE:
      return {
        ...state,
        items: state.items.filter(r => r.id !== action.payload)
      };

    default:
      return state;
  }
}

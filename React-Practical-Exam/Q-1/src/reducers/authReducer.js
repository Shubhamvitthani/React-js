const initialState = {
  isAuthenticated: false,
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return { isAuthenticated: true, user: action.payload };
    case 'SIGN_OUT':
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
}

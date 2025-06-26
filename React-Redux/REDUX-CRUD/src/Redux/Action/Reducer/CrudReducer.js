let initialstate = {
    users: JSON.parse(localStorage.getItem('users')) || [],
    single: null
}
const add_Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_USER':
            let oldRecord = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(oldRecord));
            return {
                ...state,
                users: oldRecord
            }
        case 'DELETE_USER':
            const filteredUsers = state.users.filter(user => user.id !== action.payload);
            localStorage.setItem('users', JSON.stringify(filteredUsers)); // localStorage bhi update
            return {
                ...state,
                users: filteredUsers
            };
        case 'EDIT_USER':
            const singleData = state.users.find(user => user.id === action.payload);
            return {
                ...state,
                single: singleData
            };

        case 'UPDATE_USER':
            const updatedUsers = state.users.map(user =>
                user.id === action.payload.id ? action.payload : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return {
                ...state,
                users: updatedUsers,
                single: null
            };
        default:
            return state;


    }
}
export default add_Reducer;
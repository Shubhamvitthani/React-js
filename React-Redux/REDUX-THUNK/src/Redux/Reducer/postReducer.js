const initialstate = {
    post: []
}
const postReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'getpost':
            return {
                ...state,
                post: action.payload
            }
        default:
            return state

    }
}
export default postReducer;
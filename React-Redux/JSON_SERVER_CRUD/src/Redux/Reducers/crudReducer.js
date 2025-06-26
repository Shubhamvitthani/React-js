let initialState = {
    users: [],
    error: null
}
const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_data':
            return state
        default:
            return state

    }
}
export default crudReducer;
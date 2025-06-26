const add_Data = (data) => {
    return {
        type: 'ADD_USER',
        payload: data
    };
};

const delete_User = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id
    };
};

const edit_user = (id) => {
    return {
        type: 'EDIT_USER',
        payload: id
    }
}
const update_User = (data) => {
    return {
        type: 'UPDATE_USER',
        payload: data
    };
}

export { add_Data, delete_User, edit_user, update_User };

export const GET_POST = () => {
    return async (dispatch) => {
        try {
            const res = await fetch(`https://dummyjson.com/auth/login`)
            const data = await res.json()
            dispatch({
            })
        } catch (err) {
            console.log(err)
        }
    }
}

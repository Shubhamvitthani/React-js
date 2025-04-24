import React from 'react'

const Api = () => {
    const getApi = () => {
        fetch(`http://localhost:5000/menu`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })
    }
    return (
        <div>

        </div>
    )
}

export default Api

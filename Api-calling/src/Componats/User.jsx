import React from 'react'

const User = ({ users }) => {
    console.log(users);

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        users.map((val, i) => {
                            return (
                                <div className="col-md-4">
                                    <div className="card mt-4">
                                        <img src={val.image} className="card-img-top" />
                                        <div className="card-body">
                                            <h6>ID : {val.id}</h6>
                                            <h6>FirstName : {val.firstName}</h6>
                                            <h6>LastName : {val.lastName}</h6>
                                            <h6>Age : {val.age}</h6>
                                            <h6>Gender : {val.gender}</h6>
                                            <h6>email : {val.email}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default User

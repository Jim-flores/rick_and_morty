import React from 'react'

const Location = ({user}) => {
    console.log(user)
    return (
        <div>
            <h2>{user?.name}</h2>
            <div className='data'>
                <h4> <b>Type: </b> {user?.type}</h4>
                <h4> <b>Dimension: </b> {user?.dimension}</h4>
                <h4> <b>Residents: </b> {user?.residents.length}</h4>
            </div>
        </div>
    )
}

export default Location
import React from 'react'

const Follower = (props) => {
    const { avatar_url, login } = props.follower
    return (
        <div>
            <img src={ avatar_url } alt="User Avatar" /><h5>&nbsp;{ login }</h5>
        </div>
    )
}

export default Follower
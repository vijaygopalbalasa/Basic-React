import React from "react";

const Button = (props) => {
    const {children} =props
    const handleClick = () => {
        console.log('You have clicked')
    }

    return <button onClick={handleClick}>
        {children}
    </button>
}

export default Button;
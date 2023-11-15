import Button from "./Button.jsx";
import React, {useState, useEffect} from "react";
import Text from "./Text.js";

const App = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
            setInterval(() => {
                setCounter((prevCounter => prevCounter + 1))
            }, 1000)
    }, [])
    
    return <>
    <span>Current time is:  {counter}</span>
      
    </>
}

export default App;
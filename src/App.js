import Button from "./Button.jsx";
import React, {useState} from "react";
import Text from "./Text.js";

const App = () => {
     const [dataf, setDataf] = useState();

    const data = [
        {id: 'a', Text: "text1"},
        {id: 'b', Text: "text2"},
        {id: 'c', Text: "text3"},
        {id: 'd', Text: "text4"},
        {id: 'e', Text: "text5"},
    ]
    return <>
        {data.map((item) => <Text>{item.Text}</Text>)}
    </>

}

export default App;
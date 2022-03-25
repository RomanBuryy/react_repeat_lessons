import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useState} from "react";


function App() {

    const [trigger, setTrigger] = useState(null);

    const update = (data) => {
      setTrigger(data)
    }

    return (
        <>
            <Form update={update}/>
            <Cars trigger={trigger}/>

        </>
    );
}

export default App;

import './App.css';
import Form from "./components/Form/Form";
import React, {useState} from "react";
import Cars from "./components/Cars/Cars";

function App() {

    const [cars, setCars] = useState([]);

    const getFormData = (data) => {
        setCars([...cars, { id: new Date().getTime(),...data}]);
    }

    const getCarId = (id) => {
        setCars(cars.filter(car => car.id !== id))
    }

    return (
        <>
            <Form/>
            <Cars  getCarId={getCarId}/>
        </>
    );
}

export default App;

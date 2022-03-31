import React, {useEffect, useReducer} from 'react';
import Car from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../store";

const Cars = () => {

    const {cars, status, error} = useSelector(state => state.carReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, []);

    return (
        <div>
            {status === 'loading' && <h1>Loading</h1>}
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
            {error && <h2>{error}</h2>}
        </div>
    );
};

export default Cars;
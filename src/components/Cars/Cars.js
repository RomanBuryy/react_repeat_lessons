import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger}) => {

    const deleteCar = (carId) =>{
        carService.deleteById(carId);
        console.log(carId);
    }

    const updateCar = async (id, car) => {
        await carService.updateById(id, car)
    }



    const [cars, setCars] = useState([]);

    useEffect( () => {
        carService.getAll().then(value => setCars([...value]));
    },[trigger]);

    return (
        <div>
            {cars && cars.map(value => <Car key={value.id} car={value} deleteCar={deleteCar} updateCar={updateCar}/>)}
        </div>
    );
};

export default Cars;
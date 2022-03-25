import React from 'react';

const Car = ({car, deleteCar, updateCar}) => {

    return (
        <div>
            <div>id: {car.id} </div>
            <div>model: {car.model} </div>
            <div>price: {car.price} </div>
            <div>year: {car.year} </div>
            <button onClick={() => {
                deleteCar(car.id);
            }}>delete
            </button>

            <button onClick={() => {


            }}>edit
            </button>
            <br/>
        </div>
    );
};

export default Car;
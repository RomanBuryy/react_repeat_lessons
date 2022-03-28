import React from 'react';

const Car = ({car, getCarId}) => {

    const {id, model, price, year} = car

    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <button onClick={() => {
                getCarId(id)
            }}>Delete
            </button>

        </div>
    );
};

export default Car;
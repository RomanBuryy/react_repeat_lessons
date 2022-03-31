import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../store";

const Car = ({car}) => {

    const {id, model, price, year} = car

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <button onClick={() => {
                dispatch(deleteCarThunk({id}))
            }}>Delete
            </button>

        </div>
    );
};

export default Car;
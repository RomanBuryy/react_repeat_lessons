import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const Form = ({update}) => {

    const {register, handleSubmit} = useForm();

    const submit = async (newCar) => {
        const car = await carService.create(newCar);
        update(car);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                <div><label>price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                <div><label>year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                <button>submit</button>
            </form>
        </div>
    );
};

export default Form;
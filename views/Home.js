import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pizza from '../components/Pizza';
import { getPizzas } from '../actions/PizzaActions';

export default function Home() {
    const dispatch = useDispatch();
    const pizzaState = useSelector((state) => state.loadPizzasReducer);
    const { pizzas, err, loading } = pizzaState;
    console.log(pizzas);
    useEffect(() => {
        dispatch(getPizzas())
    }, [])
    return (
        <div className="container-fluid">
            <div className="row justify-content-center m-3">
                {loading ? (<h1>Loading...</h1>) : err ? (<h1>something went wrong</h1>) : (
                    pizzas.map(pizza => {
                        return <div key={pizza._id} className="col-md-4 col-lg-3">
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                )}

            </div>
        </div>
    )
}

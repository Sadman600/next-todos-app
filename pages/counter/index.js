import React from 'react';
import { incrementCounter, decrementCounter } from '../../services/actions/counterAction';
import { useSelector, useDispatch } from 'react-redux';

const CounterApp = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <button  onClick={() => dispatch(incrementCounter())} className='btn btn-success'>+</button>
            <h1>Count {count} </h1>
            <button  onClick={() => dispatch(decrementCounter())} className='btn btn-success'>-</button>
        </div>
    );
};

export default CounterApp;
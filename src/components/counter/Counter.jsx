import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeDecrement, makeIncrement } from '../../redux/counter/action';

const Counter = () => {

    const counter = useSelector( state => state.counter );
    const dispatch = useDispatch();

  return (
    <div className="container my-5">
        <div className="row justify-content-center overflow-hidden">
            <div className="col-md-5">
                <div className="card counter shadow-sm">
                    <div className="card-body">
                        <h1>{ counter }</h1>
                        <button onClick={ () => dispatch(makeIncrement()) } className='btn btn-success btn-sm'>++</button> &nbsp;
                        <button onClick={ () => dispatch(makeDecrement()) } className='btn btn-danger btn-sm'>--</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Counter;
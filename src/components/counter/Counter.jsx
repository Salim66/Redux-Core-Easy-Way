import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const counter = useSelector( state => state );
    const dispatch = useDispatch();

  return (
    <div className="container my-5">
        <div className="row justify-content-center overflow-hidden">
            <div className="col-md-5">
                <div className="card counter shadow-sm">
                    <div className="card-body">
                        <h1>{ counter }</h1>
                        <button onClick={ () => dispatch({ type: 'INCREMENT' }) } className='btn btn-success btn-sm'>++</button> &nbsp;
                        <button onClick={ () => dispatch({ type: 'DECREMENT' }) } className='btn btn-danger btn-sm'>--</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Counter;
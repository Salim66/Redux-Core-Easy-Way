import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Colors = () => {

    const dispatch = useDispatch();

    const { foods } = useSelector(state => state);

  return (
    <div className="container my-5">
        <div className="row justify-content-center overflow-hidden">
            <div className="col-md-5">
                <div className="card counter shadow-sm">
                    <div className="card-body">
                       <button onClick={() => dispatch({ type: "RED" })}>Red</button>
                       <button onClick={() => dispatch({ type: "GREEN" })}>Green</button>
                       <button onClick={() => dispatch({ type: "YELLOW" })}>Yellow</button>
                       <button onClick={() => dispatch({ type: "BLUE" })}>Blue</button>
                       <button onClick={() => dispatch({ type: "GRAY" })}>Gray</button>
                    </div>

                    <h1>{ foods }</h1>

                </div>
            </div>
        </div>
    </div>
  )
};

export default Colors;
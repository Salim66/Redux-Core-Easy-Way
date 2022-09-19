import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeBLUE, makeGRAY, makeGREEN, makeRED, makeYELLOW } from '../../redux/color/action';

const Colors = () => {

    const dispatch = useDispatch();

    const { foods } = useSelector(state => state);

  return (
    <div className="container my-5">
        <div className="row justify-content-center overflow-hidden">
            <div className="col-md-5">
                <div className="card counter shadow-sm">
                    <div className="card-body">
                       <button onClick={() => dispatch(makeRED())}>Red</button>
                       <button onClick={() => dispatch(makeGREEN())}>Green</button>
                       <button onClick={() => dispatch(makeYELLOW())}>Yellow</button>
                       <button onClick={() => dispatch(makeBLUE())}>Blue</button>
                       <button onClick={() => dispatch(makeGRAY())}>Gray</button>
                    </div>

                    <h1>{ foods }</h1>

                </div>
            </div>
        </div>
    </div>
  )
};

export default Colors;
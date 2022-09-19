import React from 'react';
import { useDispatch } from 'react-redux';
import { makeChangeFood } from '../../redux/food/action';

const Foods = () => {

    const dispatch = useDispatch();

  return (
    <div className="container my-5">
        <div className="row justify-content-center overflow-hidden">
            <div className="col-md-5">
                <div className="card counter shadow-sm">
                    <div className="card-body">
                        <select name="" onChange={ (e) => dispatch(makeChangeFood(e.target.value)) } className='form-control' id="">
                            <option value="Alo">Alo</option>
                            <option value="Potol">Potol</option>
                            <option value="Law">Law</option>
                            <option value="Kumra">Kumra</option>
                            <option value="Pepa">Pepa</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Foods;
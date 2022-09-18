import React from 'react';

const Counter = () => {
  return (
    <div className="container my-5">
        <div className="row justify-content-center overflow-hidden">
            <div className="col-md-5">
                <div className="card counter shadow-sm">
                    <div className="card-body">
                        <h1>0</h1>
                        <button className='btn btn-success btn-sm'>++</button>
                        <button className='btn btn-danger btn-sm'>--</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Counter;
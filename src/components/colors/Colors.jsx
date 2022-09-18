import React from 'react';

const Colors = () => {
  return (
    <div className="container my-5">
        <div className="row justify-content-center overflow-hidden">
            <div className="col-md-5">
                <div className="card counter shadow-sm">
                    <div className="card-body">
                       <button>Red</button>
                       <button>Green</button>
                       <button>Yellow</button>
                       <button>Blue</button>
                       <button>Gray</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Colors;
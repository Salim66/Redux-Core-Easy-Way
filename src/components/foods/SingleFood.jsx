import React from 'react';
import { useSelector } from 'react-redux';

const SingleFood = () => {

    // call food selector
    const { foods } = useSelector(state => state);

    console.log(foods);

    // crate food select function
    const foodSelect = (ff) => {
        switch (ff) {
            case 'Alo':
                return 'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678';
            case 'Potol':
                return 'https://shodagor-uploads.s3.ap-south-1.amazonaws.com/uploads/all/nLRGB.jpg';
            case 'Law':
                return 'https://img2.exportersindia.com/product_images/bc-small/dir_41/1203766/green-long-kodu-319125.jpg';
            case 'Kumra':
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UFFlvcffBnTNs3KtfdcItlLATyP9H2xwig&usqp=CAU';
        
            default:
                return '';
        }
    }

  return (
    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-md-5">
             { foods && <img style={{ width: '200px' }} src={ `${ foodSelect(foods) }` } alt="" /> }
            </div>
        </div>
    </div>
  )
};

export default SingleFood;
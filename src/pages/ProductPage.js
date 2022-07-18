//  product page

import React from 'react';
import { useParams } from 'react-router-dom';  

const ProductPage = (props) => {
    const params  = useParams();
    return (
        <p>Params: { params.productname }</p>
    );
}

export default ProductPage;
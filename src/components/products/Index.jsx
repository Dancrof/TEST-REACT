import React, {useState} from 'react';
import Page from './Page';
import listProduct from '../../api/products/product.json';
import ProductDetails from '../product-details/Index';


function Product() {
    
    /**
     * Trae todas las cuentas netflix del producto.json
     * 
     * @return Netflix
     */
    const getProduct = listProduct.netflix;
    const [product, setProduct ] = useState(getProduct);
    console.log(product);
    
    /**
     * Oculta o muestra un ventana emergente de detalle del producto
     * 
     * @return boolean
     */
    const [show, setShow] = useState('');

  
    return (
    <>
        <Page 
            listProduct={product}
            modeInit={show}
            modeShow={() => setShow('show-details')}
            modeHidden={() => setShow()}
        />

        <ProductDetails showDetails={product}/>
    </>
  );
}

export default Product;
;
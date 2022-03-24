import React, {useState} from 'react';
import Page from './Page';
import listProduct from '../../api/products/product.json';
import { ProductProvider } from '../../context/productContext';
import ProductDetails from '../product-details/Index';

function Product() {
    
    /**
     * Trae todas la data producto.json
     * 
     * @return Product
     */
    const getProduct = listProduct.netflix;
    
    const [product, setProduct ] = useState(getProduct);
    console.log(product);
    
    return (
    <>
       <ProductProvider>
            <Page listProduct={product}/>
            <ProductDetails />
       </ProductProvider>
    </>
  );
}

export default Product;

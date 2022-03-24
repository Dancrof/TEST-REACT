import React ,{ createContext } from "react";
import listProduct from '../api/products/product.json';

const ProductContext = createContext();


/**
 * Obtengo los datos de un producto en especifico de la lista
 * @param id
 * @return Product
 */
 export function handleProduct(id){

    const idProduct = listProduct.netflix.find((item) => {
        return item.id === id;
    });
    console.log(idProduct);
}

export function ProductProvider({children}) {

    const prod = {
        id: 1,
        description: 'Soy un producto'
    }
    
    const data = {prod};
  
    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContext;
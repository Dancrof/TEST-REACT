import React, {useContext} from 'react'
import ProductContext from '../../context/productContext';
import './Page.css';

function Page() {
  
  const { prod } = useContext(ProductContext);

  return (
    
    <div className='information'>
        <h1 className='title'>{prod.description}</h1>
    </div>
  );
}

export default Page;
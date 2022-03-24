import React, { useState } from 'react'
import {handleProduct} from '../../context/productContext';
import './Page.css';

function Page({listProduct}) 

{
  const [idProduct, setIdProduct]  = useState();
  return (
    <div className='content'>
      {listProduct.map(item => (
        <div key={item.id} className="card">
          <img src={item.img}/>
          <div className="card-content">
           <h1>{item.title}</h1>
           <p className="price">{item.Price}</p>
           <p>{item.description}</p> 
          </div>
          <input type="button" value="Detalles" onClick={() => handleProduct(item.id)}/>
        </div>
      ))}
    </div>
  )
}

export default Page;
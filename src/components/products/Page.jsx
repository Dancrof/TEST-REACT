import React from 'react'
import ProductDetails from '../product-details/Index';
import './Page.css';

function Page({
  listProduct,
  modeInit,
  modeShow,
  modeHidden
}) 

{
  return (
    <div className='content'>
      {listProduct.map(item => (
        <div key={item.id} className="card">
          <img src={item.img}/>
          <div className="card-content">
           <h1 onClick={modeHidden}>{item.title}</h1>
           <p className="price">{item.Price}</p>
           <p>{item.description}</p> 
          </div>
          <input type="button" value="Detalles" onClick={modeShow}/>
        </div>
      ))}
    </div>
  )
}

export default Page;
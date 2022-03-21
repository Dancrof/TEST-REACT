import React from 'react'
import Page from './Page';

function ProductDetails({showDetails}) {
  return (
    <>
        <Page description={showDetails}/>
    </>
  )
}

export default ProductDetails;
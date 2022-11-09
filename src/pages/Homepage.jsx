import React,{useEffect} from 'react'
import ProductCard from '../Component/ProductCard'
import axios from"axios";
import { useState } from 'react';
function Homepage() {

    const[allProducts,setAllProducts] = useState([])

    useEffect(()=>{
        axios({
            url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get",
            method:"GET"
        }).then((response)=>{
            console.log(response.data.products.data);
            setAllProducts(response.data.products.data);
        })
    },[])
  return (
    <>
    <div className="row">
      {allProducts.map(function(product){
        return(
          <div className="col-3">
    <ProductCard image= {product.image} slug= {product.slug}/>
    </div>
        );
      })} 
  
    </div>



    </>
  )
}

export default Homepage
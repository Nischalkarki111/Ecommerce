import React,{useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import { useState } from 'react';
function ProductDetails() {
  const[singleProduct, setSingleProduct]=useState({});
const params= useParams();

  useEffect(() => {
    axios({
      url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get/" + 
      params.slug,
      method:"Get",
    }).then((res)=>{
      console.log(res.data.data.product);
      setSingleProduct(res.data.data.product);
    })
  },[]);
  return (
    <>
    <img src={singleProduct.image} alt="" />

    <table border='1'>
      <tr>
      <td>Name</td>
      <td>{singleProduct.name}</td>
      </tr>

      <tr>
      <td>Price</td>
      <td>{singleProduct.price}</td>
      </tr>

      <tr>
      <td>Description</td>
      <td>{singleProduct.detail}</td>
      </tr>
      </table>
    </>
  )
}

export default ProductDetails
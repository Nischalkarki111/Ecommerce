import React from 'react'
import{Link} from "react-router-dom"
function ProductCard(props) {
  return (
    <>
    <div className="card">
        <img src= {props.image}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <Link to={"/product/" + props.slug} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </>
  )
}

export default ProductCard
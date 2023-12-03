import React from 'react'
import {Link} from "react-router-dom"

export default function ProductDetails(props) {
  return (
    <>
        <div className="card" key={props.data.id}>
          <img src={props.data.image} className="card-img-top" alt={props.data.title}/>
          <div className="card-bodys">
            <h6 className="card-title text-truncate">{props.data.title}</h6>
            <h5 className="card-title text-truncate">{props.data.price}$</h5>
            <p className="card-text text-truncate">{props.data.description}</p>
            <p className="card-title text-truncate">Rating: {props.data.rating.rate}</p>
            <p className="card-title text-truncate">{props.data.rating.count} Items in Stock</p>
            <button type="button" class="btn btn-primary">Add To Cart</button>
            <Link to={`/products/${props.data.id}`} state={props.data}><button className="btn btn-primary">See More</button></Link>
          </div>
        </div>
    </>
  )
}

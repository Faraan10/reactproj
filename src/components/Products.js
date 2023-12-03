import React, { useState, useEffect } from 'react'
import axios from "axios"
import ProductDetails from './ProductDetails'


export default function Products() {

  const [products, setProducts]=useState([]);
  const [search, setSearch]=useState("");
  console.log(search);

  useEffect(()=> {
    axios.get("https://fakestoreapi.com/products")
    .then(res=> setProducts(res.data))
    .catch(err=> console.log(err))
  }, [])

  return (
    <>
        {/* <h2>Products</h2> */}
        <div className="container">  
          <div className="row">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" onChange={((e)=> setSearch(e.target.value))} placeholder="Search Contacts" aria-label="Search"/>
          </form>
        {
          products.filter((product)=>{
            return search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search)
          }).map(product =>
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductDetails data={product}/>
            </div>
            )
        }
          </div>
        </div>
    </>
  )
}

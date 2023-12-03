import {useLocation} from "react-router-dom"


export default function SingleProduct() {

  const location=useLocation()
  const data=location.state;


  return (
    <>    

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={data.image} class="img-fluid rounded-start" alt={data.title}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">{data.title}</h3>
              <h6 class="card-text">{data.description}</h6>
              <h6 class="card-text">Price: {data.price}$</h6>
              <h6 class="card-text">Rating: {data.rating.count}</h6>
              <h6 class="card-text">Count: {data.rating.count}</h6>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              <button type="button" class="btn btn-primary">Add To Cart</button>
              <button type="button" class="btn btn-warning">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

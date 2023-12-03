import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function CRUDOperations() {
    const baseUrl = "http://localhost:3001/employees"
    const {register, handleSubmit} = useForm()
    const [apiData, setApiData] = useState([])
    const [search, setSearch]=useState("");

    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        axios.get(baseUrl)
        .then(res => {
            setApiData(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const onFormSubmit = (formData) => {
        axios.post(baseUrl,formData)
        getData()
    }

    const handleDelete = (del)=>{
        axios.delete(`http://localhost:3001/employees/${del}`)
        .then(res =>{ 
          console.log(res.data)

        }).catch(err => console.log(err))
    }

  return (
    <>
      <h3>Employee Registration Form</h3><hr/>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="row">
            <div className="col lg-4 col-md-4">
                <p>EmployeeName: <input className="form-control" {...register('name')} placeholder="Employee Name"/></p>
            </div>
            <div className="col lg-4 col-md-4">
                <p>Username    : <input className="form-control" {...register('username')} placeholder="Username"/></p>
            </div>
        </div>
        <div className="row">
            <div className="col lg-4 col-md-4">
                <p>Email       : <input className="form-control" {...register('email')} placeholder="Email"/></p>
            </div>
            <div className="col lg-4 col-md-4">
                <p>Street       : <input className="form-control" {...register('street')} placeholder="Street"/></p>            
            </div>
        </div>
        <div className="row">
            <div className="col lg-2 col-md-3">
                <p>Suite       : <input className="form-control" {...register('suite')} placeholder="Suite"/></p>
            </div>
            <div className="col lg-2 col-md-3">
                <p>City       : <input className="form-control" {...register('city')} placeholder="City"/></p>
            </div>
            <div className="col lg-2 col-md-3">
                <p>Zipcode       : <input className="form-control" {...register('zipcode')} placeholder="Zipcode"/></p>
            </div>
        </div>
        <input type='submit' name='submit' className='btn btn-success'/>
      </form>

      <hr/>
      {/* {
        JSON.stringify(apiData)
      } */}

      <hr/>


      <div className="container">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search Contacts" aria-label="Search"/>
          </form>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Street</th>
                <th scope="col">Suite</th>
                <th scope="col">City</th>
                <th scope="col">Zipcode</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                apiData.filter((emp) => {
                  return search.toLowerCase() === ""
                    ? emp
                    : emp.username.toLowerCase().includes(search);
                }).map((emp)=>(
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.username}</td>
                    <td>{emp.email}</td>
                    <td>{emp.street}</td>
                    <td>{emp.suite}</td>
                    <td>{emp.city}</td>
                    <td>{emp.zipcode}</td>
                    <td>
                    <button type="button" class="btn btn-warning">Edit</button>
                    <button type="button" class="btn btn-danger" onClick={()=> handleDelete(emp.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

    </>
  )
}

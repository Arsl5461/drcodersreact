import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Counter from '../components/Counter'

const ProductDescription = () => {
    const [product,setProduct]=useState(null)
const params=useParams();
const fetchProduct=async()=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    setProduct(response.data)
}
useEffect(()=>{
    fetchProduct();
},[])
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <img src={product?.image} height={"300px"} width={"300px"}/>
            </div>
            <div className="col-lg-6">
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
                <h3>{product?.price}</h3>
                <p><b>{product?.category}</b></p>
                <p>Product Reviews:{product?.rating?.rate}</p>
                <p> Stock Remaining:{product?.rating?.count}</p>
                <Counter/>
                <button className='btn btn-success'>Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription

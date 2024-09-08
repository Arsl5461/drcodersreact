import React, { useState, useEffect } from 'react'
import axios from "axios"
import Loader from './Loader'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const fetchProducts = async () => {
        setLoader(true)
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
        setLoader(false)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            {
                loader ? <Loader /> : (<div className='d-flex flex-wrap justify-content-evenly'>
                    {
                        products.map((product) => {
                            return (
                                <>
                                    <div className="card mt-4 p-4" style={{ width: "18rem" }}>
                                        <h3>{product.title.slice(0, 10)}</h3>
                                        <img src={product.image} width={"200px"} height={'200px'} />
                                        <p>{product.price}</p>
                                        <p>{product.category}</p>
                                        <button className='btn btn-primary'><Link to={`/products/${product.id}`} style={{color:"white", textDecoration:"none"}}>Buy Now</Link></button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>)
            }
        </>
    )
}

export default Products

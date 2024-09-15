import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [data,setData]=useState("This is a test")
  return (
    <div>
      <Child data={data}/>
    </div>
  )
}

export default Parent

import React,{useState} from 'react'
import Child2 from './Child2'

const Child = ({data}) => {
  return (
    <div>
      <h1>{data}</h1>
      <Child2 data={data}/>
    </div>
  )
}

export default Child

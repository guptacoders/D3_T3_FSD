// Write react code to use optimize approach to filter first and than map to render a component
// to print even numbers from the array in blue color in h1 tag 


import React from 'react'

const Filter_Map_mix = () => {
    const arr1=[1,2,3,5,3,4];
  return (
    <div>
        {
            arr1.filter((value)=>value%2==0).map((value)=>{
                return <h2>Even number {value}</h2>
            })

            
        }
    </div>
  )
}

export default Filter_Map_mix
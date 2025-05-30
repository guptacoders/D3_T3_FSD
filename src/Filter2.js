// Create we have apply filter to skip digit “3” from the array and display all
// remaining digits of the array

import React from 'react'

const Filter2 = () => {
    const arr1=[1,2,3,5,3,4];
    const newarr = arr1.filter((value)=>value!==3)
  return (
    <div>
        {
         <>
         <h1>{newarr.join(",")}</h1>
         </>
         
        }
    </div>
  )
}

export default Filter2
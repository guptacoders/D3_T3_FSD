// Write React code to render a component which displays array elements which are greater than 3

import React from 'react'

const Map5 = () => {
    const arr=[1,3,4,2,5,6,8,9,10,22,0,18];
    return(
        <div>
            {
               arr.filter((value)=>{
                    if(value>3)
                    {
                        return(<h2>Array={value}</h2>)
                    }
                })
            }
        </div>
    )
}

export default Map5
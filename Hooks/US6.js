// Create a react component that manages manages multiple form input files using a single state object and displace the values in real time 

import { useState } from "react";

function US6()
{
    const[data,setdata]=useState({});

    function handlechange(e)
    {
        const{name,value}=e.target;
        setdata({...data,[name]:value});
    }

    return(
        <div>
            <input type="text" name="fname" placeholder="Enter First Name" onChange={handlechange}/>
            <input type="text" name="lname" placeholder="Enter Last Name" onChange={handlechange}/>

            <h1>FirstName: {data.fname}</h1>
            <h1>LastName: {data.lname}</h1>
        </div>
    )
}

export default US6
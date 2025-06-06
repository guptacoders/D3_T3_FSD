// WAP to build a react app having a button which changes image by clicking it


import { useState } from "react";
import img1 from "./krishna.jpg"
import img2 from "./krishna2.jpg"


function US3()
{
    const[myimage,setimage]=useState(img1);

    function changeimage()
    {
        if(myimage===img1)
        {
            setimage(img2);
        }
        else
        {
            setimage(img1);
        }
    }

    return(
        <div>
            <img src={myimage}/>
            <button onClick={changeimage}>CLICK HERE TO CHANGE IMAGE</button>
        </div>
    )
}

export default US3
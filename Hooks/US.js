import { useState } from "react";

function US()
{
    const[count,setCount]=useState(0);

    function handlecount()
    {
        setCount(count+1);
    }

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handlecount}>CLICK HERE</button>
        </div>
    )
}

export default US
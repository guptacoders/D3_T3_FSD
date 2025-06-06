// Create a program to build react app having buttons to increament & decreament the number by clicking the respective buttons 
// Also Increament of the number should be perform only if number <10 & Decreament of the number should be perform only if number>0

import { useState } from "react";

function US2(){
    const [count, setCount]=useState(0);

    function handleIncrement(){
        if (count < 10){
            setCount(count + 1);
        }
    }

    function handleDecrement(){
        if (count > 0){
            setCount(count - 1);
        }
    }

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
        </div>
    );
}

export default US2;

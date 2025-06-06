// Write a program to build React app to perform the tasks as asked below. 
// • Add three buttons “Change Text”, “Change Color”, “Hide/Show”. 
// • Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag. 
// • By clicking on “Change text” button text should be changed to “Welcome students” and vice versa. 
// • By clicking on “Change Color” button change color of text to “blue” and vice versa. '
//    This color change should be performed while double clicking on the button. 
// • Initially button text should be “Hide”. While clicking on it the button text should be changed 
//    to “Show” and text “React Js Hooks” will not be shown.

import { useState } from "react";

function US5()
{
    const[name,setname]=useState("LJ UNIVERSITY");
    const[textcolor,setcolor]=useState("red");
    const[hidetext,sethide]=useState("REACT JS HOOKS");
    const[buttontext,setbtntext]=useState("hide");

    function showhide()
    {
      if(buttontext==="hide")
      {
        setbtntext("show");
        sethide(" ")
      }
      else
      {
        setbtntext("hide");
        sethide("REACT JS HOOKS")
      }
    }

    function changename()
    {
        if(name==="LJ UNIVERSITY")
        {
            setname("Welcome Student")
        }
        else
        {
            setname("LJ UNIVERSITY");
        }
    }

    function changecolor()
    {
        if(textcolor==="red")
        {
            setcolor("blue")
        }
        else
        {
            setcolor("red")
        }
    }

    return( 
        <div> 
            <button onClick={changename}>Change Text</button> 
            <button onDoubleClick={changecolor}>Change Color</button> 
            <button onClick = {showhide}> {buttontext}</button>  
            <h1 style={{color:textcolor}}>{name}</h1> 
            <h2>{hidetext}</h2>     
        </div> 
        )
    
    } 
    export default US5
        
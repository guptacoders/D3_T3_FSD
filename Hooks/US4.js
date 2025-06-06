// Wriute react component having a button & Image by clicking on button image changes randomly from given array of images 

import { useState } from "react";
import img1 from "./krishna.jpg";
import img2 from "./krishna2.jpg";
import img3 from "./krishna3.jpg";
import img4 from "./krishna4.jpg";
import img5 from "./krishna5.jpg";

function US4() {
    const images = [img1,img2,img3,img4,img5];
    const [myimage, setimage] = useState(img1);

    function changeimage(){
        const randomIndex = Math.floor(Math.random() * images.length);
        setimage(images[randomIndex]);
    }

    return(
        <div>
            <img src={myimage} />
            
            <button onClick={changeimage}>CLICK HERE TO CHANGE IMAGE</button>
        </div>
    );
}

export default US4;

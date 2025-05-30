// Write react code to render a component which displays 2 images using MAP Function
import img from "./krishna.jpg"


const Map4 = () => {
    const images=["krishna2.jpg",img];
    return(
        <div>
            {
                images.map((value)=>{
                    return <img src={value}/>
                })
            }
        </div>
    )
}

export default Map4
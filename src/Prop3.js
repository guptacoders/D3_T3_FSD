import Prop4 from "./Prop4"

function Prop3()
{
    const carinfo={brand:"Kia",name:"Sonet"}

    return(
        <div>
            <h1>Details of Car</h1>
            <Prop4 car={carinfo}/>
        </div>
    );
}

export default Prop3
import Prop2 from "./Prop2";
function Prop1() {
var n = "ABC";
 return(
 <div>
    <Prop2 name={n} rollnum="101" />
    <Prop2 name="DEF" rollnum="102" />
 </div>
 );
}
export default Prop1;

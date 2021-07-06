import React, {useState} from 'react';


function DegreeToggle(props) {
  const cel = props.data;
  const fahr = props;
  console.log(cel);

  return(
    <div>
      {cel}
      {/* <button onClick={()=>{updateTemp({flag:true})}}>Celsius</button>
      <button onClick={()=>{updateTemp({flag:false})}}>Fahrenheit</button>


      {setState({temp}) && (
        <div><Addroom  index={i}/></div>
      )}
      {!setState({flag}) && (
        <div><HomePage index={i}/></div>
      )} */}
    </div>
  )
}
// function DegreeToggle(){
//   const [temp, updateTemp] = React.useState({ f: 0, c: 0 })

//   const updateC = ev => updateTemp({
//     c: ev.target.value,
//     f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
//   })
  
//   const updateF = ev => updateTemp({
//     c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
//     f: ev.target.value
//   })

//   return(
//     <div id="container">
//       <div id="box1">
//         <h1>Celsius</h1>
//         {/* <input
//             type = "number"
//             value = {temp.c}
//             onChange = {updateC} >
//           </input> */}
//           <button onClick={updateC}>
//             Temperature
//           </button>
//       </div>
//       <div id="box2">
//           <h1>Fahrenheit</h1>
//           <input
//             type = "number" 
//             value = {temp.f} 
//             onChange = {updateF}>
//           </input>
//       </div>
//     </div>
//   )
// }


export default DegreeToggle;
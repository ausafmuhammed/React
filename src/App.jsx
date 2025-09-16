import React, {useState} from "react";
import End from "./End"
import Counter from "./Counter"
import Switch from "./Switch";

function App() {

   const [color , Themcolor] = useState(false);

      const toggle = () =>{
          Themcolor(on => !on)
      }
  
      return(
          <>
          <div style={{backgroundColor: color ? "white": "black",minHeight:"100vh"}}>
          <Switch toggle ={toggle} color = {color} />
          <Counter toggle={toggle} color={color} />
          <End toggle={toggle} color={color} />
          </div>
          </>
      )
}

export default App
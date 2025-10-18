import { useState } from "react";
import plantList from "./data"; 

//components
import PlantList from "./plants/PlantList";

export default function App() { 
  const [plants] = useState(plantList);  // need to understand this 
  const [cart, setCart] = useState([]);   //why is the array empty 
 // console.log('App plant', plants); 

  return (
     <>
     <header>
      <h1>Proper Plants</h1>

     </header>
     <body>
        <PlantList  plants={plants}/>  
     </body>
     </>

  )
}

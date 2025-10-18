import { useState } from "react";
import plantList from "./data"; 

//components
import PlantList from "./plants/PlantList";
import Cart from "./cart/cart";

import "./app.css"; 

export default function App() { 
  const [plants] = useState(plantList);  // need to understand this 
  const [cart, setCart] = useState([]);   //why is the array empty 
 // console.log('App plant', plants); 

const increaseQty = (plant) => {
  if(plant.quantity) {
    plant.quantity++
    setCart(prev => [...prev, plant])
  } else {
    plant['quantity'] = 1;
    setCart(prev => [...prev, plant])
  }
}

const decreaseQty = (plant) => {
  if(plant.quantity && plant.quantity !== 0) {
    plant['quantity']--;
    setCart(prev => [...prev, plant])
  } 
}

const addToCart = (plant)=> {
  if(cart.includes(plant)){
    plant.quantity++;
    setCart(prev => [...prev, plant])
  } else {
    plant.quantity = 1;
    setCart(prev => [...prev, plant])
  }

 };

 console.log(cart); 

  return (
     <>
     <header>
      <h1>Proper Plants</h1>

     </header>
     <main className="plantShop">
        <PlantList  plants={plants} addToCart={addToCart} /> 
        <Cart cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty}/>
     </main>
     </>

  );
}

export default function CartItem({item, increaseQty, decreaseQty}){
    
    return (

        <>
    <button onClick={() => increaseQty(item)}>+</button>
        <p>{item.image}</p>
        <h1>{item.name}</h1>
        <p>{item.quantity}</p>   
        <button onClick={() => decreaseQty(item)}>-</button>
    </>
    )

}



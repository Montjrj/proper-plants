import CartItem from "./cartItem";

export default function Cart({cart, increaseQty, decreaseQty}){
    const filteredCart = [];
    const duplicateCheck = [];
    for(let i = 0; i<cart.length; i++) {
        duplicateCheck.push(cart[i].id)
        if(!duplicateCheck.includes(cart[i].id)){
            filteredCart.push(cart[i])
        }
    }
    return (
    <section>
        <h2>Cart</h2>
        {filteredCart.map((item)=> (
            <div key={item.id}>
                
         <CartItem key={item.id} item={item} increaseQty={increaseQty} decreaseQty={decreaseQty}/>
            </div>
        )
            )}
    </section>
    );
}
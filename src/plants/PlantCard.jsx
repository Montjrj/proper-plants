export default function PlantCard({ plant, addToCart }){
    return (
    <section>
        <p className = "plantImg">{plant.image}</p>
        <h3>{plant.name}</h3>
        <button onClick={() => addToCart(plant)}>Add to Cart</button>

    </section>
    );
}
export default function PlantCard({ plant }){
    return (
    <section>
        <p className = "plantImg">{plant.image}</p>
        <h3>{plant.name}</h3>
        <button>Add to Cart</button>
    </section>
    );
}
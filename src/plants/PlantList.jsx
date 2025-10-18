import PlantCard from "./PlantCard";

export default function plantList({plants, addToCart}){
    return (
    <section>
        <h2>Plants</h2>
        {plants.map((plant) =>(

            <div key={plant.id}>

                <PlantCard key={plant.id} plant = {plant} 
                   addToCart={addToCart}/>; 
            </div>
        )
            )}
    </section>
    );
}
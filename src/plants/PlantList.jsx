import PlantCard from "./PlantCard";

export default function plantList({plants}){
    return (
    <section>
        <h2>Plants</h2>
        {plants.map((plant) =>{
                return <PlantCard key={plant.id} plant = {plant} />; 
            })}
    </section>
    );
}
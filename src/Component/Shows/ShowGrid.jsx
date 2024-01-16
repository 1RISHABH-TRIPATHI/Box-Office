import ShowCard from "./ShowCard";

const ShowGrid=({shows})=>{
    return <div>
       { shows.map(data => 
       <ShowCard 
       key={data.show.id} 
       summary={data.show.summary}
       name={data.show.name} 
       id={data.show.id}
       image={data.show.image ? data.show.image.medium : '/notImage.png' }
       
       /> )}
    </div>
}
export default ShowGrid;
import ActorCard from "./ActorCard";
const ActorGrid=({actors})=>{
    return <div>
       { actors.map(data => 
       <ActorCard 
       key={data.person.id} 
       name={data.person.name} 
       gender={data.person.gender}
       birthday={data.person.birthday}
       deathday={data.person.deathday}
       county={data.person.county ? data.person.county.name: null}

       image={data.person.image ? data.person.image.medium : '/notImage.png' }
       /> )}
    </div>
}
export default ActorGrid;
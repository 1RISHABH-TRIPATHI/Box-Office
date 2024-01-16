
const ActorCard=({name,image,gender,birthday,county,deathday})=>{
    return <div>
        <div>
        <img  src={`${image}`} alt={name}/>
        </div>
        <h3>{name} {!!gender && `(${gender})` }</h3>
        <p>{county ? `county from ${county} `: 'No county Know'}</p>
        {!!birthday && <p> Born {birthday}</p>}
        <p>
            {
                deathday ? `Died ${deathday}`: 'Alive'
            }
        </p>
    </div>
}
export default ActorCard;
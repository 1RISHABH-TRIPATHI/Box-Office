
import { SearchCard ,SearchImgWrapper} from "../comman/SearchCard";

const ActorCard=({name,image,gender,birthday,county,deathday})=>{
    return <SearchCard>
        <SearchImgWrapper>
        <img  src={`${image}`} alt={name}/>
        </SearchImgWrapper>
        <h3>{name} {!!gender && `(${gender})` }</h3>
        <p>{county ? `county from ${county} `: 'No county Know'}</p>
        {!!birthday && <p> Born {birthday}</p>}
        <p>
            {
                deathday ? `Died ${deathday}`: 'Alive'
            }
        </p>
    </SearchCard>
}
export default ActorCard;
import { Link } from "react-router-dom";
const ShowCard=({name,image,id,summary,onStarMeClick})=>{
    
    return <div>
        <div>
        <img  src={`${image}`} alt={name}/>
        </div>
        <h4>{name}</h4>

        <div  dangerouslySetInnerHTML={{__html:summary}} />
        <div>
            {/* <Link to={`/show/${id}`}>Read more</Link> */}
            <a href={`/show/${id}`} target="_blank"rel="noreferrer"  >Read more</a>
            <button type="button" onClick={()=>{onStarMeClick(id)}}>Star me </button>
        </div>
    </div>
}
export default ShowCard;
import { Link } from "react-router-dom";
const ShowCard=({name,image,id,summary})=>{
    const summaryStr=summary ? summary.split(' ').slice(0.,10).join(' ').replace(/<.+?>g/,''): 'No Description';
    return <div>
        <div>
        <img  src={`${image}`} alt={name}/>
        </div>
        <h4>{name}</h4>

        <p>
        {summaryStr}
        </p>
        <div>
            {/* <Link to={`/show/${id}`}>Read more</Link> */}
            <a href={`/show/${id}`} target="_blank"rel="noreferrer"  >Read more</a>
            <button type="button">Star me </button>
        </div>
    </div>
}
export default ShowCard;
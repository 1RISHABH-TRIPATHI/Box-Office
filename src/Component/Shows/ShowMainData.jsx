const ShowMainData=({image, rating,summary,name,genres})=>
{
    return <div> 
        <img src={image ? image.original :'/notImage.png'} alt={name} />
        <div>
            <h1>{name}</h1>
            <div>
                {rating.average || 'N/A'}
            </div>
            <div  dangerouslySetInnerHTML={{__html:summary}} />
            <div>
                {genres.map(genre=>(
                    <span key={genre}>{genre}</span>
                ))}
            </div>
        </div>
    </div>
}
export default ShowMainData;
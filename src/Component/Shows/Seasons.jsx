const Seasons=({ seasons})=>
{
    return <div> 
        <p>
        seasons in total {seasons.length}
        </p>
        episodes in total {seasons.reduce((sum,season)=>{
                return sum+ season.episodeOrder;
        },0)}
        <div>
            {
                seasons.map(season=> <div key={season.id}>
                    <p>Seasons: {season.number}</p> 
                    <p>Episodes: {season.episodeOrder}</p>
                    <div>
                        Aired:{season.premiereDate} - {season.endDate}
                    </div>
                    </div>)
            }
        </div>
    </div>
}
export default Seasons;
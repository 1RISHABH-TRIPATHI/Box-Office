import { getShowById, getShowByIds } from '../API/tvmaze';
import ShowGrid from '../Component/Shows/ShowGrid';
import {useStarredShow} from '../lib/useStarredShow'
import { useQuery } from '@tanstack/react-query';
const Starred=() =>{

  const [startedShowID] =useStarredShow();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', startedShowID],
    queryFn: async () => getShowByIds(startedShowID).then(result=> 
      result.map(show=>({show}))),
    refetchOnWindowFocus: false,
  });

  if(starredShows?.length=== 0)
  {
    return <div> No Shows were Starred </div>
  }
  else if(starredShows?.length>0)
  {
    return <ShowGrid shows={ starredShows} />
  }
  if(starredShowsError)
  {
    return <div> Error Occured: {starredShowsError.message}</div>
  }
  return (
    <div> 
      Shows Are Loading...
    </div> 
    
  );
  
}
export default Starred;

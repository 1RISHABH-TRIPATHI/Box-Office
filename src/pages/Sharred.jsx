import { getShowByIds } from '../API/tvmaze';
import ShowGrid from '../Component/Shows/ShowGrid';
import { useStarredShow } from '../lib/useStarredShow';
import { useQuery } from '@tanstack/react-query';
import { TextCenter } from '../Component/comman/TextCenter';
const Starred = () => {
  const [startedShowID] = useStarredShow();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', startedShowID],
    queryFn:  () =>
      getShowByIds(startedShowID).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return <TextCenter> No Shows were Starred </TextCenter>;
  } else if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShowsError) {
    return <TextCenter> Error Occured: {starredShowsError.message}</TextCenter>;
  }
  return <TextCenter>Shows Are Loading...</TextCenter>;
};
export default Starred;

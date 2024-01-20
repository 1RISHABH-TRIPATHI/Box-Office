import ShowCard from './ShowCard';

import {useStarredShow} from '../../lib/useStarredShow'
import { FlexGrid } from '../comman/FlexGrid';
const ShowGrid = ({ shows }) => {

    const [startedShow,dispatchStated]=useStarredShow();
    const onStarMeClick = showId => {
    const isStarred = startedShow.includes(showId);
    if (isStarred) {
      dispatchStated({ type: 'UNSTAR', showId });
    } else dispatchStated({ type: 'STAR', showId });
  };

  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          image={data.show.image ? data.show.image.medium : '/notImage.png'}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={startedShow.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};
export default ShowGrid;

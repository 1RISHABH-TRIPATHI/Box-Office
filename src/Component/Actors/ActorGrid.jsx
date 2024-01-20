import ActorCard from './ActorCard';
import { FlexGrid } from '../comman/FlexGrid';
const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          county={data.person.county ? data.person.county.name : null}
          image={data.person.image ? data.person.image.medium : '/notImage.png'}
        />
      ))}
    </FlexGrid>
  );
};
export default ActorGrid;

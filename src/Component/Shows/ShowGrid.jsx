import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const usePersisredReducer=(reducer,initialState,localStoragekey)=>
{
    const [state, dispatch] = useReducer(reducer,initialState,(initial)=>{
        const persisredValue= localStorage.getItem(localStoragekey);
        return persisredValue ? JSON.parse(persisredValue): initial;
    });

    useEffect(()=>{
        localStorage.setItem(localStoragekey,JSON.stringify(state))
    },[state,localStoragekey]);

    return [state,dispatch];
}   


const startedShowReducer = (currentStarted, action) => {
    switch (action.type) {
      case 'STAR':
        return currentStarted.concat(action.showId);
      case 'UNSTAR':
        return currentStarted.filter(showId => showId !== action.showId);
      default:
        return currentStarted;
    }
  };
const ShowGrid = ({ shows }) => {
  
  const [startedShow, dispatchStated] = usePersisredReducer(startedShowReducer, [],'starredShows');

  const onStarMeClick = showId => {
    const isStarred = startedShow.includes(showId);
    if (isStarred) {
      dispatchStated({ type: 'UNSTAR', showId });
    } else dispatchStated({ type: 'STAR', showId });
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          summary={data.show.summary}
          name={data.show.name}
          id={data.show.id}
          image={data.show.image ? data.show.image.medium : '/notImage.png'}
          onStarMeClick={onStarMeClick}
        />
      ))}
    </div>
  );
};
export default ShowGrid;

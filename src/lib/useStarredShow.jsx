import { useEffect, useReducer } from 'react';

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

export const useStarredShow=()=>
  {
    return usePersisredReducer(startedShowReducer, [],'starredShows');
  }
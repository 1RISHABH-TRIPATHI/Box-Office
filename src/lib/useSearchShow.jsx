import { useEffect,useState} from 'react';
const usePersistedState=(initialState,sessionStorageKey)=>{

    const [state,setState] =useState(()=>
    {
        const persisredValue= sessionStorage.getItem(sessionStorageKey);

         return persisredValue ? JSON.parse(persisredValue): initialState;
    });
  
    useEffect(()=>{
        sessionStorage.setItem(sessionStorage,JSON.stringify(state))
    },[state,sessionStorageKey]);

    return [state,setState]
}

export const useSearchShow=()=>
  {
    return  usePersistedState('','SearchString');
  }

import { useState } from 'react';
import { searchForShow,searchForPeople } from '../API/tvmaze';
import {useQuery} from '@tanstack/react-query'
import SearchForm from '../Component/SearchForm';
import ShowGrid from '../Component/Shows/ShowGrid';
import ActorGrid from '../Component/Actors/ActorGrid';
const Home = () => {
  const [filter, setFilter] = useState(null)

  const { data :apiData,error:apiDataError} = useQuery({
      queryKey: ['todos', filter],
      queryFn: () => filter.searchOption==='shows' ? searchForShow(filter.q):searchForPeople(filter.q) ,
      // ⬇️ disabled as long as the filter is empty
      enabled: !!filter,
      refetchOnWindowFocus:false,
  })
  
  // // useState
  //  const [apiData, setapiData] = useState([]);
  // const [apiDataError, setapiDataError] = useState(null);
  // SEarch
  const onSearch = async ({q,searchOption}) => {
      setFilter({q,searchOption})

    // try {
    //   setapiDataError(null);

      
    //   if(searchOption==='shows')
    //   {
    //     const result = await searchForShow(q);
    //     setapiData(result);
    //   }
    //   else
    //   {
    //     const result = await searchForPeople(q);
    //     setapiData(result);
    //   }
    // } catch (error) {
    //   setapiDataError(error);
    // }
  };

  // api data
  const renderapiData = () => {
    if (apiDataError) {
      return <div> Error Occured: {apiDataError.message} </div>;
    }
    if(apiData?.length === 0)
    {
      return <div>No found</div>
    }
    if (apiData) {
      if(apiData[0].show)
      {
        return  <ShowGrid  shows={apiData}/>
      }
      else
      return  <ActorGrid  actors={apiData}/>
    }
    return null;
  };

  return (
    <div>

      <SearchForm onSearch={onSearch} />
      <div>{renderapiData()}</div>
    </div>
  );
};
export default Home;

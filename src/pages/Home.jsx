import { useState } from 'react';
import { searchForShow,searchForPeople } from '../API/tvmaze';
import SearchForm from '../Component/SearchForm';
import ShowGrid from '../Component/Shows/ShowGrid';
import ActorGrid from '../Component/Actors/ActorGrid';
const Home = () => {
  // useState
 
  const [apiData, setapiData] = useState([]);
  const [apiDataError, setapiDataError] = useState(null);
  // SEarch
  const onSearch = async ({q,searchOption}) => {
    try {
      setapiDataError(null);

      
      if(searchOption==='shows')
      {
        const result = await searchForShow(q);
        setapiData(result);
      }
      else
      {
        const result = await searchForPeople(q);
        setapiData(result);
      }
    } catch (error) {
      setapiDataError(error);
    }
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

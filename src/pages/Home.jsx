import { useState } from 'react';
import { searchForShow,searchForPeople } from '../API/tvmaze';
import SearchForm from '../Component/SearchForm';
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

    if (apiData) {
      if(apiData[0])
      {
        if(apiData[0].show)
        {
         return  apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        }
        else{
          return  apiData.map(data => <div key={data.person.id}>{data.person.name}</div>)
        }
      }
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

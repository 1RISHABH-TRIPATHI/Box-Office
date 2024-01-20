import { useState } from 'react';
import { searchForShow, searchForPeople } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../Component/SearchForm';
import ShowGrid from '../Component/Shows/ShowGrid';
import ActorGrid from '../Component/Actors/ActorGrid';
import { TextCenter } from '../Component/comman/TextCenter';

const Home = () => {
  const [filter, setFilter] = useState(null);


  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['Search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShow(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  
  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  // api data
  const renderapiData = () => {
    if (apiDataError) {
      return <TextCenter> Error Occured: {apiDataError.message} </TextCenter>;
    }
    if (apiData?.length === 0) {
      return <TextCenter>No found</TextCenter>;
    }
    if (apiData) {
      if (apiData[0].show) {
        return <ShowGrid shows={apiData} />;
      } else return <ActorGrid actors={apiData} />;
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

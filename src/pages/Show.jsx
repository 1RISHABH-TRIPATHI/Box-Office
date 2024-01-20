import {useParams ,Link} from "react-router-dom"
import {useQuery} from '@tanstack/react-query'
import styled from "styled-components";
import { getShowById} from "../API/tvmaze";
import ShowMainData from "../Component/Shows/ShowMainData";
import Details from "../Component/Shows/Details";
import Seasons from "../Component/Shows/Seasons";
import Cast from "../Component/Shows/Cast";
import { TextCenter } from "../Component/comman/TextCenter";

const  Show=() =>{


    const  { showId }=useParams();
 
    const { data: showData, error: showError } = useQuery({
      queryKey: ['show', showId],
      queryFn: () => getShowById(showId),
      refetchOnWindowFocus:false,
    });
    // const navigate = useNavigate('');
    // const onBack=()=>{
    //   navigate('/')
    // }
    if(showError)
    {
      return <TextCenter>We have an Error { showError.message}</TextCenter>
    }
    if(showData)
    {
      return <ShowPageWrapper> 
        <BackHomeWrapper>
          <Link to="/"> Go Back to Home </Link>
        </BackHomeWrapper>
          <ShowMainData
            image={showData.image}
            name={showData.name}
            rating={showData.rating}
            summary={showData.summary}
            genres={showData.genres}
          />
          <InfoBlock>
            <h2>Details</h2>
            <Details 
              status={showData.status}
              premiered={showData.premiered}
              network={showData.network}
            />
          </InfoBlock>
          <InfoBlock>
            <h2>Seasons </h2>
            <Seasons
            seasons={showData._embedded.seasons}  />
          </InfoBlock>
          <InfoBlock>
            <h2>Cast </h2>
            <Cast 

            cast={showData._embedded.cast}
            />
          </InfoBlock>
        </ShowPageWrapper>
    }
  return (
    <TextCenter>
        Show data loading 
    </TextCenter>
  )
}
export default  Show;


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
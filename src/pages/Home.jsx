import { useState } from "react";
import { searchForShow } from "../API/tvmaze";
const Home=()=> {
  // useState
  const [SearchStr,setSearchStr] =useState("");
  const [apiData,setapiData]= useState([]);
  const [apiDataError,setapiDataError]=useState(null) ;
  // console.log(apiDataError);
  // search Target Input Dynamically
  const onSearchInputChnage=(ev)=>
  {
    setSearchStr(ev.target.value)
  }
// SEarch 
  const onSearch= async (ev)=>{
    ev.preventDefault();
    try {
      
      setapiDataError(null);
      const result= await searchForShow(SearchStr);
      setapiData(result);

    } catch (error) {
      setapiDataError(error);
    }
  }

  // api data 
  const renderapiData =()=>{

    if(apiDataError)
    {
      return <div> Error Occured: {apiDataError.message} </div>
    }
    if(apiData)
    {

      return apiData.map((data)=>(
        <div key={data.show.id}>
          {data.show.name}
          </div>
      ))
    }
    return null;
    // {apiData.map((data)=>(
    //   <div key={data.show.id}>
    //     {data.show.name}
    //     </div>
    // ))}
  }
  return <div>

        <form onSubmit={onSearch}>
         <input type="text" value={SearchStr} onChange={onSearchInputChnage} />
         <button type="submit">Search </button>
        </form>

        <div>
          {renderapiData()}
        </div>
        </div>   
  
}
export default Home;
import { useState } from "react";
const Home=()=> {
   const [SearchStr,setSearchStr] =useState("");
   
   const onSearchInputChnage=(ev)=>
   {
     setSearchStr(ev.target.value)
   }

    const onSearch= async (ev)=>{
        ev.preventDefault();
    const response=  await  fetch(`https://api.tvmaze.com/search/shows?q=${setSearchStr}`);
    const body= await response.json();
    console.log(body);
        
   }
  return <div>

        <form onSubmit={onSearch}>
         <input type="text" value={SearchStr} onChange={onSearchInputChnage} />
         <button type="submit">Search </button>
        </form>
        </div>
  
}
export default Home;
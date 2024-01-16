const BASE_URL='https://api.tvmaze.com';

const apiGet= async (queryString)=>{

   
    const response=  await  
    fetch(`${BASE_URL}${queryString}`);
    // `https://api.tvmaze.com/search/shows?q=${setSearchStr}
    const body= await response.json();
    return body;
}
export const searchForShow=(query)=>{
    return apiGet(`/search/shows?q=${query}`);
}
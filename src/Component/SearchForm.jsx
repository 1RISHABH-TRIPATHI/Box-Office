import { useState } from 'react';
const SearchForm=({onSearch})=>{

    const [SearchStr, setSearchStr] = useState('');
    const [searchOption, setsearchOption] = useState('shows');

    const onSearchInputChnage = ev => {
        setSearchStr(ev.target.value);
      };
      // Change Radio button
      const onRadioChange = ev => {
        setsearchOption(ev.target.value);
      };
    const onSubmit=(ev)=>
    {
        ev.preventDefault();
        const option={
            q:SearchStr,
            searchOption
        }
        onSearch(option);
    }
    return <div>
        <form onSubmit={onSubmit}>
        <input type="text" value={SearchStr} onChange={onSearchInputChnage} />

        <label >
          Shows
          <input
            type="radio"
            name="search-option"
            id=""
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>

        <label >
          Actors
          <input
            type="radio"
            name="search-option"
            id=""
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>

        <button type="submit">Search </button>
      </form>
    </div>
}
export default SearchForm;
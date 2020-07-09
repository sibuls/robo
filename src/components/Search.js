import React from 'react';
const Search = ({inputValue, onSearch}) => {
    const styles =  {
        width:300,
        padding:"15px 5px",
      }
    return (
            <input
            style={styles}
            type="search"
            placeholder="search your favourite robot"
            value={inputValue}
            onChange={onSearch}/>
      );
}
export default Search;

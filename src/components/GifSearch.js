import React from 'react';

const GifSearch = ( props ) =>

      <React.Fragment>
     <nav>
      <form id="searchGif" onSubmit={props.fetchGif}>
        <input
          value={props.term}
          placeholder="search gif"
          onChange={props.handleChange}
        />
        <button type="submit" >search</button>
      </form>
      </nav>
      </React.Fragment>


export default GifSearch

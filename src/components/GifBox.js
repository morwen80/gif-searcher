import React from 'react';

const GifBox = ( {gifs} ) => {

  return(
    <div className="gifbox">
     {gifs.map(gif =>
       <li key={gif.id}>
       <img alt="img" src={gif.images.fixed_height_still.url} />
       </li>
     )}
    </div>
  )
}

export default GifBox

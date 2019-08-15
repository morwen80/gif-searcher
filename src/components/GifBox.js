import React from 'react';

const GifBox = ( {gifs} ) => {

  return(
    <div className="gifBox">
     {gifs.map(gif =>
       <li key={gif.id}>
       <img alt="img" src={gif.images.fixed_height.url} />
       </li>
     )}
    </div>
  )
}

export default GifBox

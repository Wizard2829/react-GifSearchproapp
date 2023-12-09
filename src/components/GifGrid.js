import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';


export const GifGrid = ({ category }) => {
  
  const { gifList, loading } = useFetchGifs( category );
  console.log(loading);
  console.log(gifList);



  return (
    <>
      <h3>{category}</h3>
      { loading && <p>Loading ...</p>}
      <div className="card-grid animate__animated animate__backInLeft">
          {
            gifList.map( img =>(
              <GifGridItem
                    key={img.id}
                    { ...img }
              />
            ))
          }
        
      
      </div>
    </>
  );
};

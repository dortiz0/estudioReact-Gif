import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );







   
    

  return (
    <>
        <h3>{ category }</h3>

        <div className="card-grid">
            {
                images.map( ({ id, title, url }) => (
                    <GifItem key={ id } title={ title } url={ url } />
                ))
            }
            {/* para expandir todas la propiedades {...image} */}

        </div>
               
    
    </>
  )
}

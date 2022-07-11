import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

        const [categories, setCategories] = useState([  ]);

        const onAddCategory = (newCategory) => {

            if ( categories.includes(newCategory) ) return; //se valida que no se repitan los nombres

            setCategories([ newCategory, ...categories ]);
            
        }

  return (
    <>

        {/* Titulo */}

        <h1>Buscar Gif</h1>



        {/* Input */}

        <AddCategory 
            onNewCategory={ onAddCategory }
        
        />




        {/* Listado de tarjetas */}
        
        {/*<button onClick = { onAddCategory }>Agregar</button>*/}

        {

             categories.map(( category ) => (

                <GifGrid 
                    key= { category } 
                    category={ category }
                />                

                )
            )
        }

            {/* Tarjeta Item */}

    </>
  )
}

import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue( event.target.value );

    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setinputValue('');

    }


    return (
        <form onSubmit={ onSubmit }>
            <input 
                type = "text"
                placeholder="Buscar Gifs"
                value = {inputValue}
                onChange={ (event) => onInputChange(event) }
            />
        </form>
        )


    /* OTRA FORMA
        const onInputChange = (terget) => {
            setinputValue( target.value );

        }
    
    return (
    <input 
        type = "text"
        placeholder="Buscar Gifs"
        value = {inputValue}
        onChange={ onInputChange }
    />
    )
        */








}




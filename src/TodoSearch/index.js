import React, { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){

    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return(
        <input 
            type="text" 
            className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
         />
         
    )
}

export default TodoSearch;
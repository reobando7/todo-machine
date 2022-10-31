import React, { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
  
          let parsedItem;
          
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        }catch(error){
          setError(error)
        }
      }, 1000)
    }, [])
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error)
      }
    }
  
    // return [item, saveItem]
    // Cuando en el custom hook quieres enviar mas de dos elementos
    // ya no se usa un array, se usa un objeto.
    return {item, saveItem, loading, error}
  }

  export { useLocalStorage }
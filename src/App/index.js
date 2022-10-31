import React, { useEffect, useState } from 'react';
import './App.css';
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext';

const defaulTodos = [
  {id:1, text : 'Cortar cebolla', completed: true},
  {id:2, text : 'Tomar el curso de intro a react', completed: false},
  {id:3, text : 'Cortar cabello', completed: false}
]

function App() {

  // Los dos puntos se utilizan para renombrar una propiedad
  // como en el custom hook retornamos item y aqui usamos todos,
  // lo renombramos a todos
  
 

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;

import React, {useContext} from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext'

function TodoCounter(){
    
    const {totalTodos, completedTodos} = useContext(TodoContext)

    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

//Para exportarlo es recomendable usar la exportacion absoluta,
//que es con el nombre del componente encerrado en llaves, el export default
//se puede usar, pero al momento de importar el componente se le puede colocar cualquier nombre
//y puede causar propblemas

export { TodoCounter };
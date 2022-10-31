import React, {useContext} from 'react';
import TodoList from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import TodoSearch from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUi(){
    {/* Ese value es el que guarde en TodoContext.Provider,
    pero aqui lo estoy desestructurando */}
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return(
        //Cuando tengamos que enviar varias etiquetas o components
        //podemos utilizar React.Fragment es una buena practica,
        //es mejor que usar `un div
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            
            <TodoList>
                {error && <p>Desesperate, hubo un error...</p> }
                {loading && <p>Estamos cargando</p> }
                {(!loading && !searchedTodos.length) && <p>Crea tu todo</p> }
                {searchedTodos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                            />
                ))
                }
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}

export {AppUi}
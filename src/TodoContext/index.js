import React, {createContext, useState} from 'react';
import {useLocalStorage} from './useLocalStorage';

const defaulTodos = [
  {id:1, text : 'Cortar cebolla', completed: true},
  {id:2, text : 'Tomar el curso de intro a react', completed: false},
  {id:3, text : 'Cortar cabello', completed: false}
]

const TodoContext = createContext();

function TodoProvider(props){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error } = useLocalStorage('TODOS_V1', defaulTodos);
    
      const [searchValue, setSearchValue] = useState('');

      const [openModal, setOpenModal] = useState(false)

      const completedTodos = todos.filter(todo => !!todo.completed).length
      const totalTodos = todos.length;
    
      let searchedTodos = []
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLocaleLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        })
        saveTodos(newTodos);
      }
    
      const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
      }
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
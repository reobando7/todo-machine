import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  
    return (
      <li className="TodoItem">
        {/* Si props.completed es true se le agregara
        la clase Icon-check--active */}
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}>
          {/* Si la pasas sin parentesis, es que le estas pasando las props*/}
          √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span 
          className="Icon Icon-delete" 
          onClick={props.onDelete}>
          X
        </span>
      </li>
    );
}

export { TodoItem };
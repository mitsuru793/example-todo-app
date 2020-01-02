import React from 'react'
import {Todo} from "../../Domain/Todo"
import UserImage from "../UserImage"

interface Props {
  todo: Todo,
}

const TodoItem: React.FC<Props> = (props) => {
  const {todo} = props
  return (
    <div className="todo-item">
      <button className="done-button">
        <span className="item-label">Done</span>
      </button>
      <p className="text">{todo.text}</p>
      <div className="user-images">
        <UserImage userName={todo.toUser.name} userImagePath={todo.fromUser.imagePath} text="From"/>
        <UserImage userName={todo.toUser.name} userImagePath={todo.toUser.imagePath} text="To"/>
      </div>
    </div>
  )
}

export default TodoItem

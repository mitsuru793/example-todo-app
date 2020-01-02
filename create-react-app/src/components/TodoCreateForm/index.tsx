import React from "react"
import {Todo} from "../../Domain/Todo"

interface Props {
  todo: Todo,
}

const TodoCreateForm: React.FC<Props> = (props) => {
  const {todo} = props
  return (
    <div className="todo-item new-todo">
      <button className="add-button">
        <span className="item-label">Add</span>
      </button>
      <input type="text"/>
      <div className="user-image from">
        <span className="item-label">To</span>
        <img src={todo.fromUser.imagePath} alt={todo.fromUser.name}/>
      </div>
    </div>
  )
}
export default TodoCreateForm

import React from 'react'
import './App.css'
import Header from "./components/Header"
import TodoForm from "./components/TodoCreateForm"
import TodoSearchForm from "./components/TodoSearchForm"
import TodoItem from "./components/TodoItem"
import Pager from "./components/Pager"

const todo = {
  text: '19日の午前10時に課長の田中さんに、新規サイトの進捗をメールで伺う',
  fromUser: {
    name: 'Deer',
    imagePath: '/imgs/animal_deer.png',
  },
  toUser: {
    name: 'Panda',
    imagePath: '/imgs/animal_panda.png',
  },
}
const loginUser = {
  name: 'Panda',
  imagePath: '/imgs/animal_panda.png',
}
const pageNums = [2, 3, 4, 5, 6]

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Header loginUser={loginUser}/>
        <div className="app mt-20">
          <div className="todo-items">
            <TodoForm todo={todo}/>
          </div>
          <div className="line mt-20"/>
          <div className="todo-items search-box mt-20">
            <TodoSearchForm/>
          </div>
          <div className="todo-items mt-20">
            <TodoItem todo={todo}/>
          </div>
          <div className="pager mt-20">
            <Pager pageNums={pageNums}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

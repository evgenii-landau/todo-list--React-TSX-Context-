import React, {useContext} from "react";
import styles from './App.module.css'
import {TodoList} from "../TodoList/TodoList.tsx";
import {TodoContext} from "../../context/TodoContext.tsx";


const App: React.FC = () => {
	const {value, inputRef, handleChange, handleKeyDown, addTodo} = useContext(TodoContext)

	return (
		<div className={styles.wrapperTodoList}>
			<div className={styles.todoList}>
        <div>
          <input className={styles.input} ref={inputRef} value={value} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Какая задача на сегодня?'/>
          <button className={styles.button} onClick={addTodo} type='button'>Add</button>
        </div>
        <TodoList/>
      </div>
    </div>
  )
}

export default App

import React, {useContext} from "react";
import styles from './TodoList.module.css'
import {TodoItem} from "../TodoItem/TodoItem.tsx";
import {TodoContext} from "../../context/TodoContext.tsx";


export const TodoList: React.FC = () => {
	const {todos} = useContext(TodoContext)

	return (
		<ul className={styles.list}>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo}/>
			))}
		</ul>
	)
}
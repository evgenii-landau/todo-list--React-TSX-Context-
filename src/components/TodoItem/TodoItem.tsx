import React, {useContext} from "react";
import styles from './TodoItem.module.css'
import {ITodo} from "../../types/data.ts";
import {TodoContext} from "../../context/TodoContext.tsx";

interface ITodoItem extends ITodo {
}


export const TodoItem: React.FC<ITodoItem> = ({id, title, completed}) => {
	const {removeTodo, toggleTodo} = useContext(TodoContext)

	return (
		<li className={styles.todo}>

			<div className={styles.checkbox_wrapper_12}>
				<div className={styles.cbx}>
					<input type="checkbox" id="cbx-12" checked={completed} onChange={() => toggleTodo(id)}/>
					<label htmlFor="cbx-12"></label>
					<svg fill="none" viewBox="0 0 15 14" height="14" width="15">
						<path d="M2 8.36364L6.23077 12L13 2"></path>
					</svg>
				</div>

				<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<filter id="goo-12">
							<feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
							<feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix"
														 in="blur"></feColorMatrix>
							<feBlend in2="goo-12" in="SourceGraphic"></feBlend>
						</filter>
					</defs>
				</svg>
			</div>
			{title}
			<div className={styles.todo__delete} onClick={() => removeTodo(id)}>
				<svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
						fill="#393a37"></path>
				</svg>
			</div>
		</li>
	)
}

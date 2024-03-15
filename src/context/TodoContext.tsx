import React, {createContext, ReactNode, useEffect, useRef, useState} from "react";
import {ITodo} from "../types/data.ts";

interface TodoContextType {
	value: string,
	todos: ITodo[],
	inputRef: React.RefObject<HTMLInputElement> | null,
	handleChange: React.ChangeEventHandler<HTMLInputElement>,
	handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>,
	addTodo: () => void,
	removeTodo: (id: number) => void,
	toggleTodo: (id: number) => void
}

export const TodoContext = createContext<TodoContextType>({
	value: '',
	todos: [],
	inputRef: null,
	handleChange: () => {},
	handleKeyDown: () => {},
	addTodo: () => {},
	removeTodo: () => {},
	toggleTodo: () => {},
})

export const TodoProvider: React.FC<{children: ReactNode}> = ({children}) => {
	const [value, setValue] = useState('')
	const [todos, setTodos] = useState<ITodo[]>([])
	const inputRef = useRef<HTMLInputElement>(null)

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') addTodo()
	}

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodo = (id: number): void => {
		setTodos(todos.map(todo => {
			if(todo.id !== id) return todo

			return {
				...todo,
				completed: !todo.completed
			}
		}))
	}

	const addTodo = () => {
		if (value) {
			setTodos(state => {
				return [...state, {
					id: Date.now(),
					title: value,
					completed: false
				}]
			})
			setValue('')
		}
	}

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus()
	}, []);

	return (
		<TodoContext.Provider value={{inputRef, value, handleChange, handleKeyDown, todos, addTodo, removeTodo, toggleTodo}}>
			{children}
		</TodoContext.Provider>
	)
}













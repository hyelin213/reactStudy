import { useState } from "react";

export default function ToDoApp() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const todoInputChange = e => {
        setTodo(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        // 기존 todoList 깊은 복사
        // 0번 방에 todo값 넣을 수 있어야 한다.
        // 복사된 배열 todoList에 넣어준다.

        // const todoListCopy = [ todo, ...todoList ];
        // setTodoList(todoListCopy);
        if(todo === '') {
            return;
        }
        
        setTodoList(prev => [todo, ...prev]);
        setTodo('');
        console.log(todoList);
    }

    const clearForm = e => {
        e.preventDefault();
        setTodo('');
        setTodoList([]);
    }

    const delItem = (idx) => {
        todoList.splice(idx, 1);
        setTodoList([...todoList]);
        console.log(todoList);
    }

    return (
        <div>
            <form action="현재주소" method="get" onSubmit={onSubmit}>
                <input type="text"
                    onChange={todoInputChange}
                    value={todo}/>
                <button>Add Todo</button>
            </form>
            <button onClick={clearForm}>Clear</button>
            <ul>
                { todoList.map((item, idx) =>
                    <li key={idx}>
                        {item}
                        <button onClick={() => {delItem(idx)}}>x</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
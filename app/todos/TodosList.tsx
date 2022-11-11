import Link from 'next/link';
import React from 'react'
import { Todo } from '../../typings';

const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/', { next: { revalidate: 60 }});
    const todos: Todo[] = await res.json()
    return todos;
}

export default async function TodosList() {
    const todos = await fetchTodos();
    return (
        <div>
            {todos.map((todo, i) => (
                <p key={i}>
                    <Link href={`/todos/${todo.id}`}> Todo: {todo.id}</Link>
                </p>
            ))}

        </div>
    )
}

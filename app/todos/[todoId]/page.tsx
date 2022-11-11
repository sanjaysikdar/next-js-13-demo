import React from 'react'
import { Todo } from '../../../typings';
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
    params: {
        todoId: string,
    };
};

const fetchTodo = async (todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = await res.json()
    return todo;
}

export default async function TodoDetailPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId);
    if (!todo.id) return notFound()
    console.log(todo)
    return (
        <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
            <p className='text-bold'>#{todo.id}: {todo.title}</p>
        </div>
    )
}


export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos: Todo[] = await res.json()

    const trimedTodos = todos.splice(0, 10); // Limiting 10 Records

    // [ {todoId: '1'}, {todoId: '2'}, {...}]
    return trimedTodos.map(todo => ({
        todoId: todo.id.toString()
    }))
}
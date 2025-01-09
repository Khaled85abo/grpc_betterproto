import React, { useState } from 'react';
import { useGetTodosQuery, useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from '../store/api';

type Props = {
    userId: string;
};

export const TodoList: React.FC<Props> = ({ userId }) => {
    const [text, setText] = useState('');
    const { data, isLoading, refetch } = useGetTodosQuery({ userId });
    const [createTodo] = useCreateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const todos = data?.todosList || [];

    const handleAddTodo = async () => {
        if (!text) return;
        await createTodo({ userId, text });
        setText('');
        refetch();
    };

    const handleToggleCompleted = async (id: string, completed: boolean) => {
        await updateTodo({ id, completed: !completed });
        refetch();
    };

    const handleDelete = async (id: string) => {
        await deleteTodo({ id });
        refetch();
    };

    return (
        <div>
            <h2>Todos for user: {userId}</h2>
            <div>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="New todo text"
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleCompleted(todo.id, todo.completed)}
                            />
                            {todo.text}
                        </label>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

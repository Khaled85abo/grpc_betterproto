import { createApi } from '@reduxjs/toolkit/query/react';
import { grpc } from '@improbable-eng/grpc-web';
import { TodoServiceClient } from '../proto/TodoServiceClientPb';
import {
    CreateTodoRequest,
    DeleteTodoRequest,
    GetTodosRequest,
    UpdateTodoRequest,
    TodoItem,
} from '../proto/todo_pb';

// Configure your client
const client = new TodoServiceClient('http://localhost:8080', null, null);
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//  IMPORTANT: If you run an Envoy proxy or gRPC-Web proxy, the URL is that proxy endpoint.

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: async (arg, api, extraOptions) => {
        // We'll implement a custom baseQuery that calls gRPC methods
        // This is a simplistic approach. In a real world scenario,
        // you might define separate endpoints that each call a different gRPC method.
        try {
            const { method, payload } = arg;

            switch (method) {
                case 'CreateTodo':
                    return new Promise((resolve, reject) => {
                        client.createTodo(payload as CreateTodoRequest, {}, (err, response) => {
                            if (err) {
                                reject({ error: err.message });
                            } else {
                                resolve({ data: response.toObject() });
                            }
                        });
                    });

                case 'GetTodos':
                    return new Promise((resolve, reject) => {
                        client.getTodos(payload as GetTodosRequest, {}, (err, response) => {
                            if (err) {
                                reject({ error: err.message });
                            } else {
                                resolve({ data: response.toObject() });
                            }
                        });
                    });

                case 'UpdateTodo':
                    return new Promise((resolve, reject) => {
                        client.updateTodo(payload as UpdateTodoRequest, {}, (err, response) => {
                            if (err) {
                                reject({ error: err.message });
                            } else {
                                resolve({ data: response.toObject() });
                            }
                        });
                    });

                case 'DeleteTodo':
                    return new Promise((resolve, reject) => {
                        client.deleteTodo(payload as DeleteTodoRequest, {}, (err, response) => {
                            if (err) {
                                reject({ error: err.message });
                            } else {
                                resolve({ data: response.toObject() });
                            }
                        });
                    });

                default:
                    throw new Error(`Unknown method: ${method}`);
            }
        } catch (error) {
            return { error: error };
        }
    },
    endpoints: (builder) => ({
        createTodo: builder.mutation<any, { userId: string; text: string }>({
            query: ({ userId, text }) => ({
                method: 'CreateTodo',
                payload: new CreateTodoRequest().setUserId(userId).setText(text),
            }),
        }),
        getTodos: builder.query<{ todosList: TodoItem.AsObject[] }, { userId: string }>({
            query: ({ userId }) => ({
                method: 'GetTodos',
                payload: new GetTodosRequest().setUserId(userId),
            }),
        }),
        updateTodo: builder.mutation<any, { id: string; text?: string; completed: boolean }>({
            query: ({ id, text, completed }) => {
                const req = new UpdateTodoRequest();
                req.setId(id);
                if (text !== undefined) req.setText(text);
                req.setCompleted(completed);
                return {
                    method: 'UpdateTodo',
                    payload: req,
                };
            },
        }),
        deleteTodo: builder.mutation<any, { id: string }>({
            query: ({ id }) => ({
                method: 'DeleteTodo',
                payload: new DeleteTodoRequest().setId(id),
            }),
        }),
    }),
});

export const {
    useCreateTodoMutation,
    useGetTodosQuery,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApi;

from typing import AsyncIterator
import asyncio
import uuid

import betterproto
from betterproto.grpc.util.async_grpc import AsyncIOGrpcServer

# from todo import TodoServiceBase, CreateTodoRequest, GetTodosRequest, UpdateTodoRequest, DeleteTodoRequest, TodoResponse, TodosResponse, TodoItem

from todo import (
    TodoServiceBase,
    CreateTodoRequest,
    GetTodosRequest,
    UpdateTodoRequest,
    DeleteTodoRequest,
    TodoResponse,
    TodosResponse,
    TodoItem,
)


# In-memory store for demonstration (keyed by todo_id)
TODOS = {}


class TodoService(TodoServiceBase):
    async def create_todo(self, request: "CreateTodoRequest") -> "TodoResponse":
        new_id = str(uuid.uuid4())
        todo_item = TodoItem(
            id=new_id,
            user_id=request.user_id,
            text=request.text,
            completed=False,
        )
        TODOS[new_id] = todo_item
        return TodoResponse(todo=todo_item)

    async def get_todos(self, request: "GetTodosRequest") -> "TodosResponse":
        # Filter by user_id
        user_todos = [t for t in TODOS.values() if t.user_id == request.user_id]
        return TodosResponse(todos=user_todos)

    async def update_todo(self, request: "UpdateTodoRequest") -> "TodoResponse":
        if request.id not in TODOS:
            raise betterproto.grpc.grpclib_server.AbortError(
                betterproto.grpc.Status.NOT_FOUND, f"Todo {request.id} not found"
            )
        # Update fields if they’re present in the request
        todo_item = TODOS[request.id]
        todo_item.text = request.text if request.text else todo_item.text
        todo_item.completed = request.completed
        TODOS[request.id] = todo_item
        return TodoResponse(todo=todo_item)

    async def delete_todo(self, request: "DeleteTodoRequest") -> "TodoResponse":
        if request.id not in TODOS:
            raise betterproto.grpc.grpclib_server.AbortError(
                betterproto.grpc.Status.NOT_FOUND, f"Todo {request.id} not found"
            )
        removed_todo = TODOS.pop(request.id)
        return TodoResponse(todo=removed_todo)

    async def stream_todos(
        self,
        request_iterator: AsyncIterator["GetTodosRequest"],
        context: betterproto.grpc.Context,
    ) -> AsyncIterator["TodosResponse"]:
        """
        Demonstrates a bidirectional streaming method:
        - The client can stream `GetTodosRequest` (which includes user_id).
        - We stream back the current list of todos each time we get a request
          or perhaps each time there's an update.
        """
        async for request in request_iterator:
            # Send the user’s todos
            user_todos = [t for t in TODOS.values() if t.user_id == request.user_id]
            yield TodosResponse(todos=user_todos)
            # Optionally, you could subscribe to real-time changes here, etc.


async def run_grpc_server() -> None:
    server = AsyncIOGrpcServer()
    # Register your service
    service = TodoService()
    server.add_service(service)
    # Choose a port
    listen_addr = "0.0.0.0:50051"
    print(f"Starting gRPC server on {listen_addr}...")
    await server.start(listen_addr)
    await server.wait_closed()


if __name__ == "__main__":
    asyncio.run(run_grpc_server())

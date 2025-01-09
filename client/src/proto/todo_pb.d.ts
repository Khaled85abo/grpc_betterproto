import * as jspb from 'google-protobuf'



export class TodoItem extends jspb.Message {
  getId(): string;
  setId(value: string): TodoItem;

  getUserId(): string;
  setUserId(value: string): TodoItem;

  getText(): string;
  setText(value: string): TodoItem;

  getCompleted(): boolean;
  setCompleted(value: boolean): TodoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoItem.AsObject;
  static toObject(includeInstance: boolean, msg: TodoItem): TodoItem.AsObject;
  static serializeBinaryToWriter(message: TodoItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoItem;
  static deserializeBinaryFromReader(message: TodoItem, reader: jspb.BinaryReader): TodoItem;
}

export namespace TodoItem {
  export type AsObject = {
    id: string,
    userId: string,
    text: string,
    completed: boolean,
  }
}

export class CreateTodoRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreateTodoRequest;

  getText(): string;
  setText(value: string): CreateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
  static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
  export type AsObject = {
    userId: string,
    text: string,
  }
}

export class TodoResponse extends jspb.Message {
  getTodo(): TodoItem | undefined;
  setTodo(value?: TodoItem): TodoResponse;
  hasTodo(): boolean;
  clearTodo(): TodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoResponse): TodoResponse.AsObject;
  static serializeBinaryToWriter(message: TodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoResponse;
  static deserializeBinaryFromReader(message: TodoResponse, reader: jspb.BinaryReader): TodoResponse;
}

export namespace TodoResponse {
  export type AsObject = {
    todo?: TodoItem.AsObject,
  }
}

export class GetTodosRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetTodosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosRequest): GetTodosRequest.AsObject;
  static serializeBinaryToWriter(message: GetTodosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosRequest;
  static deserializeBinaryFromReader(message: GetTodosRequest, reader: jspb.BinaryReader): GetTodosRequest;
}

export namespace GetTodosRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetTodoRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetTodoRequest;

  getTodoId(): string;
  setTodoId(value: string): GetTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoRequest): GetTodoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoRequest;
  static deserializeBinaryFromReader(message: GetTodoRequest, reader: jspb.BinaryReader): GetTodoRequest;
}

export namespace GetTodoRequest {
  export type AsObject = {
    userId: string,
    todoId: string,
  }
}

export class TodosResponse extends jspb.Message {
  getTodosList(): Array<TodoItem>;
  setTodosList(value: Array<TodoItem>): TodosResponse;
  clearTodosList(): TodosResponse;
  addTodos(value?: TodoItem, index?: number): TodoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodosResponse): TodosResponse.AsObject;
  static serializeBinaryToWriter(message: TodosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodosResponse;
  static deserializeBinaryFromReader(message: TodosResponse, reader: jspb.BinaryReader): TodosResponse;
}

export namespace TodosResponse {
  export type AsObject = {
    todosList: Array<TodoItem.AsObject>,
  }
}

export class UpdateTodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateTodoRequest;

  getText(): string;
  setText(value: string): UpdateTodoRequest;

  getCompleted(): boolean;
  setCompleted(value: boolean): UpdateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTodoRequest): UpdateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTodoRequest;
  static deserializeBinaryFromReader(message: UpdateTodoRequest, reader: jspb.BinaryReader): UpdateTodoRequest;
}

export namespace UpdateTodoRequest {
  export type AsObject = {
    id: string,
    text: string,
    completed: boolean,
  }
}

export class DeleteTodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoRequest): DeleteTodoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest;
  static deserializeBinaryFromReader(message: DeleteTodoRequest, reader: jspb.BinaryReader): DeleteTodoRequest;
}

export namespace DeleteTodoRequest {
  export type AsObject = {
    id: string,
  }
}


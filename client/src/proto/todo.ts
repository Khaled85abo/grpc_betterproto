/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.29.1
 * source: todo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace todo {
    export class TodoItem extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            user_id?: string;
            text?: string;
            completed?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("user_id" in data && data.user_id != undefined) {
                    this.user_id = data.user_id;
                }
                if ("text" in data && data.text != undefined) {
                    this.text = data.text;
                }
                if ("completed" in data && data.completed != undefined) {
                    this.completed = data.completed;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get user_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set user_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get text() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set text(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get completed() {
            return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
        }
        set completed(value: boolean) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            id?: string;
            user_id?: string;
            text?: string;
            completed?: boolean;
        }): TodoItem {
            const message = new TodoItem({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.user_id != null) {
                message.user_id = data.user_id;
            }
            if (data.text != null) {
                message.text = data.text;
            }
            if (data.completed != null) {
                message.completed = data.completed;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                user_id?: string;
                text?: string;
                completed?: boolean;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.user_id != null) {
                data.user_id = this.user_id;
            }
            if (this.text != null) {
                data.text = this.text;
            }
            if (this.completed != null) {
                data.completed = this.completed;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.user_id.length)
                writer.writeString(2, this.user_id);
            if (this.text.length)
                writer.writeString(3, this.text);
            if (this.completed != false)
                writer.writeBool(4, this.completed);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TodoItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TodoItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.user_id = reader.readString();
                        break;
                    case 3:
                        message.text = reader.readString();
                        break;
                    case 4:
                        message.completed = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TodoItem {
            return TodoItem.deserialize(bytes);
        }
    }
    export class CreateTodoRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            user_id?: string;
            text?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("user_id" in data && data.user_id != undefined) {
                    this.user_id = data.user_id;
                }
                if ("text" in data && data.text != undefined) {
                    this.text = data.text;
                }
            }
        }
        get user_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set user_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get text() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set text(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            user_id?: string;
            text?: string;
        }): CreateTodoRequest {
            const message = new CreateTodoRequest({});
            if (data.user_id != null) {
                message.user_id = data.user_id;
            }
            if (data.text != null) {
                message.text = data.text;
            }
            return message;
        }
        toObject() {
            const data: {
                user_id?: string;
                text?: string;
            } = {};
            if (this.user_id != null) {
                data.user_id = this.user_id;
            }
            if (this.text != null) {
                data.text = this.text;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.user_id.length)
                writer.writeString(1, this.user_id);
            if (this.text.length)
                writer.writeString(2, this.text);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CreateTodoRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CreateTodoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.user_id = reader.readString();
                        break;
                    case 2:
                        message.text = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CreateTodoRequest {
            return CreateTodoRequest.deserialize(bytes);
        }
    }
    export class TodoResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            todo?: TodoItem;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("todo" in data && data.todo != undefined) {
                    this.todo = data.todo;
                }
            }
        }
        get todo() {
            return pb_1.Message.getWrapperField(this, TodoItem, 1) as TodoItem;
        }
        set todo(value: TodoItem) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_todo() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            todo?: ReturnType<typeof TodoItem.prototype.toObject>;
        }): TodoResponse {
            const message = new TodoResponse({});
            if (data.todo != null) {
                message.todo = TodoItem.fromObject(data.todo);
            }
            return message;
        }
        toObject() {
            const data: {
                todo?: ReturnType<typeof TodoItem.prototype.toObject>;
            } = {};
            if (this.todo != null) {
                data.todo = this.todo.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_todo)
                writer.writeMessage(1, this.todo, () => this.todo.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TodoResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TodoResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.todo, () => message.todo = TodoItem.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TodoResponse {
            return TodoResponse.deserialize(bytes);
        }
    }
    export class GetTodosRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            user_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("user_id" in data && data.user_id != undefined) {
                    this.user_id = data.user_id;
                }
            }
        }
        get user_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set user_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            user_id?: string;
        }): GetTodosRequest {
            const message = new GetTodosRequest({});
            if (data.user_id != null) {
                message.user_id = data.user_id;
            }
            return message;
        }
        toObject() {
            const data: {
                user_id?: string;
            } = {};
            if (this.user_id != null) {
                data.user_id = this.user_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.user_id.length)
                writer.writeString(1, this.user_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetTodosRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetTodosRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.user_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetTodosRequest {
            return GetTodosRequest.deserialize(bytes);
        }
    }
    export class GetTodoRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            user_id?: string;
            todo_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("user_id" in data && data.user_id != undefined) {
                    this.user_id = data.user_id;
                }
                if ("todo_id" in data && data.todo_id != undefined) {
                    this.todo_id = data.todo_id;
                }
            }
        }
        get user_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set user_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get todo_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set todo_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            user_id?: string;
            todo_id?: string;
        }): GetTodoRequest {
            const message = new GetTodoRequest({});
            if (data.user_id != null) {
                message.user_id = data.user_id;
            }
            if (data.todo_id != null) {
                message.todo_id = data.todo_id;
            }
            return message;
        }
        toObject() {
            const data: {
                user_id?: string;
                todo_id?: string;
            } = {};
            if (this.user_id != null) {
                data.user_id = this.user_id;
            }
            if (this.todo_id != null) {
                data.todo_id = this.todo_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.user_id.length)
                writer.writeString(1, this.user_id);
            if (this.todo_id.length)
                writer.writeString(2, this.todo_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetTodoRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetTodoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.user_id = reader.readString();
                        break;
                    case 2:
                        message.todo_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetTodoRequest {
            return GetTodoRequest.deserialize(bytes);
        }
    }
    export class TodosResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            todos?: TodoItem[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("todos" in data && data.todos != undefined) {
                    this.todos = data.todos;
                }
            }
        }
        get todos() {
            return pb_1.Message.getRepeatedWrapperField(this, TodoItem, 1) as TodoItem[];
        }
        set todos(value: TodoItem[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            todos?: ReturnType<typeof TodoItem.prototype.toObject>[];
        }): TodosResponse {
            const message = new TodosResponse({});
            if (data.todos != null) {
                message.todos = data.todos.map(item => TodoItem.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                todos?: ReturnType<typeof TodoItem.prototype.toObject>[];
            } = {};
            if (this.todos != null) {
                data.todos = this.todos.map((item: TodoItem) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.todos.length)
                writer.writeRepeatedMessage(1, this.todos, (item: TodoItem) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TodosResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TodosResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.todos, () => pb_1.Message.addToRepeatedWrapperField(message, 1, TodoItem.deserialize(reader), TodoItem));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TodosResponse {
            return TodosResponse.deserialize(bytes);
        }
    }
    export class UpdateTodoRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            text?: string;
            completed?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("text" in data && data.text != undefined) {
                    this.text = data.text;
                }
                if ("completed" in data && data.completed != undefined) {
                    this.completed = data.completed;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get text() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set text(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get completed() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set completed(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            id?: string;
            text?: string;
            completed?: boolean;
        }): UpdateTodoRequest {
            const message = new UpdateTodoRequest({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.text != null) {
                message.text = data.text;
            }
            if (data.completed != null) {
                message.completed = data.completed;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                text?: string;
                completed?: boolean;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.text != null) {
                data.text = this.text;
            }
            if (this.completed != null) {
                data.completed = this.completed;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.text.length)
                writer.writeString(2, this.text);
            if (this.completed != false)
                writer.writeBool(3, this.completed);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpdateTodoRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UpdateTodoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.text = reader.readString();
                        break;
                    case 3:
                        message.completed = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): UpdateTodoRequest {
            return UpdateTodoRequest.deserialize(bytes);
        }
    }
    export class DeleteTodoRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: string;
        }): DeleteTodoRequest {
            const message = new DeleteTodoRequest({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteTodoRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeleteTodoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest {
            return DeleteTodoRequest.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedTodoServiceService {
        static definition = {
            CreateTodo: {
                path: "/todo.TodoService/CreateTodo",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: CreateTodoRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => CreateTodoRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: TodoResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => TodoResponse.deserialize(new Uint8Array(bytes))
            },
            GetTodos: {
                path: "/todo.TodoService/GetTodos",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: GetTodosRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => GetTodosRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: TodosResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => TodosResponse.deserialize(new Uint8Array(bytes))
            },
            GetTodo: {
                path: "/todo.TodoService/GetTodo",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: GetTodoRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => GetTodoRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: TodoResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => TodoResponse.deserialize(new Uint8Array(bytes))
            },
            UpdateTodo: {
                path: "/todo.TodoService/UpdateTodo",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: UpdateTodoRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => UpdateTodoRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: TodoResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => TodoResponse.deserialize(new Uint8Array(bytes))
            },
            DeleteTodo: {
                path: "/todo.TodoService/DeleteTodo",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: DeleteTodoRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => DeleteTodoRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: TodoResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => TodoResponse.deserialize(new Uint8Array(bytes))
            },
            StreamTodos: {
                path: "/todo.TodoService/StreamTodos",
                requestStream: true,
                responseStream: true,
                requestSerialize: (message: GetTodosRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => GetTodosRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: TodosResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => TodosResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CreateTodo(call: grpc_1.ServerUnaryCall<CreateTodoRequest, TodoResponse>, callback: grpc_1.sendUnaryData<TodoResponse>): void;
        abstract GetTodos(call: grpc_1.ServerUnaryCall<GetTodosRequest, TodosResponse>, callback: grpc_1.sendUnaryData<TodosResponse>): void;
        abstract GetTodo(call: grpc_1.ServerUnaryCall<GetTodoRequest, TodoResponse>, callback: grpc_1.sendUnaryData<TodoResponse>): void;
        abstract UpdateTodo(call: grpc_1.ServerUnaryCall<UpdateTodoRequest, TodoResponse>, callback: grpc_1.sendUnaryData<TodoResponse>): void;
        abstract DeleteTodo(call: grpc_1.ServerUnaryCall<DeleteTodoRequest, TodoResponse>, callback: grpc_1.sendUnaryData<TodoResponse>): void;
        abstract StreamTodos(call: grpc_1.ServerDuplexStream<GetTodosRequest, TodosResponse>): void;
    }
    export class TodoServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedTodoServiceService.definition, "TodoService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        CreateTodo: GrpcUnaryServiceInterface<CreateTodoRequest, TodoResponse> = (message: CreateTodoRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<TodoResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<TodoResponse>, callback?: grpc_1.requestCallback<TodoResponse>): grpc_1.ClientUnaryCall => {
            return super.CreateTodo(message, metadata, options, callback);
        };
        GetTodos: GrpcUnaryServiceInterface<GetTodosRequest, TodosResponse> = (message: GetTodosRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<TodosResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<TodosResponse>, callback?: grpc_1.requestCallback<TodosResponse>): grpc_1.ClientUnaryCall => {
            return super.GetTodos(message, metadata, options, callback);
        };
        GetTodo: GrpcUnaryServiceInterface<GetTodoRequest, TodoResponse> = (message: GetTodoRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<TodoResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<TodoResponse>, callback?: grpc_1.requestCallback<TodoResponse>): grpc_1.ClientUnaryCall => {
            return super.GetTodo(message, metadata, options, callback);
        };
        UpdateTodo: GrpcUnaryServiceInterface<UpdateTodoRequest, TodoResponse> = (message: UpdateTodoRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<TodoResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<TodoResponse>, callback?: grpc_1.requestCallback<TodoResponse>): grpc_1.ClientUnaryCall => {
            return super.UpdateTodo(message, metadata, options, callback);
        };
        DeleteTodo: GrpcUnaryServiceInterface<DeleteTodoRequest, TodoResponse> = (message: DeleteTodoRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<TodoResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<TodoResponse>, callback?: grpc_1.requestCallback<TodoResponse>): grpc_1.ClientUnaryCall => {
            return super.DeleteTodo(message, metadata, options, callback);
        };
        StreamTodos: GrpcChunkServiceInterface<GetTodosRequest, TodosResponse> = (metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<GetTodosRequest, TodosResponse> => {
            return super.StreamTodos(metadata, options);
        };
    }
}

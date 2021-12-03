"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Hello World!');
}));
app.get('/users', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsers();
    res.json({ users });
}));
app.get('/posts', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield getPosts();
    res.json({ posts });
}));
app.get('/todos', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield getTodos();
    res.json({ todos });
}));
app.get('/todos/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const todo = yield getTodo(parseInt(id));
    console.log(todo.completed);
    res.json({ todo });
}));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get('https://jsonplaceholder.typicode.com/users');
        const users = result.data;
        return users || [];
    }
    catch (error) {
        throw new Error('Users not found');
    }
});
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get('https://jsonplaceholder.typicode.com/posts');
        const posts = result.data;
        return posts || [];
    }
    catch (error) {
        throw new Error('Posts not found');
    }
});
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get('https://jsonplaceholder.typicode.com/todos');
        const todos = result.data;
        return todos || [];
    }
    catch (error) {
        throw new Error('Todos not found');
    }
});
const getTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const todo = result.data;
        return todo;
    }
    catch (er) {
        throw new Error('Todo not found');
    }
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

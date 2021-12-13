import express, { Application, Request, Response, NextFunction } from 'express';
import axios from 'axios';
const app: Application = express();
import { Schema, model, connect } from "mongoose";

import { User } from './models/user';


app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!');
})

app.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUsers()
    res.json({ users });
})

app.get('/posts', async (req: Request, res: Response, next: NextFunction) => {
    const posts = await getPosts()
    res.json({ posts });
})
app.get('/todos', async (req: Request, res: Response, next: NextFunction) => {
    const todos = await getTodos()
    res.json({ todos });
})
app.get('/todos/:id', async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const todo = await getTodo(parseInt(id));
    console.log(todo.completed)
    res.json({ todo });
})



type user = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    },
}

type post = {
    userId: number,
    id: number,
    title: string,
    body: string
}
type todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}



const getUsers = async (): Promise<Array<user>> => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users: Array<user> | undefined = result.data;
        return users || [];

    } catch (error) {
        throw new Error('Users not found')
    }
}

const getPosts = async (): Promise<Array<post>> => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const posts: Array<post> | undefined = result.data
        return posts || [];
    } catch (error) {
        throw new Error('Posts not found')
    }
}

const getTodos = async (): Promise<Array<todo>> => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const todos: Array<todo> | undefined = result.data
        return todos || [];
    } catch (error) {
        throw new Error('Todos not found')
    }
}

const getTodo = async (id: number): Promise<todo> => {
    try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const todo: todo = result.data
        return todo
    }
    catch (er) {
        throw new Error('Todo not found')
    }
}


app.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;
    User.findOne({ username, email, password })
})


app.listen(3000, async () => {
    await connect('mongodb://localhost/express-ts')
    console.log('Server started on port 3000');
});
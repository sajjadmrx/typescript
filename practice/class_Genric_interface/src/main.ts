import axios from 'axios';
// api get User : https://jsonplaceholder.typicode.com/users

// for example
const dbUrl: string = 'https://jsonplaceholder.typicode.com/users';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

interface IDbMethods {
    save: <T extends object>(data: T) => T;
    ping: () => number;
}

const users: User[] = [];

class dbMethods implements IDbMethods {
    ping(): number {
        return Math.floor(Math.random() * 100);
    }
    save<T extends object>(data: T): T {
        let item: User = data as User;

        users.push(item);
        return data;
    }

}

class UserService extends dbMethods {

    // function overloading
    async find(name: string): Promise<User[]>
    async find(): Promise<User[]>
    async find(name?: string): Promise<User[]> {
        if (name) {

            return await axios.get(`${dbUrl}?name=${name}`).then(res => res.data);
        }
        else {
            const results = await axios.get(dbUrl)
            const data: User[] = results.data;
            return data;
        }



    }



    async findById(id: number): Promise<User> {
        const results = await axios.get(`${dbUrl}/${id}`);
        const user: User = results.data;

        return user
    }

}




async function app() {
    const x = await new UserService().find()
    const user = await new UserService().findById(x[0].id)
    console.log(user);

}

app()
import { Schema, model, connect } from "mongoose";



interface User {
    name: string;
    password: string;
    email: string;
    role: string
}

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, default: 'user' }
})

export const User = model<User>('User', userSchema);

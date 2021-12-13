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
const axios_1 = __importDefault(require("axios"));
// api get User : https://jsonplaceholder.typicode.com/users
// for example
const dbUrl = 'https://jsonplaceholder.typicode.com/users';
const users = [];
class dbMethods {
    save(data) {
        users.push(data);
    }
}
class UserService extends dbMethods {
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield axios_1.default.get(dbUrl);
            const data = results.data;
            return data;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield axios_1.default.get(`${dbUrl}/${id}`);
            const user = results.data;
            return user;
        });
    }
}
function app() {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield new UserService().find();
        const user = yield new UserService().findById(x[0].id);
        console.log(user);
    });
}
app();

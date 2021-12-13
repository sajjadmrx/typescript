interface todo {
    name: string;
    state: string;
}

enum TodoState {
    New,
    Active,
    Complete,
    Delete,
}

class SmartTodo {
    name: string;
    private _state: TodoState = TodoState.New;
    constructor(name: string) {
        this.name = name;
    }

    get state(): TodoState {
        return this._state
    }

    set state(state: TodoState) {
        this._state = state;
    }
}

const todo1 = new SmartTodo('TypeScript');
console.log(todo1.state)
todo1.state = TodoState.Complete
console.log(todo1.state)
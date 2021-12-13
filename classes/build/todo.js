"use strict";
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Complete"] = 2] = "Complete";
    TodoState[TodoState["Delete"] = 3] = "Delete";
})(TodoState || (TodoState = {}));
var SmartTodo = /** @class */ (function () {
    function SmartTodo(name) {
        this._state = TodoState.New;
        this.name = name;
    }
    Object.defineProperty(SmartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    return SmartTodo;
}());
var todo1 = new SmartTodo('TypeScript');
console.log(todo1.state);
todo1.state = TodoState.Complete;
console.log(todo1.state);

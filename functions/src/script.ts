// function sum(x: number, y: number): number {

//     return x + y
// }

// console.log(sum(2, 3)) // 5



// let sum: (x: number, y: number) => number // set Type

// sum = function (x, y) {
//     return x + y
// }


// console.log(sum(1, 2)) // 3


function sum(x: number, ...numbers: number[]) {
    return numbers.map(n => n + x)
}

console.log(sum(10, 1, 2, 3, 4, 5, 6)) // [11, 12, 13, 14, 15, 16]



function loger(...data: string[] | number[]): void {
    console.log(data.join(','))
}
loger('A', 'B', 'C', "D", "B", "A")
loger(1, 2, 3, 4, 5, 6, 7, 8)

function logerPluse(...data: any[]) {
    console.log(data)
}

logerPluse('A', 2, { name: 'Sajjad' }, [30, 40], 10, 'W')



function getUsers(userId?: number): any { // ? means optional
    const users: any[] = [{ name: 'sajjad', id: 10 }, { name: 'ali', id: 20 }]
    if (userId) {
        return users.filter(user => user.id == userId)
    } else {
        return users
    }

}

const users = getUsers()
const user: any = getUsers(10)
logerPluse(users, user)
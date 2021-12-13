class KayValuePair<K, V>{
    constructor(public key: K, public value: V) { }
}
let pair1 = new KayValuePair(1, 'one');
let pair2 = new KayValuePair<string, number>("Sajjad", 19)
let pair3 = new KayValuePair<string, Date>("Sajjad", new Date())
let pair4 = new KayValuePair<any[], number>(["Salam", 19, { key: "its", value: "Oky!" }], 1)



function test() {
    return new Promise((resolve, reject) => {
        resolve(1);
    })
}

type Person = {
    name: string,
    age: number
}


let pair5 = new KayValuePair<Promise<any>, number>(test(), 1)
let pair6 = new KayValuePair<Person, string>({ name: "Sajjad", age: 19 }, "Sajjad")


console.log(pair6.key, pair6.value);

let fullname = getFullname("sajjad")

console.log(fullname); // log undefined

let fullname2: string = getFullname_2("sajjad")

console.log(fullname2); // log string

function getFullname(name: string): void { // no return
    console.log(name);
}

function getFullname_2(name: string): string { // return 
    return name;
}
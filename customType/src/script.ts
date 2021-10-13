type person = {
    firstname: string,
    lastname: string,
    age: number,
    address: {
        street: string,
        city: string,
    },
    getFullname: () => string,
    getAddress: () => string,
}

let jack: person = {
    firstname: 'jack',
    lastname: 'jones',
    age: 19,
    address: {
        street: '123 main st',
        city: 'boston',
    },
    getFullname: function () {
        return this.firstname + ` ` + this.lastname;
    },
    getAddress: function () {
        return this.address.street + ` ` + this.address.city;
    }
}


console.log(jack)
console.log(jack.getFullname())
console.log(jack.getAddress())

type username = string

type user = {
    id: string,
    username: username,
    email: string,
    password: string,
    followers: string[],
    following: string[],
    avatar: string,
    isVerified: boolean,
    isAdmin: boolean,
    isBanned: boolean,

    getCountFollowers: () => number,

}
const userId: string = "51565aw1d561sa5158wa4ds1daw"
let user1: user = {
    id: userId,
    username: 'sajjadmrx',
    email: 'sajjadmrx@gmail.com',
    password: '123456',
    followers: ['1111111111', '222222222'],
    following: ['3333333333', '4444444444'],
    avatar: `/uploads/avatars/${userId}`,
    isVerified: true,
    isAdmin: false,
    isBanned: false,
    getCountFollowers: function () {
        return this.followers.length;
    }
}

console.log(user1)
console.log(user1.getCountFollowers())


type post = {
    postId: string,
    author: user | string,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    comments: string[], // commentId
    likes: string[] | user[], // user
    isPublished: boolean,
}

const post1: post = {
    postId: '5999_weq6sad1d561sa5158wa4ds1daw',
    author: user1,
    title: 'this is title',
    content: 'this is content',
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: ['1111111111', '222222222'],
    likes: [user1],
    isPublished: true,
}

const post2: post = {
    postId: '7781_asei9rf9sd7f3w098fsd7y8errew',
    author: '111gmfdigj8sdjfi3ru3r43e2',
    title: 'this is title',
    content: 'this is content',
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: ['333333333', '444444'],
    likes: ['111gmfdigj8sdjfi3ru3r43e2', '51565aw1d561sa5158wa4ds1daw'],
    isPublished: false
}

console.log(post1)
console.log(post2)
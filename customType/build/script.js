"use strict";
var jack = {
    firstname: 'jack',
    lastname: 'jones',
    age: 19,
    address: {
        street: '123 main st',
        city: 'boston',
    },
    getFullname: function () {
        return this.firstname + " " + this.lastname;
    },
    getAddress: function () {
        return this.address.street + " " + this.address.city;
    }
};
console.log(jack);
console.log(jack.getFullname());
console.log(jack.getAddress());
var userId = "51565aw1d561sa5158wa4ds1daw";
var user1 = {
    id: userId,
    username: 'sajjadmrx',
    email: 'sajjadmrx@gmail.com',
    password: '123456',
    followers: ['1111111111', '222222222'],
    following: ['3333333333', '4444444444'],
    avatar: "/uploads/avatars/" + userId,
    isVerified: true,
    isAdmin: false,
    isBanned: false,
    getCountFollowers: function () {
        return this.followers.length;
    }
};
console.log(user1);
console.log(user1.getCountFollowers());
var post1 = {
    postId: '5999_weq6sad1d561sa5158wa4ds1daw',
    author: user1,
    title: 'this is title',
    content: 'this is content',
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: ['1111111111', '222222222'],
    likes: [user1],
    isPublished: true,
};
var post2 = {
    postId: '7781_asei9rf9sd7f3w098fsd7y8errew',
    author: '111gmfdigj8sdjfi3ru3r43e2',
    title: 'this is title',
    content: 'this is content',
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: ['333333333', '444444'],
    likes: ['111gmfdigj8sdjfi3ru3r43e2', '51565aw1d561sa5158wa4ds1daw'],
    isPublished: false
};
console.log(post1);
console.log(post2);

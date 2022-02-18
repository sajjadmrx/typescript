
namespace DecoratorEx1 {

  function auth<T extends { new(...args: any[]): {} }>(constructor: T) {

    return class w extends constructor {
      auth = false;

    }


  }


  @auth
  class User {


    constructor(public name: string) { }

  }

  let user = new User('sajjad');
  console.log(user, User);
  let user2 = new User('ali');

}

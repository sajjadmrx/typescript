
namespace DecoratorEx4 {

  function authFactory(isAuth: boolean) {
    return function auth<T extends { new(...args: any[]): {} }>(constructor: T) {
      return class extends constructor {
        auth = isAuth
      }
    }
  }

  @authFactory(true)
  class User {
    name = 'Sajjad'
  }

  const user = new User();
  console.log(user)

}


// function user() {
//   return function sayHello(name: string) {
//     return 'Hello' + name
//   }
// }

// console.log(user()('Sajjad'))
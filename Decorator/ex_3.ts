
namespace DecoratorEx3 {

  function first<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log('I am first decorator');
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
    }
  }

  function secound<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log("I am secound decorator");
    return class extends constructor {
      hello = 'override again';


    }
  }

  @secound
  @first
  class User {
    name = 'sajjad';
  }


  const user = new User();
  console.log(user);


}
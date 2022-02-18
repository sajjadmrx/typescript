namespace DecoratorEx1 {

  function auth(params: any) {

    params.prototype.name = '123';
    params.prototype.age = '123';
    params.prototype.isAuth = true;
  }

  @auth
  class Person {
    name = 'Max';
  }

  console.log(Person.prototype)

}
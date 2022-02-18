
namespace DecoratorEx5 {

  function changeAble(value: boolean) {
    return function (target: any, properyKey: string, descriptor: PropertyDescriptor) {
      descriptor.writable = value
    }
  }


  class User {
    private name = 'sajjad';
    private family = 'isvand';

    @changeAble(false)
    getFirstName() {
      return this.name
    }

    @changeAble(true)
    getAndSetFamily() {
      return this.family
    }

  }

  const user = new User()

  user.getAndSetFamily = (): string => {
    return "mrx"
  }

  console.log(user.getFirstName(), user.getAndSetFamily())

}


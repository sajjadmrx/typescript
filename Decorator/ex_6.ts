
namespace DecoratorEx6 {
  // factory
  function Emoji() {
    return function (target: any, key: string | symbol) {

      let val = target[key];


      Object.defineProperty(target, key, {
        get: () => val,
        set: (newVal) => {
          val = `🍦 ${newVal} 🍦`;
        },
        configurable: true,
        enumerable: true
      })

    }
  }

  class IceCream {
    @Emoji()
    flover = 'vanilla'
  }

  const ice = new IceCream()
  console.log(ice.flover)
}


(function () {

  let MersenneTwister = require('mersenne-twister'),
  generator = new MersenneTwister();

  Object.defineProperty(window, 'new_title', {

    set(val) {
      value = generator.random() > 0.9 ? "WOLOLO" : val;
      document.title = val;
    },

    get(val){
      return document.title

    }
  })
})()

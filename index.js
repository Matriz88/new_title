(function () {

    // USING MERSENNETWISTER TO GENERATE A CONSISTENT RANDOM REAL
    let MersenneTwister = require('mersenne-twister'),
    generator = new MersenneTwister();

    Object.defineProperty(window, 'new_title', {
        set(val) {

            generator.random() > 0.8 
            ? (value = val)
            : (value = "WOLOLO")

            document.title = value            
        }
    })
})()
// Create a simple function that returns "Hello World" when called.

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
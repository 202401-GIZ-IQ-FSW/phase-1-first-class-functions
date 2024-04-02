function receivesAFunction(callback) {
    return callback();
  }
  
  function returnsANamedFunction() {
    return namedFunction;
  }
  
  function namedFunction() {
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
    
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  
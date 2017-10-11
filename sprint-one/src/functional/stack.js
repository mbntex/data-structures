var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    counter += 1;
    storage[counter] = value;
    // console.log('COUNTER = ', counter);
    // console.log(storage);
  };

  someInstance.pop = function() {
    if (counter > 0) {
      var holdAfterDeleted = storage[counter];
      delete storage[counter];
      // console.log(storage);
      counter -= 1;
      return holdAfterDeleted;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};






// var Stack = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below
//   someInstance.push = function(value) {
//   };

//   someInstance.pop = function() {
//   };

//   someInstance.size = function() {
//   };

//   return someInstance;
// };

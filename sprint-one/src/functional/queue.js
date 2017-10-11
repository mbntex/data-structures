var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter += 1;
    sotrage[counter] = value;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
  };

  return someInstance;
};

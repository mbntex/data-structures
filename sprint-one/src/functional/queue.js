var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter += 1;
    storage[counter] = value;
    console.log(storage);
  };

  someInstance.dequeue = function() {
    var deletedItem = storage[1];
    delete storage[1];
    counter -= 1;
    console.log('PRE K Rename = ', storage);
    for (var k in storage) {
      // k = k - 1;
      var r = Number(k) - 1;
      storage[r] = storage[k]; 
      console.log('run');
    }
    console.log('POST K Rename =', storage);
    return deletedItem;
    
    
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};




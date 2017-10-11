var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // counter variable
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // increment up the counter
    counter += 1;
    // adding to storage the key value pair of counter : value;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      // save storage value 1 as a temp variable in case needed
      var recentlyRemoved = storage[1];
      // removing storage value 1
      delete storage[1];
      for (var key in storage) {
        // rekey keys to be k - 1 for the same data
        var r = Number(key) - 1;
        storage[r] = storage[key];
        // delete currently incremented key
        delete storage[key];
      
      }
      //reduce counter
      counter -= 1;
      //return recently removed
      return recentlyRemoved;
    }
  };

  someInstance.size = function() {
    //return counter value
    return counter;
  };

  return someInstance;
};

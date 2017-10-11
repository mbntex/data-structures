var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create counter
  var amazingCounter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //increase counter
    amazingCounter += 1;
    //add the value to the storage object as a key value pair of counter : value
    storage[amazingCounter] = value;
  };

  someInstance.pop = function() {
    //check in case more removes than added
    if (amazingCounter > 0) {
      //save the last item as a temp variable
      var recentlyRemoved = storage[amazingCounter];
      //remove the item that is the last item in
      delete storage[amazingCounter];
      //reduce counter
      amazingCounter -= 1;
      //return temp variable
      return recentlyRemoved;
    }
  };

  someInstance.size = function() {
    //return counter value
    return amazingCounter;
  };

  return someInstance;
};

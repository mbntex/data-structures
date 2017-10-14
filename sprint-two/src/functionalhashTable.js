

var HashTable = function() {
  var obj = {};
  obj._limit = 8;
  obj.insert = hashMethods.insert;
  obj.retrieve = hashMethods.retrieve;
  obj.remove = hashMethods.remove;
  obj._storage = LimitedArray(obj._limit);  
  return obj;
};
var hashMethods = {};
hashMethods.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, obj._limit);
  var matched = false;
  if (obj._storage[index] === undefined || obj._storage[index].length === 0) {
    obj._storage[index] = [];
    obj._storage[index].push([k, v]);
  } else {
    for (var i = 0; i < obj._storage[index].length; i++) {
      if (obj._storage[index][i][0] === k) {
        matched = true;
        obj._storage[index][i] = [k, v];
      } 
    }
    if (!matched) {
      obj._storage[index].push([k, v]);
    }
  }
   
};

hashMethods.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, obj._limit);
  if (obj._storage[index].length === 0 || obj._storage[index] === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < obj._storage[index].length; i++) {
      if (obj._storage[index][i][0] === k) {
        return obj._storage[index][i][1];
      } 
    } 
  }
};

hashMethods.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, obj._limit);
  for (var i = 0; i < obj._storage[index].length; i++) {
    if (obj._storage[index][i][0] === k) {
      obj._storage[index].splice(i, 1);
    }
  }
  
};



/*
  insert = constant;
  retrieve = constant;
  remove = constant;
  * noting that with collisions you do get some linear searches, but relative to the dataset they are small.
 */



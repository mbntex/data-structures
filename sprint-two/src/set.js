var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
  
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
  add = constant;
  contains = constant; *researched and we are assuming that .hasOwnProperty does not require an iteration through the object keys of the set;
  remove = constant;
 */

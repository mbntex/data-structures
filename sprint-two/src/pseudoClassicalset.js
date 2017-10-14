var Set = function() {
  this._storage = {}; 
};

Set.prototype.add = function(item) {
  this._storage[item] = item; 
};

Set.prototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

Set.prototype.remove = function(item) {
  delete this._storage[item];
};

Set.prototype.forEach = function(cb) {
  for (var k in this._storage) {
    cb(this._storage[k]);
  }
};

/*
  add = constant;
  contains = constant; *researched and we are assuming that .hasOwnProperty does not require an iteration through the object keys of the set;
  remove = constant;
 */

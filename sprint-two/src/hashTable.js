

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var matched = false;
  if (this._storage[index] === undefined || this._storage[index].length === 0) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        matched = true;
        this._storage[index][i] = [k, v];
      } 
    }
    if (!matched) {
      this._storage[index].push([k, v]);
    }
  }
   
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index].length === 0 || this._storage[index] === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      } 
    } 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



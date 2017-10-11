var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(val) {
  this.counter += 1;
  this.storage[this.counter] = val;
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter -= 1;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.counter;
};



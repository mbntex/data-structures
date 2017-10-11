var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.counter = 0;
  return obj;
};

var queueMethods = {
  enqueue: function(val) {
    this.counter += 1;
    this.storage[this.counter] = val;
  },
  
  dequeue: function() {
    if (this.counter > 0) {
      var temp = this.storage[1];
      delete this.storage[1];
      for (var k in this.storage) {
        var r = k - 1;
        this.storage[r] = this.storage[k];
        delete this.storage[k];
      }
      this.counter -= 1;
      return temp;
    }
  },

  size: function() {
    return this.counter;
  }
};



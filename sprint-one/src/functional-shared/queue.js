var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.storage = {};
  //methods here
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;
  return obj;
};

var queueMethods = {
  enqueue: function(item) {
    this.counter += 1;
    this.storage[this.counter] = item;
    console.log(this.storage);
  },
  dequeue: function() {
    if (this.counter > 0) {
      var temp = this.storage[1];
      delete this.storage[1];
      for (k in this.storage) {
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



var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.counter = 0;
  // obj.storage = stackMethods.storage;
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;
  //obj.crazy = stackMethods.crazy;
  return obj;
};

var stackMethods = {
  //push
  push: function(item) {
    //console.log('THIS =', this);
    this.counter += 1;
    this.storage[this.counter] = item;
    console.log(this.storage);
  },
  //pop 
  pop: function() {
    if (this.counter > 0) {
      var temp = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter -= 1;
      console.log(this.storage);
      return temp;
    } 
  },
  //size
  size: function() {
    return this.counter;
  }
};



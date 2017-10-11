var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.counter = 0;
  return obj;
};

// //push
// Stack.prototype.push = function(val) {
//   this.counter += 1;
//   this.storage[this.counter] = val;
//   console.log(this.storage);
// };
// //pop
// Stack.prototype.pop = function() {
//   if (this.counter > 0) {
//     var temp = this.storage[this.counter];
//     delete this.storage[this.counter];
//     this.counter -= 1;
//     console.log(this.storage);
//     return temp;
//   }
// };
// //size
// Stack.prototype.size = function () {
//   return this.counter;
// };

var stackMethods = {

  push: function(val) {
    this.counter += 1;
    this.storage[this.counter] = val;
    console.log(this.storage);
  },

  pop: function() {
    if (this.counter > 0) {
      var temp = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter -= 1;
      console.log(this.storage);
      return temp;
    }
  },

  size: function () {
    return this.counter;
  }

};
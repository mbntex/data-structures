var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value; 
  obj.left = null;
  obj.right = null; 
  obj.insert = Binarymethods.insert;
  obj.contains = Binarymethods.contains;
  obj.depthFirstLog = Binarymethods.depthFirstLog;
  return obj;
};

var Binarymethods = {};
Binarymethods.insert = function(val) {
  var currentNode = new BinarySearchTree(val);
  if (val >= this.value && this.right === null) {
    this.right = currentNode;
    return;
  }
  if (val < this.value && this.left === null) {
    this.left = currentNode;
    return;
  }
  if (val >= this.value && this.right !== null) {
    this.right.insert(val);
  }
  if (val < this.value && this.left !== null) {
    this.left.insert(val);
  }
};

Binarymethods.contains = function(target) {
  var parseTree = function(node) {
    if (node.value === target) {
      return true;
    } else {
      if (node.value > target && node.left) {
        return parseTree(node.left);
      } else if (node.value < target && node.right) {
        return parseTree(node.right);
      }
    }
  };
  return parseTree(this) || false;
};

Binarymethods.depthFirstLog = function(cb) {
  //cb on current
  cb(this.value);
  //check if left null
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

var BinarySearchTree = function(value) {
  this.value = value; 
  this.left = null;
  this.right = null; 
};


BinarySearchTree.prototype.insert = function(val) {
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

BinarySearchTree.prototype.contains = function(target) {
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

BinarySearchTree.prototype.depthFirstLog = function(cb) {
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
  insert = logarithmic;
  contains = logarithmic;
  depthFirstLog = linear;
 */

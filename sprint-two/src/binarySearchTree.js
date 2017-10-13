var BinarySearchTree = function(value) {
  this.value = value; 
  this.left = null;
  this.right = null; 
};

BinarySearchTree.prototype.insert = function(val) {
  var currentNode = new BinarySearchTree(val);
  if (val >= this.value && this.right === null) {
    this.right = currentNode;
  }
  if (val < this.value && this.left === null) {
    this.left = currentNode;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

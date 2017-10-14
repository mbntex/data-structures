var Tree = function(value) {
  this.value = value;
  this.children = [];  
  this.counter = 0; 
};


Tree.prototype.addChild = function(value) {
  this.counter ++;
  var newNode = new Tree(value);
  this.children.push(newNode);
  return newNode;
};

Tree.prototype.size = function() {
  return this.counter;
};

Tree.prototype.contains = function(target) {
  /// boolean true or false
  var result = false;
  var parseTree = function(node) {
    if (node.value === target) {
      result = true;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        parseTree(node.children[i]);
      }
    }
  };
  parseTree(this);
  return result;
  
};



/*
addChild = constant, because with this implementation we have to be at the corect position in the tree to add the new varialbe.
i.e. var tree = myTree.add(5);
var treeBranch = tree.add(5);
contains = linear;
 */

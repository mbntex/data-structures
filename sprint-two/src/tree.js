var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
  return newNode;
};

treeMethods.contains = function(target) {
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

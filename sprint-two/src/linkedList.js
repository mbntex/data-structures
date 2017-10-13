var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var currentNode = Node(value);
    if (list.head === null) {
      list.head = currentNode;
      list.tail = currentNode;
    } else {
      list.tail.next = currentNode;
      list.tail = currentNode;
    }
    
  };

  list.removeHead = function() {
    var valueHere = list.head.value;
    list.head = list.head.next;
    return valueHere;
  };

  list.contains = function(target) {
    var wasFound = false;
    var currentSearched = list.head;
    

    //as long as the next is not null, you need to...
    while (currentSearched.next !== null && currentSearched !== list.tail) {
      //check if value = target
      if (currentSearched.value === target) {
        wasFound = true;
      }
      //if not, change variable to next and repeat
      currentSearched = currentSearched.next;      
    }
    if (list.tail.value === target) {
      wasFound = true;
    }
    return wasFound;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
  addToTail = constant;
  removeHead = constant;
  contains = linear;
 */

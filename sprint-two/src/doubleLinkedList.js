var LinkedList = function() {
  //var list = {};
  this.head = null;
  this.tail = null;
  this.counter = 0;
};


LinkedList.prototype.addToTail = function(value) {
  var currentNode = new Node(value);
  this.counter ++;
  var oldTail = JSON.stringify(this.tail); 
  //var oldTail = this.tail; 
  if (this.head === null) {
    this.head = currentNode;
    this.tail = currentNode;
  } else {
    this.tail.next = currentNode;
    this.tail = currentNode;
  }
  if (this.head !== null) {
   currentNode.previous = JSON.parse(oldTail);
   //currentNode.previous = oldTail;
  }
};

LinkedList.prototype.parent = function (node) {
  if (node.previous === null) {
    return null;
  } else {
    return node.previous;
  }
};

LinkedList.prototype.removeFromParent = function (node) {
  var oldNext = node.next;
  node.next.previous = node.previous;
  node.previous.next = oldNext;
};

LinkedList.prototype.addToHead = function (value) {
  var currentNode = new Node (value);
  this.head.previous = currentNode;
  currentNode.next = this.head;
  this.head = currentNode;
  var thing = this;
  //console.log('NOW = ', JSON.stringify(currentNode.next));
  console.log('NOW = ', JSON.stringify(this.head.previous));
};



LinkedList.prototype.removeHead = function() {
  this.counter --;
  var valueHere = this.head.value;
  this.head = this.head.next;
  return valueHere;
};

LinkedList.prototype.lengthCheck = function() {
  return this.counter;
};

LinkedList.prototype.contains = function(target) {
  var wasFound = false;
  var currentSearched = this.head;
  

  //as long as the next is not null, you need to...
  while (currentSearched.next !== null && currentSearched !== this.tail) {
    //check if value = target
    if (currentSearched.value === target) {
      wasFound = true;
    }
    //if not, change variable to next and repeat
    currentSearched = currentSearched.next;      
  }
  if (this.tail.value === target) {
    wasFound = true;
  }
  return wasFound;
};


var Node = function(value) {
  //var node = ;

  this.value = value;
  this.next = null;
  this.previous = null;

  //return node;
};

/*
  addToTail = constant;
  removeHead = constant;
  contains = linear;
 */
 
 
 var myDoubleList = new LinkedList();
 myDoubleList.addToTail(1);
 myDoubleList.addToTail(2);
 //myDoubleList.addToTail(3);
 //console.log(myDoubleList);

myDoubleList.addToHead(100);
console.log(myDoubleList);
 
 console.log('ANSWER = ', myDoubleList.parent());
 
 
 
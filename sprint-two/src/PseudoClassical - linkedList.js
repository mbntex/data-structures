var LinkedList = function() {
  //var list = {};
  this.head = null;
  this.tail = null;
  this.counter = 0;

 
 
};


LinkedList.prototype.addToTail = function(value) {
  var currentNode = new Node(value);
  this.counter ++;
  if (this.head === null) {
    this.head = currentNode;
    this.tail = currentNode;
  } else {
    this.tail.next = currentNode;
    this.tail = currentNode;
  }
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

  //return node;
};

/*
  addToTail = constant;
  removeHead = constant;
  contains = linear;
 */
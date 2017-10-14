

// Instantiate a new graph
var Graph = function() {
  var obj = {};
  Graph.counter = 0;
  obj.addNode = graphMethods.addNode;
  obj.contains = graphMethods.contains;
  obj.deleteEdges = graphMethods.deleteEdges;
  obj.removeNode = graphMethods.removeNode;
  obj.hasEdge = graphMethods.hasEdge;
  obj.addEdge = graphMethods.addEdge;
  obj.removeEdge = graphMethods.removeEdge;
  return obj;
};

var graphMethods = {};

// Add a node to the graph, passing in the node's value.
graphMethods.addNode = function(node) {
  var myNode = {};
  myNode.value = node;
  myNode.edges = [];
  this[Graph.counter] = myNode;
  Graph.counter += 1;  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
graphMethods.contains = function(node) {
  for (var key in this) {
    if (!isNaN(key)) {
      if (this[key].value === node) {
        return true;
      }
    }    
  }
  return false;
};

graphMethods.deleteEdges = function() {
  for (var key in this) {
    if (!isNaN(key)) {
      this[key].edges.length = 0;
    }    
  }
};

// Removes a node from the graph.
graphMethods.removeNode = function(node) {
  for (var key in this) {
    if (!isNaN(key) && this[key].value !== node) {
      if (this[key].edges.length > 0) {
        for (var i = 0; i < this[key].edges.length; i++) {
          if (this[key].edges[i] === node) {
            this[key].edges.splice(i, 1);
          }
        }
      }
    }  
    if (!isNaN(key) && (this[key].value === node) ) {
      delete this[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
graphMethods.hasEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (!isNaN(key)) {
      if (this[key].value === fromNode) {
        if (this[key].edges.includes(toNode)) {
          return true;
        }
      }
    }    
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
graphMethods.addEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (!isNaN(key)) {
      if (this[key].value === fromNode) {
        this[key].edges.push(toNode);
      }
      if (this[key].value === toNode) {
        this[key].edges.push(fromNode);
      }
    }    
  }
 
};

// Remove an edge between any two specified (by value) nodes.
graphMethods.removeEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (!isNaN(key)) {
      if (this[key].value === fromNode) {
        for (var i = 0; i < this[key].edges.length; i++) {
          if (this[key].edges[i] === toNode) {
            this[key].edges.splice(i, 1);            
          }
        }
      }
      if (this[key].value === toNode) {
        for (var j = 0; j < this[key].edges.length; j++) {
          if (this[key].edges[j] === fromNode) {
            this[key].edges.splice(j, 1);            
          }
        }
      }
    }    
  }
  
};

// Pass in a callback which will be executed on each node of the graph.
graphMethods.forEachNode = function(cb) {
  for (var k in this) {
    if (!isNaN(k)) {
      cb(this[k].value);
    }
  }
};

/*
  addNode = constant; (because objects, which we use here for the graph are like hash tables :)  )
  contains = linear, beacuse we are using sequential keys and iterating them, not a direct lookup based on key being the value which stops dupliucatee keys
  removeNode = Quadratic, because we iterate the search as a loop and if there were a high number of edges the removal would be a nested loop. 
  hasEdge = linear because we looped our search to check;
  removeEdge = Quadratic, because we iterate the search as a loop and if there were a high number of edges the removal would be a nested loop.
  forEachNode = linear;
 */



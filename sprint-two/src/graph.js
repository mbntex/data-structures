

// Instantiate a new graph
var Graph = function() {
  Graph.counter = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var myNode = {};
  myNode.value = node;
  myNode.edges = [];
  this[Graph.counter] = myNode;
  Graph.counter += 1;  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (!isNaN(key)) {
      if (this[key].value === node) {
        return true;
      }
    }    
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
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
Graph.prototype.hasEdge = function(fromNode, toNode) {
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
Graph.prototype.addEdge = function(fromNode, toNode) {
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
Graph.prototype.removeEdge = function(fromNode, toNode) {
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
Graph.prototype.forEachNode = function(cb) {
  for (var k in this) {
    if (!isNaN(k)) {
      cb(this[k].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



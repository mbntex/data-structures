describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it(' IT SHOULD ITERATE A SET WITH A CALLBACK function', function() {
    var array = [];
    var fn = function(item) { array.push(item.toUpperCase()); };
    set.add('Mel Gibson');
    set.add('Meredith Geebson');
    set.add('Melon Grubson');
    set.add('Melanie Gabson');
    set.forEach(fn);
    expect(array).to.eql(['MEL GIBSON', 'MEREDITH GEEBSON', 'MELON GRUBSON', 'MELANIE GABSON' ]);
  });

});



// it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
//     var array = [];
//     var func = function(value) { array.push(value); };
//     binarySearchTree.insert(2);
//     binarySearchTree.insert(3);
//     binarySearchTree.insert(7);
//     binarySearchTree.depthFirstLog(func);
//     expect(array).to.eql([5, 2, 3, 7]);
//   });

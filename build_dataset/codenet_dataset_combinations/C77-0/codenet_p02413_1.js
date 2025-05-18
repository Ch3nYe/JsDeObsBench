'use strict';
(function(stdin) {
  //declare function
  function sumLine(a, b) {
    return a + b;
  }

  function result(matrix) {
    var size = matrix.shift();
    matrix.map(function(v) {
      return v.push(v.reduce(sumLine));
    });
    var sumColumn = [];
    for (var i = 0; i < size[1] + 1; i++) {
      var sumValue = 0;
      for (var j = 0; j < size[0]; j++) {
        sumValue += matrix[j][i];
      }
      sumColumn.push(sumValue);
    }
    matrix.push(sumColumn);
    return matrix.join('\n').replace(/,/g, ' ');
  }
  //declare variable
  var inputs = stdin.toString().trim().split('\n');
  var sheet = inputs.map(function(v) {
    return v.split(' ').map(Number);
  });
  //main

  //display
  console.log(result(sheet));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
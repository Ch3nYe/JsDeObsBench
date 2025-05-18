'use strict';
(function(stdin) {
  var lines  = stdin.toString();
  var re = /\w+\n[\w\s]*?\n/g;
  var result = (function(data) {

    return data.map(stdev).join('\n');

    function stdev(scores) {
      var count = scores.length;
      var mean  = scores.reduce(sum) / count;

      return Math.sqrt(scores.map(function(v) {
          return Math.pow(v - mean,2);
        })
        .reduce(sum) / count).toFixed(8);
    }

    function sum(a,b) {
      return a + b;
    }
  }(lines.match(re).map(function(v) {
      return v.split('\n')[1].split(' ')
        .slice(0,v.split('\n')[0]).map(Number);
   })
  ));
  console.log(result);
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
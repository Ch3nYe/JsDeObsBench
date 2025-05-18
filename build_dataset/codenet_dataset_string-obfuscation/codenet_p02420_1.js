'use strict';
(function(stdin) {
  var lines  = stdin.toString();
  var re = /[A-Za-z]+\n([1-9][0-9]*\n)+/g;
  var result = (function(data) {
    return data
      .map(function(v) {
        return v.slice(- v[1])
          .map(Number)
          .reduce(function(str,num) {
            return str.slice(num) + str.slice(0,num);
          },v[0]);
      }).join('\n');
  }(lines.match(re).map(function(v){return v.trim().split('\n');})
  ));
  console.log(result);
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
'use strict';
(function(stdin) {
  var lines = stdin.toString().split('\n');

  var result = (function(word,data) {
    return data.filter(function(v) {
      return v === word;
    }).length;
  }(
    lines.shift().toLowerCase()
    ,lines.join('').split('END_OF_TEXT')[0].toLowerCase().trim().split(' ')
  ));
  console.log(result);
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
'use strict';
(function(stdin) {
  var lines  = stdin.toString().split('\n');
  var result = (function(data) {
    return new Deck().filter(function(v) {
      return this.indexOf(v) === -1;
    },data).join('\n');

    function Deck() {
      var deck = [];
      ['S','H','C','D'].forEach(function(v) { 
        for (var i = 0; i < 13;i++)
          deck.push([v,i + 1].join(' '));
      });
      return deck;
    }
  }(lines.slice(0,lines.shift())
    ));

  if(result.length !== 0) console.log(result);
  
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
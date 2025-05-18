function main() {
  var input = getInput();
  var ls = input.split('\n');

  var n = parseInt(ls[0])
  var nums = ls.slice(1, n+1).map(function(s) {
    return parseInt(s);
  })
  
  console.log(lis(nums))
}

function lis(xs) {
  var table = [xs[0]];
  for (var i = 1; i < xs.length; i++) {
    var x = xs[i];
    table[search(table, x) + 1] = x;
  }
  return table.length;
}
 

/**
 * Returns i s.t. table[i] < x && x <= table[i+1]
 */
function search(table, x) {
  var l = 0, h = table.length;
  
  if (table.length == 0 || x <= table[0]) {
    return -1;
  }
  
  while (l + 1 < h) {
    var pivot = (l + h + 1) / 2;
    if (table[pivot] < x) {
      l = pivot;
    } else {
      h = pivot;
    }
  }
  return l;
}

nodeJS = typeof require != 'undefined';

function getInput() {
  if (!nodeJS) {
    return document.getElementById('input').value
  }
  return require('fs').readFileSync('/dev/stdin').toString();
}

if (nodeJS) {
  main()
}
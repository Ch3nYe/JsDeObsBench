(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var n = Number(p.shift());
  for (var i = 0; i < n; i++) {
    console.log(conv(p.shift()));
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function conv(s) {
  a = s.split(' ');
  for (var i = 0; i < a.length; i++) {
    var r = check(a[i]);
    if (r) {
      return conv_(s, r);
    }
  }
  return s;
}

function conv_(s, r) {
  var a = r[0];
  var b = r[1];
  var s = s.split('').map(function(e) {
    if (e === ' ') {
      return e;
    }
    return String.fromCharCode((a * e.charCodeAt(0) + b) % 26 + 'a'.charCodeAt(0));
  }).join('');
  return s;
}

function check(str) {
  if (str.length !== 4) {
    return false;
  }
  for (var i = 0; i < 26; i++) {
    for (var j = 0; j < 26; j++) {
      var s = conv_(str, [i, j]);
      if (s === 'this' || s === 'that') {
        return [i, j];
      }
    }
  }
  return false;
}
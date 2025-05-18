(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  while (true) {
    var a = p.shift().split(' ').map(Number);
    var m = a.shift();
    var d = a.shift();
    if (m === 0 && d === 0) {
      return;
    }
    var date = new Date(2004, m - 1, d);
    //console.log(date);
    console.log(getWeekDay(date.getDay()) );
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function getWeekDay(d) {
  var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return week[d];
}
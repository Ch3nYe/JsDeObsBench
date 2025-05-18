 (function(stdin) {
    var lines = stdin.toString().split(' ');
    var x = parseInt(lines[0],10);
    var y = parseInt(lines[1],10);
    
    console.log((x*y),(x+y)*2);

 }(require('fs').readFileSync('/dev/stdin', 'utf8')));
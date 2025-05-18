function main(input){
  var line1 = parseInt(input[0]);
 
  var ans = false;
  for (var i=1; i<input.length; i++){
    var n = parseInt(input[i]);
    
    if (n%2 ===1)
      ans = true;;
  }

  console.log(ans ? 'first' : 'second');
}


function parse(line){
  var ret = [];
  var arr = line.split(' ');
  for (var i = 0; i < arr.length; i++) {
    ret.push(parseInt(arr[i]));
  }
  return ret;
}

var input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main(input);
});

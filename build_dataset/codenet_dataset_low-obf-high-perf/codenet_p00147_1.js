function main(){
  var waitTime = [0,0,0,0,0,0,14,9,4,0,0,8,3,2,0,0,15,10,15,10,6,12,7,9,11,6,23,18,13,8,3,23,18,13,8,3,34,29,24,22,17,28,23,24,19,27,34,29,35,30,28,31,28,23,24,28,42,37,32,27,22,42,37,32,27,22,53,48,43,41,36,47,42,43,38,46,64,59,54,49,44,61,56,51,46,44,72,67,62,57,52,72,67,62,57,52,83,78,73,71];
  for(var i = 0; i < input.length; i++){
    var idx = parseInt(input[i], 10);
    console.log('%d', waitTime[idx]);
  }
}
var
input = '';
 
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main();
});
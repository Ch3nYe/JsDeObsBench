function main(){
  var debt = 100000;
 
  for(var i = 0; i < input.trim()-0; i++){
    debt = Math.ceil((debt * 1.05)/1000) * 1000;
  }

  console.log(debt);
}

var
input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  main();
});
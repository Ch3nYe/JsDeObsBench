var a = 'A';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk)
{
  input = chunk.trim().split(',');
  if(input[0] == a)
    a = input[1];
  else if(input[1] == a)
    a = input[0];
});
process.stdin.on('end', function(){console.log(a);});

var input = "";
var mem = new Array(14);
for(var i = 0; i < 14; i++)
{
  mem[i] = new Array(14);
  for(var j = 0; j < 14; j++)
    mem[i][j] = 0;
}
var dx = [
  [0, -1, 0, 1, 0],
  [-1, 0, 1, -1, 0, 1, -1, 0, 1],
  [0, -1, 0, -1, -2, -1, 0, 1, 2, -1, 0, 1, 0]
]
var dy =[
  [-1, 0, 0, 0, 1],
  [-1, -1, -1, 0, 0, 0, 1, 1, 1,],
  [-2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2]
]
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk){input += chunk});
process.stdin.on('end', function()
{
  input = input.split('\n');
  for(var i = 0; i < input.length; i++)
  {
    s = input[i].split(',');
    x = Number(s[0]) + 2;
    y = Number(s[1]) + 2;
    v = Number(s[2]) - 1;
    for(var j in dx[v])
      mem[x + dx[v][j]][y + dy[v][j]]++;
  }
  m = 0;
  b = 0;
  for(var i = 2; i < 12; i++)
  {
    for(var j = 2; j < 12; j++)
    {
      if(mem[i][j] == 0)
        b++;
      m = Math.max(m, mem[i][j]);
    }
  }
  console.log(b);
  console.log(m);
});
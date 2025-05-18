function Main(arg)
{
  var a = arg.split("\n")[0].split(" ")[0]-0;
  var b = arg.split("\n")[0].split(" ")[1]-0;
 
  if (a < b) {
    console.log(a.toString().repeat(b));
  }
  else {
    console.log(b.toString().repeat(a));
  }

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
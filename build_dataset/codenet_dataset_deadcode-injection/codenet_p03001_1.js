function Main(input) {

  var input = input.split("\n");
  var arya = input[0].split(" ").map(val => parseInt(val, 10)).slice(0, 4);
  var w = arya[0];
  var h = arya[1];
  var x = arya[2];
  var y = arya[3];

  if(x == 0 & y == 0 || x == w && y == h){
    console.log((w*h/2).toFixed(6) + " 0");
    return true;
  }



  var a1 = x*h;
  var a2 = (w - x)*h;
  var b1 = y*w;
  var b2 = (h - y)*w;
  var a = a1;
  var b = b1;
  var counter = 0;

  if(a1 > a2){
    a = a2;
  }

  if(b1 > b2){
    b = b2;
  }

  var reault = a;
  if(a < b) {
    reault = b;
  }

  if(a == b) {
    var counter = 1;
  }


  console.log(reault.toFixed(6) + " " + counter);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
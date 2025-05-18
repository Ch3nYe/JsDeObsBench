function Main(input) {
  input = input.split("\n");
  var s = input[0];
  if(s.match(/BW/g)){
  var l1 = s.match(/BW/g).length;
  }else{
    l1=0;
  }
  if(s.match(/WB/g)){
  var l2 = s.match(/WB/g).length;
  }else{
    l2=0;
  }
  console.log('%s', l1+l2);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
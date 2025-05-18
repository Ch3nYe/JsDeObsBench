function Main(input) {
  var input = input.split("\n");
  var string = input[0];
  var c,f,Cfound = 0;
  for(var i = 0;i < string.length;i++){
    if(string[i] == "C" && !Cfound){
      c = i;
      Cfound++;
    };
    if(Cfound && string[i] == "F"){
      f = i;
      return console.log("Yes");
    }
  };
  return console.log("No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
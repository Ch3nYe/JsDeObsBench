function Main(input) {
  var len = input.split("\n")[0];
  var list = input.split("\n")[1].split(" ");
  list.sort(function(a,b){
  	return parseInt(a) - parseInt(b);
  });
  
  var b = list.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
  if(b.length % 2 == 1){
     console.log(b.length);
     }else{
     console.log(b.length - 1);
     }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

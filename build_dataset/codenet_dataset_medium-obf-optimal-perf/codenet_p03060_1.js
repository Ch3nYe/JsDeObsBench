//   2次配列のよみこみ

function Main(input) {
    input = input.split("\n");
  	n = Number(input[0].split(" "));
    V = input[1].split(" ").map(Number);
    C = input[2].split(" ").map(Number);
    
  //  console.log(n);
  //  console.log(V);
  //  console.log(C);
    
    
  	var Y = 0;
  	for(var i=0; i<n; i++){y = V[i]-C[i];
                             if ( y >= 0){Y = Y + y;}
                                      }
   console.log(Y);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
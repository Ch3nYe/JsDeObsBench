function Main(input){
	var xs = input.trim().split('\n').map(v=>parseInt(v,10));
      var A = 0;
      if(xs[0] <= xs[1]){
      A = A + xs[0];
      }else if(xs[0] >= xs[1]){
      A = A + xs[1];
      }
      var B = 0;
      if(xs[2] <= xs[3]){
      B = B + xs[2];
      }else if(xs[2] >= xs[3]){
      B = B + xs[3];
      }
    console.log(A+B);      
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));
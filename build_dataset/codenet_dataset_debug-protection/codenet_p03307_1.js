function Main(input){
   input = input.split(' ');
   X = 2;
   N = input.map(input=>parseInt(input,10));
   if(N % X ==0){
      console.log(N[0]);
      }else{
      var ans = N[0] * X;
      console.log(ans);
      }
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));
function Main(input) {
  input = input.split('\n');
  var T = input[0].split(' ');
  var A = input[1].split(' ');
  var B = input[2].split(' ');
  for(var i=0; i<2; i++){
  T[i] = Number(T[i]);
  A[i] = Number(A[i]);
  B[i] = Number(B[i]);
  }
  var sa = new Array(2);
  sa[0] = T[0]*A[0]-T[0]*B[0];
  sa[1] = T[1]*A[1]-T[1]*B[1];
  var x = 0;
  var xmae = 1;
  var pm = 0;
  var count = -1;
  if(sa[0] == sa[1]*-1){
     console.log('infinity');
  }else{
     for(var i=0; i<1; i){
       count++;
       xmae = x;
       x += sa[count%2];
       if(x*xmae > 0){
          i = 1;
          }else if(x == 0){
                   i = 1;
            count++;
                   }
     }
    console.log(count-1);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
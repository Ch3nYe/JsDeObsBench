function Main(input) {
  var S = input.split("");
  var Slong = S.length
  var Muki = ">";
  var Out = 1;
  var V = [];
  var Left = 0;
  var Right = 0;
  var Sum = 0;
  for(var i = 0;i<Slong;i++){

    if(S[i] == Muki){
      if(Muki == ">"){
        Left ++;
    }else{
      Right ++;
    }
    Out = 0;
  }else{
    if(Muki == "<"){
      V.push({L:Left,R:Right})
      Muki = ">"
      Left = 0;
      Right = 0;
      Left ++;
      Out = 1;
    }else{
      Muki = "<"
      Right ++;
      Out = 0;
    }
  }
  }
  if(Out == 0){
  V.push({L:Left,R:Right})
  }
  
//console.log(V);
for(var i=1;i<V.length;i++){
  if(V[i-1].R < V[i].L){
    V[i-1].R --; 
  }else{
    V[i].L --;
  }
}
//  console.log(V);
for(var i=0;i<V.length;i++){
    Sum += (V[i].L*(V[i].L+1))/2;
//    console.log((V[i].L*(V[i].L+1))/2);
    Sum += (V[i].R*(V[i].R+1))/2;
//    console.log((V[i].R*(V[i].R+1))/2);
  }
  console.log(Sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
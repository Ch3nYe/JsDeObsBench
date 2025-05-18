function Main(input){
  input = input.split("\n");
  inputStr = input[0].split(" ");
  const L = Number.parseInt(inputStr[0]);
  const R = Number.parseInt(inputStr[1]);
  
  var min = 2018;  
  if ( L * R > 2019){
    if ( R - L < 2019) {
      const L2 = L % 2019;
      const R2 = R % 2019;
       
      for(var i1 = L2; i1 < R2; i1++){
        for(var i2 = i1+1 ; i2 < R2+1 ; i2++){
          min = Math.min(min,i1 * i2 % 2019);
          if(min === 0) { break; }
        }
      }
	  console.log(min);
    } else {
      console.log(0);
    }
  } else {
    //LとRの積が2019を超えないなら計算する必要がない
    console.log(L * (L+1));
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

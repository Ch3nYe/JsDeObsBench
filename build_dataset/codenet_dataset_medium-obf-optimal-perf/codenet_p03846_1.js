function Main(input) {
    input = input.split("\n");
    tmp = input[1].split(" ");
    var c = Math.pow(parseInt(tmp.length / 2) , 2);
    var d = 0;
    for(j=tmp.length-1;j>=0;j--){
      for(i=0;i<tmp.length;i++){
         if(tmp[i] == j){
            d++;
         }
      }
      if(d!=2 && j>0){
         c = 0;
         break;
      }
      if(d!=1 && j==0){
         c = 0;
         break;
      }
    d = 0;
    j--;
    }
    c = c % (Math.pow(10,9)+7);
    console.log('%s', c);
}

function debug(){
	var input = document.getElementById("input").value;
	Main(input);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
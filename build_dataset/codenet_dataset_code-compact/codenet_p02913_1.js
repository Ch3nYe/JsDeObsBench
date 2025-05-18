const main = (input) => {
  var N = input[0]-0;
  var str = input[1];
  var ans = 0;
  var min = 0;
  var max = ~~(N/2);
  start:while(min<=max){
    var ave = ~~((min+max)/2);
    for(var i=0;i<N-ave;i++){
      var base = str.substring(i,i+ave);
      if(str.lastIndexOf(base) >= i+ave){
        min = ave+1;
        ans = ave;
        continue start;
      }
    }
    max = ave-1;
  }
  console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'UTF-8').trim().split("\n"));

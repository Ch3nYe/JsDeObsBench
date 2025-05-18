process.stdin.resume();
process.stdin.setEncoding('utf8');

var g_input = '';
process.stdin.on('data', function(chunk) {
    g_input += chunk;
});
process.stdin.on('end', function() {
    main(g_input.split(/\r?\n/));
});

function main(inputs) {
  var N = parseInt(inputs[0]);
  var rs = inputs[1].split(" ").map(function(a){return parseInt(a);});
  var a = new Array(7).fill(false);
  var a8 = 0;
  var count = 0;
  for(var i = 0; i < N; i++){
    for(var j = 0; j < 9; j++){
      if(j != 8){
        if(rs[i] < (j+1)*400){
          if(!a[j]){
            a[j] = true;
            count += 1;
          }
          break;
        }
      }else{
        a8 += 1;
      }
    }
  }
  var min = count;
  if(min == 0 && N>0){
    min = 1;
    if(a8>0){
      a8 -=1;
    }
  }
  var max = Math.min(8, min + a8);
  console.log(""+min+" "+max);
}

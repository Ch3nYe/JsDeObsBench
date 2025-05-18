const main = (input) => {
  var K = input.trim().split("\n")[0].split(" ")[3];
  var x = input.trim().split("\n")[0].split(" ")[0];
  var y = input.trim().split("\n")[0].split(" ")[1];
  var z = input.trim().split("\n")[0].split(" ")[2];

  var a = input.trim().split("\n")[1].split(" ").sort((a,b)=>b-a).map(v=>v-0);
  var b = input.trim().split("\n")[2].split(" ").sort((a,b)=>b-a).map(v=>v-0);
  var c = input.trim().split("\n")[3].split(" ").sort((a,b)=>b-a).map(v=>v-0);
  var anss = [];
  var idxa=0,idxb=0,idxc=0;
  var min = 0;
  for(var i=0;i<x;i++){
    for(var j=0;j<y;j++){
      for(var k=0;k<z;k++){
        if(i*j*k > K) break;
        var sum = a[i]+b[j]+c[k];
        anss.push(sum);
      }
    }
  }
  console.log(anss.sort((a,b)=>b-a).filter((v,i)=>i<K).join("\n"));

}

main(require('fs').readFileSync('/dev/stdin', 'UTF-8'));

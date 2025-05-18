const main = (inputs) => {
  var H = inputs[0].split(" ")[0]-0;
  var W = inputs[0].split(" ")[1]-0;
 
  var map = {};
  var ymap = {};
  var tmap = {};
  var keys = [];
  for(var h=0;h<H;h++){
    map[h] = inputs[h+1];
    for(var w=0;w<W;w++){
      var ukey = (h-1)+"_"+w;
      var lkey = h+"_"+(w-1);
      var key = h+"_"+w;
      if(map[h][w] == "#"){
      }else{
        keys.push(key);
        if(ymap[lkey]){
          ymap[key] = ymap[lkey];
          ymap[key].n++;
        }else{
          ymap[key] = {n:1};
        }
 
        if(tmap[ukey]){
          tmap[key] = tmap[ukey];
          tmap[key].n++;
        }else{
          tmap[key] = {n:1};
        }
      }
    }
  }
  var ans = 0;
  var key;
  for(var i=keys.length-1;i>=0;i--){
    key = keys[i];
    ans = Math.max(ans, tmap[key].n + ymap[key].n - 1);
    if(ans == H+W-1) break;
  }
  console.log(ans);
}
 
main(require('fs').readFileSync('/dev/stdin', 'UTF-8').trim().split("\n"));
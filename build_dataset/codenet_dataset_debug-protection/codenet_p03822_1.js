
var tmp = {};
function main(chunk){
    var lines = chunk.split("\n");
    var n = Number(lines[0]);
    
    var map = {};
    for(var i=2;i<n+1;i++){
        var a = Number(lines[i-1]);
        if(map[a]){
            map[a].t++;
            map[a].p.push(i);
        }else{
            map[a] = {};
            map[a].t = 1;
            map[a].p = [i];
        }
    }
    console.log(calc(map,1)+1);
}

function calc(map,n){
    if(tmp[n]){
        return tmp[n];
    }
    var ans = 0;
    for(var i in map[n].p){
        var p = map[n].p[i];
        if(map[p]){
            ans = Math.max(ans,map[p].t + calc(map,p));
        }
    }
    tmp[n] = ans;
    return ans;
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

function main(input) {
    var n = input[0]-0;
    var lists = [];
    var ansmap = {};
    for(var i=1;i<=n;i++){
        var str = input[i];
        var map = {};
        for(var j=0;j<str.length;j++){
            map[str[j]] = map[str[j]]?map[str[j]]+1:1;
            ansmap[str[j]] = 60;
        }
        lists.push(map);
    }
    var keys = Object.keys(ansmap).sort((a,b)=>a>b?1:-1);
    for(var i=0;i<n;i++){
        var list = lists[i];
        for(var j=0;j<keys.length;j++){
            ansmap[keys[j]] = Math.min(ansmap[keys[j]], list[keys[j]]||0);
        }
    }
    var ans = "";
    keys.forEach(key=>{
        for(var i=0;i<ansmap[key];i++) ans += key;
    })
    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))

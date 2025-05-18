function main(input) {
    var n = input[0]-0;
    var list = [0].concat(input[1].split(" ").map(v=>v-0), [0]);
    var llist = []; llist[0] = 0;
    var rlist = []; rlist[n] = 0;
    for(var i=1;i<=n;i++){
        llist[i] = llist[i-1] + Math.abs(list[i]-list[i-1]);
        rlist[n-i] = rlist[n-i+1] + Math.abs(list[n-i+1]-list[n-i+2]);
    }
    for(var i=1;i<=n;i++){
        var ans = 0;
        ans += llist[i-1];
        ans += rlist[i]||0;
        ans += Math.abs(list[i-1]-list[i+1]);
        console.log(ans);
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"));

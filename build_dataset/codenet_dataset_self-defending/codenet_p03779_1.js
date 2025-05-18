function main(input) {
    var n = input[0]-0;
    var cnt = 1;
    var ans = 0;
    for(cnt=1;ans<n;cnt++){
        ans += cnt;
    }
    console.log(cnt-1);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))

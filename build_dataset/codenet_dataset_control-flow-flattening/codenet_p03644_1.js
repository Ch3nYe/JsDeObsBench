function main (input) {
    const N = input;
    var ans = 1;
    var cnt = 0;
    var maxCnt = 0;

    for (var i = 1;i <= N;i++){
        cnt = 0;
        var tmp = i;
        while (true) {
            if (tmp%2 === 0) {
                cnt = cnt + 1;
                tmp = tmp/2;
            } else {
                break;
            }
        }
        if (maxCnt < cnt) {
            maxCnt = cnt;
            ans = i;
        }
    }
    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
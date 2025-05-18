function keta(num) {
    var eXmXuc = {
        'syoVf': function (x, y) {
            return x <= y;
        }
    };
    for (var i = 0x1; eXmXuc['syoVf'](i, 0x6); i++) {
        if (num < 0xa ** i)
            return i % 0x2;
    }
}
function Main(input) {
    var fMYKAv = {
        'gvSkm': function (x, y) {
            return x <= y;
        },
        'hPLoT': function (callee, param1) {
            return callee(param1);
        }
    };
    var ans = 0x0;
    var cnt = 0x1;
    while (fMYKAv['gvSkm'](cnt, input)) {
        ans += fMYKAv['hPLoT'](keta, cnt);
        cnt++;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
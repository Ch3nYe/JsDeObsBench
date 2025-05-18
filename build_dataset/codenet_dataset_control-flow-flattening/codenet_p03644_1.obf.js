function main(input) {
    var TYtNxb = {
        'UXUUs': function (x, y) {
            return x <= y;
        },
        'ONHRy': function (x, y) {
            return x === y;
        },
        'bgXfB': function (x, y) {
            return x % y;
        },
        'FriZW': function (x, y) {
            return x / y;
        },
        'ceBen': function (x, y) {
            return x < y;
        }
    };
    const N = input;
    var ans = 0x1;
    var cnt = 0x0;
    var maxCnt = 0x0;
    for (var i = 0x1; TYtNxb['UXUUs'](i, N); i++) {
        cnt = 0x0;
        var tmp = i;
        while (!![]) {
            if (TYtNxb['ONHRy'](TYtNxb['bgXfB'](tmp, 0x2), 0x0)) {
                cnt = cnt + 0x1;
                tmp = TYtNxb['FriZW'](tmp, 0x2);
            } else {
                break;
            }
        }
        if (TYtNxb['ceBen'](maxCnt, cnt)) {
            maxCnt = cnt;
            ans = i;
        }
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
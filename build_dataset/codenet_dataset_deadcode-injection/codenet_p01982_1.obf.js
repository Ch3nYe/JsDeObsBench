var a0_0x1ce7cb = a0_0x4e71;
var input = require('fs')[a0_0x1ce7cb(0x0)]('/dev/stdin', 'utf8');
function a0_0x2f3b() {
    var _0x261acb = [
        'readFileSync',
        'trim',
        'split',
        'join',
        '000',
        'push',
        'shift',
        'length',
        'log'
    ];
    a0_0x2f3b = function () {
        return _0x261acb;
    };
    return a0_0x2f3b();
}
var arr = input[a0_0x1ce7cb(0x1)]()[a0_0x1ce7cb(0x2)]('\x0a');
function a0_0x4e71(oRRmgo, key) {
    var stringArray = a0_0x2f3b();
    a0_0x4e71 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4e71(oRRmgo, key);
}
while (!![]) {
    var nlr = arr['shift']()['split']('\x20')['map'](Number);
    if (nlr[a0_0x1ce7cb(0x3)]('') == a0_0x1ce7cb(0x4))
        break;
    var [n, l, r] = [
        nlr[0x0],
        nlr[0x1],
        nlr[0x2]
    ];
    var A = [];
    for (var i = 0x0; i < n; i++)
        A[a0_0x1ce7cb(0x5)](arr[a0_0x1ce7cb(0x6)]() - 0x0);
    var cnt = 0x0;
    for (var x = l; x <= r; x++) {
        var flag = !![];
        for (var i = 0x0; i < A[a0_0x1ce7cb(0x7)]; i++) {
            if (x % A[i] == 0x0) {
                flag = ![];
                if ((i + 0x1) % 0x2 != 0x0)
                    cnt++;
                break;
            }
        }
        if (flag && n % 0x2 == 0x0)
            cnt++;
    }
    console[a0_0x1ce7cb(0x8)](cnt);
}
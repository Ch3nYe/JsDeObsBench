function a0_0x2185(Xfwmiw, key) {
    var stringArray = a0_0x37a5();
    a0_0x2185 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2185(Xfwmiw, key);
}
var a0_0x383000 = a0_0x2185;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x383000(0x0));
var n = input['trim']() - 0x0;
var ans = [
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0
];
function a0_0x37a5() {
    var _0x5880d2 = [
        'utf8',
        'includes'
    ];
    a0_0x37a5 = function () {
        return _0x5880d2;
    };
    return a0_0x37a5();
}
var i = 0x0;
while (!![]) {
    i++;
    var cnt = 0x0;
    for (var j = i; j >= 0x1; j--) {
        if (i % j == 0x0)
            cnt++;
    }
    if (ans[cnt - 0x1] == 0x0) {
        ans[cnt - 0x1] = i;
        if (!ans[a0_0x383000(0x1)](0x0))
            break;
    }
}
console['log'](ans[n - 0x1]);
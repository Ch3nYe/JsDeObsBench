function a0_0x1533(OhsTQx, key) {
    var stringArray = a0_0x2ea9();
    a0_0x1533 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1533(OhsTQx, key);
}
function a0_0x2ea9() {
    var _0x2ac0c2 = [
        'split',
        'floor',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2ea9 = function () {
        return _0x2ac0c2;
    };
    return a0_0x2ea9();
}
var a0_0x5517f2 = a0_0x1533;
function Main(input) {
    var _0x30b407 = a0_0x1533;
    input = input[_0x30b407(0x0)]('\x0a');
    T = input[0x0];
    var len = T['length'];
    var p = len % 0x2;
    q = Math[_0x30b407(0x1)](len / 0x2);
    cnt = 0x0;
    i = 0x0;
    for (i = 0x0; i < q; i++) {
        if (T['substr'](i, 0x1) == T['substr'](len - 0x1 - i, 0x1)) {
            cnt = cnt + 0x0;
        } else {
            cnt++;
        }
    }
    console['log'](cnt);
}
Main(require('fs')[a0_0x5517f2(0x2)](a0_0x5517f2(0x3), a0_0x5517f2(0x4)));
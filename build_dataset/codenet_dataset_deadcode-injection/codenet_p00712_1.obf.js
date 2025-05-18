function a0_0x20e7() {
    var _0x1c0b6f = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'join',
        '0\x200\x200\x200',
        'log'
    ];
    a0_0x20e7 = function () {
        return _0x1c0b6f;
    };
    return a0_0x20e7();
}
function a0_0x155b(niYLNL, key) {
    var stringArray = a0_0x20e7();
    a0_0x155b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x155b(niYLNL, key);
}
var a0_0x476057 = a0_0x155b;
var input = require('fs')[a0_0x476057(0x0)]('/dev/stdin', a0_0x476057(0x1));
var arr = input[a0_0x476057(0x2)]()['split']('\x0a');
while (!![]) {
    var pqan = arr['shift']()[a0_0x476057(0x3)]('\x20')[a0_0x476057(0x4)](Number);
    if (pqan[a0_0x476057(0x5)]('\x20') == a0_0x476057(0x6))
        break;
    var p = pqan[0x0];
    var q = pqan[0x1];
    var a = pqan[0x2];
    var n = pqan[0x3];
    var ans = 0x0;
    var loop = function (start, P, Q, A, cnt) {
        if (cnt > 0x0) {
            if (cnt > n)
                return;
            if (p * Q == P * q) {
                ans++;
                return;
            } else if (p * Q < P * q)
                return;
        }
        for (var i = start; A * i <= a; i++) {
            loop(i, 0x1 * Q + i * P, Q * i, A * i, cnt + 0x1);
        }
    };
    loop(0x1, 0x0, 0x1, 0x1, 0x0);
    console[a0_0x476057(0x7)](ans);
}
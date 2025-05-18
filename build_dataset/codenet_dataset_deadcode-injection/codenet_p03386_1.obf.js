var a0_0x5c4e97 = a0_0x2c02;
var lines = [];
function a0_0x5ed6() {
    var _0x23351f = [
        'readline',
        'createInterface',
        'stdin',
        'stdout',
        'line',
        'push',
        'close',
        'split',
        'uSRuK',
        'inAJC',
        'AJMHQ',
        'toString',
        'log',
        'length'
    ];
    a0_0x5ed6 = function () {
        return _0x23351f;
    };
    return a0_0x5ed6();
}
var readline = require(a0_0x5c4e97(0x0));
var rl = readline[a0_0x5c4e97(0x1)]({
    'input': process[a0_0x5c4e97(0x2)],
    'output': process[a0_0x5c4e97(0x3)]
});
rl['on'](a0_0x5c4e97(0x4), function (x) {
    var _0xc06e92 = a0_0x2c02;
    lines[_0xc06e92(0x5)](x);
});
function a0_0x2c02(QmJKhA, key) {
    var stringArray = a0_0x5ed6();
    a0_0x2c02 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c02(QmJKhA, key);
}
rl['on'](a0_0x5c4e97(0x6), function () {
    var _0x128e8c = a0_0x2c02;
    var A = Number(lines[0x0][_0x128e8c(0x7)]('\x20')[0x0]);
    var B = Number(lines[0x0]['split']('\x20')[0x1]);
    var K = Number(lines[0x0]['split']('\x20')[0x2]);
    var ans = '';
    for (var i = A; i <= B; i++) {
        if (_0x128e8c(0x8) === _0x128e8c(0x8)) {
            if (i < A + K) {
                if (_0x128e8c(0x9) !== _0x128e8c(0xa)) {
                    ans += i[_0x128e8c(0xb)]();
                } else {
                    console[_0x128e8c(0xc)](ans[i]);
                }
            } else if (i > B - K) {
                ans += i['toString']();
            }
        } else {
            ans += i[_0x128e8c(0xb)]();
        }
    }
    for (var i = 0x0; i < ans[_0x128e8c(0xd)]; i++) {
        console[_0x128e8c(0xc)](ans[i]);
    }
});
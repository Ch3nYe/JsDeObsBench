var a0_0x4548f2 = a0_0x221d;
process['stdin'][a0_0x4548f2(0x0)]();
process['stdin']['setEncoding'](a0_0x4548f2(0x1));
var lines = [];
function a0_0x221d(bQIqbZ, key) {
    var stringArray = a0_0x259a();
    a0_0x221d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x221d(bQIqbZ, key);
}
var reader = require(a0_0x4548f2(0x2))[a0_0x4548f2(0x3)]({
    'input': process[a0_0x4548f2(0x4)],
    'output': process[a0_0x4548f2(0x5)]
});
function a0_0x259a() {
    var _0x4abe84 = [
        'resume',
        'utf8',
        'readline',
        'createInterface',
        'stdin',
        'stdout',
        'line',
        'push',
        'close',
        'AJxLA',
        'IQtLN',
        'log'
    ];
    a0_0x259a = function () {
        return _0x4abe84;
    };
    return a0_0x259a();
}
reader['on'](a0_0x4548f2(0x6), line => {
    var _0x6dbfc6 = a0_0x221d;
    lines[_0x6dbfc6(0x7)](line);
});
reader['on'](a0_0x4548f2(0x8), () => {
    var _0x239d45 = a0_0x221d;
    const N = lines[0x0] - 0x0;
    let tmp = 0x0;
    for (let i = 0x1; i <= 0xf4240; i++) {
        tmp *= 0xa;
        tmp += 0x7;
        tmp %= N;
        if (tmp === 0x0) {
            if (_0x239d45(0x9) !== _0x239d45(0xa)) {
                console[_0x239d45(0xb)](i);
                return;
            } else {
                return !![];
            }
        }
    }
    console[_0x239d45(0xb)](-0x1);
});
function check(ans) {
    return !![];
}
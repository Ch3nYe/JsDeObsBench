var a0_0x2e6bff = a0_0x2ff6;
function a0_0x40a1() {
    var _0x394fd1 = [
        'stdin',
        'resume',
        'setEncoding',
        'readline',
        'createInterface',
        'stdout',
        'line',
        'push',
        'close',
        'apply'
    ];
    a0_0x40a1 = function () {
        return _0x394fd1;
    };
    return a0_0x40a1();
}
process[a0_0x2e6bff(0x0)][a0_0x2e6bff(0x1)]();
function a0_0x2ff6(ShcLvZ, key) {
    var stringArray = a0_0x40a1();
    a0_0x2ff6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ff6(ShcLvZ, key);
}
process['stdin'][a0_0x2e6bff(0x2)]('utf8');
var lines = [];
var t = [];
var reader = require(a0_0x2e6bff(0x3))[a0_0x2e6bff(0x4)]({
    'input': process['stdin'],
    'output': process[a0_0x2e6bff(0x5)]
});
reader['on'](a0_0x2e6bff(0x6), line => {
    var _0x1df03e = a0_0x2ff6;
    lines[_0x1df03e(0x7)](line);
});
reader['on'](a0_0x2e6bff(0x8), () => {
    var _0x532540 = a0_0x2ff6;
    var x = lines[0x0]['split']('\x20');
    var a = parseInt(x[0x0]);
    var b = parseInt(x[0x1]);
    var c = parseInt(x[0x2]);
    var d = parseInt(x[0x3]);
    var ac = a * c;
    var ad = a * d;
    var bc = b * c;
    var bd = b * d;
    t[_0x532540(0x7)](ac);
    t[_0x532540(0x7)](ad);
    t[_0x532540(0x7)](bc);
    t[_0x532540(0x7)](bd);
    console['log'](Math['max'][_0x532540(0x9)](null, t));
});
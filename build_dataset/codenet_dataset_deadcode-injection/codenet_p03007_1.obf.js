var a0_0x44b7ec = a0_0xde89;
log = console[a0_0x44b7ec(0x0)];
var stdin = require('fs')['readFileSync'](a0_0x44b7ec(0x1), 'UTF-8');
var lines = stdin[a0_0x44b7ec(0x2)]('\x0a')['filter'](v => v !== '')['map'](v => v[a0_0x44b7ec(0x2)]('\x20')[a0_0x44b7ec(0x3)](Number));
var N = lines[0x0];
function a0_0x134f() {
    var _0x404711 = [
        'log',
        '/dev/stdin',
        'split',
        'map',
        'pop',
        'forEach',
        'push',
        'length'
    ];
    a0_0x134f = function () {
        return _0x404711;
    };
    return a0_0x134f();
}
function a0_0xde89(xuanJF, key) {
    var stringArray = a0_0x134f();
    a0_0xde89 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xde89(xuanJF, key);
}
var A = lines[0x1];
var processList = [];
A['sort']((a, b) => a - b);
var plusList = [];
var minusList = [];
plusList['push'](A[a0_0x44b7ec(0x4)]());
minusList['push'](A['shift']());
A[a0_0x44b7ec(0x5)](v => {
    var _0x14e547 = a0_0xde89;
    v >= 0x0 ? plusList[_0x14e547(0x6)](v) : minusList['push'](v);
});
var tmp = minusList[a0_0x44b7ec(0x4)]();
for (var i = 0x0; i < plusList[a0_0x44b7ec(0x7)] - 0x1; i++) {
    var plus = plusList['pop']();
    processList[a0_0x44b7ec(0x6)](tmp + '\x20' + plus);
    tmp = tmp - plus;
}
var lastplus = plusList[a0_0x44b7ec(0x4)]();
for (var i = 0x0; i < minusList[a0_0x44b7ec(0x7)]; i++) {
    var minus = minusList[a0_0x44b7ec(0x4)]();
    processList['push'](lastplus + '\x20' + minus);
    lastplus = lastplus - minus;
}
processList['push'](lastplus + '\x20' + tmp);
log(lastplus - tmp);
processList[a0_0x44b7ec(0x5)](v => log(v));
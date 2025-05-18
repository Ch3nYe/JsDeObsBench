var a0_0x4ab944 = a0_0x28ef;
var input = require('fs')[a0_0x4ab944(0x0)](a0_0x4ab944(0x1), 'utf8');
var Arr = input['trim']()[a0_0x4ab944(0x2)](a0_0x4ab944(0x3));
var inputA = Arr[0x0][a0_0x4ab944(0x2)]('\x0a');
var inputB = Arr[0x1][a0_0x4ab944(0x2)]('\x0a')[a0_0x4ab944(0x4)](Number);
var obj = {};
var s = [];
inputA[a0_0x4ab944(0x5)](function (v) {
    var _0x507fdc = a0_0x28ef;
    var arr = v['split'](',')['map'](Number);
    obj[arr[0x0]] = arr[0x1];
    s[_0x507fdc(0x6)](arr[0x1]);
});
function a0_0x367f() {
    var _0x3669af = [
        'readFileSync',
        '/dev/stdin',
        'split',
        '\x0a0,0\x0a',
        'map',
        'forEach',
        'push',
        'length',
        'log',
        'indexOf'
    ];
    a0_0x367f = function () {
        return _0x3669af;
    };
    return a0_0x367f();
}
s['sort'](function (a, b) {
    return b - a;
});
var s0 = s[0x0];
function a0_0x28ef(daoSsG, key) {
    var stringArray = a0_0x367f();
    a0_0x28ef = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28ef(daoSsG, key);
}
var t = [s0];
for (var i = 0x1; i < s[a0_0x4ab944(0x7)]; i++) {
    if (s0 == s[i])
        continue;
    s0 = s[i];
    t['push'](s[i]);
}
inputB[a0_0x4ab944(0x5)](function (v) {
    var _0x89669f = a0_0x28ef;
    console[_0x89669f(0x8)](t[_0x89669f(0x9)](obj[v]) + 0x1);
});
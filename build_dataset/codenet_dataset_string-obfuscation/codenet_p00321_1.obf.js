var a0_0x4101e4 = a0_0x4049;
(function (stringArrayFunction, comparisonValue) {
    var _0x23efa4 = a0_0x4049;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x23efa4(0x115)) / 0x1 * (-parseInt(_0x23efa4(0x116)) / 0x2) + -parseInt(_0x23efa4(0x108)) / 0x3 * (parseInt(_0x23efa4(0x117)) / 0x4) + parseInt(_0x23efa4(0x111)) / 0x5 + -parseInt(_0x23efa4(0x109)) / 0x6 + parseInt(_0x23efa4(0x10a)) / 0x7 + -parseInt(_0x23efa4(0x112)) / 0x8 + parseInt(_0x23efa4(0x110)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x48e2, 0xab194));
var input = require('fs')[a0_0x4101e4(0x118)](a0_0x4101e4(0x114), a0_0x4101e4(0x10f));
var arr = input[a0_0x4101e4(0x10d)]()[a0_0x4101e4(0x106)]('\x0a');
var nf = arr[a0_0x4101e4(0x10c)]()[a0_0x4101e4(0x106)]('\x20')[a0_0x4101e4(0x119)](Number);
var f = nf[0x1];
function a0_0x48e2() {
    var _0x2b2457 = [
        '/dev/stdin',
        '61myAOFF',
        '35486WBpSxL',
        '4WazSnc',
        'readFileSync',
        'map',
        'split',
        'length',
        '4013394ehmjtQ',
        '7197744VmLdwF',
        '4686850AROHEb',
        'sort',
        'shift',
        'trim',
        'log',
        'utf8',
        '15341400vVStDE',
        '4695720Hzauch',
        '9259000fSqFiQ',
        'forEach'
    ];
    a0_0x48e2 = function () {
        return _0x2b2457;
    };
    return a0_0x48e2();
}
var obj = {};
arr = arr[a0_0x4101e4(0x119)](function (v) {
    var _0x5ea699 = a0_0x4101e4;
    v = v['split']('\x20');
    v['shift']();
    v[_0x5ea699(0x113)](function (V) {
        obj[V] = {};
    });
    return v;
});
for (var k in obj) {
    for (var K in obj) {
        obj[k][K] = 0x0;
    }
}
arr[a0_0x4101e4(0x113)](function (v) {
    var _0x30aa11 = a0_0x4101e4;
    for (var i = 0x0; i < v['length']; i++) {
        for (var j = 0x0; j < v[_0x30aa11(0x107)]; j++) {
            obj[v[i]][v[j]]++;
        }
    }
});
var ans = [];
for (var k in obj) {
    for (var K in obj) {
        obj[K][k] = 0x0;
        if (obj[k][K] >= f) {
            ans['push']([
                k,
                K
            ][a0_0x4101e4(0x10b)]()['join']('\x20'));
        }
    }
}
ans[a0_0x4101e4(0x10b)]();
console[a0_0x4101e4(0x10e)](ans[a0_0x4101e4(0x107)]);
function a0_0x4049(toHCqW, key) {
    var stringArray = a0_0x48e2();
    a0_0x4049 = function (index, key) {
        index = index - 0x106;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4049(toHCqW, key);
}
if (ans[a0_0x4101e4(0x107)] != 0x0)
    console[a0_0x4101e4(0x10e)](ans['join']('\x0a'));
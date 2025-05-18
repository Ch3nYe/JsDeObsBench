function a0_0x44dc(NeNAWl, key) {
    var stringArray = a0_0x3a11();
    a0_0x44dc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x44dc(NeNAWl, key);
}
var a0_0x130c1f = a0_0x44dc;
var input = require('fs')[a0_0x130c1f(0x0)](a0_0x130c1f(0x1), 'utf8');
var arr = input[a0_0x130c1f(0x2)]()['split']('\x0a');
function a0_0x3a11() {
    var _0x4f2d3e = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'map',
        'forEach',
        'length',
        'push',
        'join',
        'sort',
        'log'
    ];
    a0_0x3a11 = function () {
        return _0x4f2d3e;
    };
    return a0_0x3a11();
}
var nf = arr[a0_0x130c1f(0x3)]()[a0_0x130c1f(0x4)]('\x20')[a0_0x130c1f(0x5)](Number);
var f = nf[0x1];
var obj = {};
arr = arr['map'](function (v) {
    var _0x480b57 = a0_0x44dc;
    v = v[_0x480b57(0x4)]('\x20');
    v['shift']();
    v[_0x480b57(0x6)](function (V) {
        obj[V] = {};
    });
    return v;
});
for (var k in obj) {
    for (var K in obj) {
        obj[k][K] = 0x0;
    }
}
arr[a0_0x130c1f(0x6)](function (v) {
    var _0x1b9af8 = a0_0x44dc;
    for (var i = 0x0; i < v['length']; i++) {
        for (var j = 0x0; j < v[_0x1b9af8(0x7)]; j++) {
            obj[v[i]][v[j]]++;
        }
    }
});
var ans = [];
for (var k in obj) {
    for (var K in obj) {
        obj[K][k] = 0x0;
        if (obj[k][K] >= f) {
            ans[a0_0x130c1f(0x8)]([
                k,
                K
            ]['sort']()[a0_0x130c1f(0x9)]('\x20'));
        }
    }
}
ans[a0_0x130c1f(0xa)]();
console[a0_0x130c1f(0xb)](ans['length']);
if (ans[a0_0x130c1f(0x7)] != 0x0)
    console[a0_0x130c1f(0xb)](ans[a0_0x130c1f(0x9)]('\x0a'));
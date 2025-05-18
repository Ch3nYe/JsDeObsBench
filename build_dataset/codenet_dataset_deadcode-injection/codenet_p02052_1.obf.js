function a0_0x42be(CjNFoI, key) {
    var stringArray = a0_0x173b();
    a0_0x42be = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x42be(CjNFoI, key);
}
var a0_0x1bcb7c = a0_0x42be;
var input = require('fs')[a0_0x1bcb7c(0x0)](a0_0x1bcb7c(0x1), a0_0x1bcb7c(0x2));
function a0_0x173b() {
    var _0x1ee7f6 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'forEach',
        'push',
        'length',
        'abs',
        'max',
        'log'
    ];
    a0_0x173b = function () {
        return _0x1ee7f6;
    };
    return a0_0x173b();
}
var arr = input[a0_0x1bcb7c(0x3)]()[a0_0x1bcb7c(0x4)]('\x0a');
var [h, w] = arr[a0_0x1bcb7c(0x5)]()['split']('\x20')[a0_0x1bcb7c(0x6)](Number);
var b = [];
for (var i = 0x0; i < h; i++) {
    arr[a0_0x1bcb7c(0x5)]()['split']('')[a0_0x1bcb7c(0x7)]((v, j) => {
        var _0xb29e92 = a0_0x42be;
        if (v == 'B')
            b[_0xb29e92(0x8)]([
                i,
                j
            ]);
    });
}
var max = 0x0;
for (var i = 0x0; i < b[a0_0x1bcb7c(0x9)]; i++) {
    for (var j = i + 0x1; j < b[a0_0x1bcb7c(0x9)]; j++) {
        var d = Math[a0_0x1bcb7c(0xa)](b[i][0x0] - b[j][0x0]) + Math[a0_0x1bcb7c(0xa)](b[i][0x1] - b[j][0x1]);
        max = Math[a0_0x1bcb7c(0xb)](max, d);
    }
}
console[a0_0x1bcb7c(0xc)](max);
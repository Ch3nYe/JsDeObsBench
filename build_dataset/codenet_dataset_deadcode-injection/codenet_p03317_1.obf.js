var a0_0x4e1fe9 = a0_0x4ed8;
function Main(input) {
    var _0x1a8859 = a0_0x4ed8;
    a = input[_0x1a8859(0x0)]('\x0a');
    b = a[0x0][_0x1a8859(0x0)]('\x20')[_0x1a8859(0x1)](Number);
    c = a[0x1][_0x1a8859(0x0)]('\x20')[_0x1a8859(0x1)](Number);
    N = b[0x0], K = b[0x1], r = 0x0;
    while (c[_0x1a8859(0x2)] > 0x1) {
        r++;
        d = [];
        for (i = 0x0; i < K; i++) {
            d['push'](c[i]);
        }
        for (i = 0x0; i < K; i++) {
            if (d[_0x1a8859(0x3)]()[0x0] !== c[i]) {
                c[i] = '';
            }
        }
        c = c[_0x1a8859(0x4)]('')['split']('')['map'](Number);
    }
    console[_0x1a8859(0x5)](r);
}
function a0_0x4ed8(pdNZtI, key) {
    var stringArray = a0_0x1b39();
    a0_0x4ed8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ed8(pdNZtI, key);
}
function a0_0x1b39() {
    var _0x4f0327 = [
        'split',
        'map',
        'length',
        'sort',
        'join',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x1b39 = function () {
        return _0x4f0327;
    };
    return a0_0x1b39();
}
Main(require('fs')[a0_0x4e1fe9(0x6)]('/dev/stdin', a0_0x4e1fe9(0x7)));
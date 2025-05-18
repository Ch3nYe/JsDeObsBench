function Main(arg) {
    var _0x115ec8 = a0_0xb4a1;
    var N = arg['split']('\x0a')[0x0] - 0x0;
    var A = arg['split']('\x0a')[0x1]['split']('\x20')[_0x115ec8(0x0)](v => v - 0x0);
    var tmp = new Set(A);
    var ans = [];
    ans[_0x115ec8(0x1)](N);
    for (var K = 0x2; K <= N; K++) {
        if (tmp['size'] < K) {
            ans[_0x115ec8(0x1)](0x0);
        } else {
            ans['push'](Math[_0x115ec8(0x2)](tmp[_0x115ec8(0x3)] / K));
        }
    }
    console[_0x115ec8(0x4)](ans[_0x115ec8(0x5)]('\x0a')['toString']());
    return;
}
function a0_0x2345() {
    var _0x463089 = [
        'map',
        'push',
        'floor',
        'size',
        'log',
        'join'
    ];
    a0_0x2345 = function () {
        return _0x463089;
    };
    return a0_0x2345();
}
function a0_0xb4a1(uAJNNH, key) {
    var stringArray = a0_0x2345();
    a0_0xb4a1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb4a1(uAJNNH, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x107f(qeAlid, key) {
    var stringArray = a0_0x3550();
    a0_0x107f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x107f(qeAlid, key);
}
var a0_0x114839 = a0_0x107f;
function Main(input) {
    var _0x421df0 = a0_0x107f;
    input = input['split']('\x0a');
    var H = input[0x0][_0x421df0(0x0)]('\x20')[_0x421df0(0x1)](a => parseInt(a));
    var W = H[0x1];
    var D = H[0x2];
    H = H[0x0];
    var A;
    var x = new Array(H * W + 0x1)[_0x421df0(0x2)](0x0)[_0x421df0(0x1)](a => new Array(0x2));
    for (var i = 0x0; i < H; i++) {
        A = input[i + 0x1][_0x421df0(0x0)]('\x20')[_0x421df0(0x1)](a => parseInt(a));
        for (var j = 0x0; j < W; j++) {
            x[A[j]][0x0] = i;
            x[A[j]][0x1] = j;
        }
    }
    var y = new Array(H * W + 0x1)['fill'](0x0);
    for (i = D + 0x1; i <= H * W; i++) {
        y[i] = y[i - D] + Math[_0x421df0(0x3)](x[i - D][0x0] - x[i][0x0]) + Math[_0x421df0(0x3)](x[i - D][0x1] - x[i][0x1]);
    }
    var Q = parseInt(input[H + 0x1]);
    var ans = new Array(Q)['fill'](0x0);
    for (i = 0x0; i < Q; i++) {
        var L = input[H + 0x2 + i]['split']('\x20')[_0x421df0(0x1)](a => parseInt(a));
        var R = L[0x1];
        L = L[0x0];
        ans[i] = y[R] - y[L];
    }
    console[_0x421df0(0x4)](ans['join']('\x0a'));
}
Main(require('fs')[a0_0x114839(0x5)](a0_0x114839(0x6), a0_0x114839(0x7)));
function a0_0x3550() {
    var _0x29d6d2 = [
        'split',
        'map',
        'fill',
        'abs',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3550 = function () {
        return _0x29d6d2;
    };
    return a0_0x3550();
}
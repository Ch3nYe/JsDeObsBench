var a0_0x3d9cac = a0_0x2a60;
function Main(input) {
    var _0x18194c = a0_0x2a60;
    input = input[_0x18194c(0x0)]()[_0x18194c(0x1)]('\x0a')[_0x18194c(0x2)](function (x) {
        var _0x21cb23 = a0_0x2a60;
        return x[_0x21cb23(0x1)]('\x20');
    });
    var H = parseInt(input[0x0][0x0], 0xa);
    var W = parseInt(input[0x0][0x1], 0xa);
    var ans = calc(H, W);
    console[_0x18194c(0x3)](ans);
}
function a0_0x2973() {
    var _0x2a371b = [
        'trim',
        'split',
        'map',
        'log',
        'max',
        'ceil',
        'abs',
        'floor',
        'min',
        'readFileSync',
        'utf8'
    ];
    a0_0x2973 = function () {
        return _0x2a371b;
    };
    return a0_0x2973();
}
function a0_0x2a60(xjEnjN, key) {
    var stringArray = a0_0x2973();
    a0_0x2a60 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a60(xjEnjN, key);
}
function calc(H, W) {
    var _0x474696 = a0_0x2a60;
    if (H % 0x3 === 0x0 || W % 0x3 === 0x0)
        return 0x0;
    var result = H * W;
    var tmp;
    var oldtmp = result;
    for (var i = 0x0; i <= W; i++) {
        tmp = Math[_0x474696(0x4)](Math['abs'](i * H - (W - i) * Math[_0x474696(0x5)](H / 0x2)), Math[_0x474696(0x6)](i * H - (W - i) * Math[_0x474696(0x7)](H / 0x2)), H % 0x2 * (W - i));
        result = Math[_0x474696(0x8)](result, tmp);
        if (tmp > oldtmp)
            break;
        oldtmp = tmp;
    }
    [W, H] = [
        H,
        W
    ];
    oldtmp = H * W;
    for (var i = 0x0; i <= W; i++) {
        tmp = Math['max'](Math['abs'](i * H - (W - i) * Math[_0x474696(0x5)](H / 0x2)), Math[_0x474696(0x6)](i * H - (W - i) * Math[_0x474696(0x7)](H / 0x2)), H % 0x2 * (W - i));
        result = Math[_0x474696(0x8)](result, tmp);
        if (tmp > oldtmp)
            break;
        oldtmp = tmp;
    }
    return Math[_0x474696(0x8)](result, H, W);
}
Main(require('fs')[a0_0x3d9cac(0x9)]('/dev/stdin', a0_0x3d9cac(0xa)));
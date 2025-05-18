function a0_0x9b62(ZVQyaR, key) {
    var stringArray = a0_0x7699();
    a0_0x9b62 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9b62(ZVQyaR, key);
}
var a0_0x126b1a = a0_0x9b62;
function a0_0x7699() {
    var _0xf9ae3b = [
        'abs',
        'ZlvUr',
        'split',
        'min',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x7699 = function () {
        return _0xf9ae3b;
    };
    return a0_0x7699();
}
function get_run_length(min, max) {
    var _0x410458 = a0_0x9b62;
    var result = 0x0;
    if (max > Math[_0x410458(0x0)](min)) {
        if (_0x410458(0x1) !== _0x410458(0x1)) {
            result = Math['abs'](min) + max * 0x2;
        } else {
            result = Math[_0x410458(0x0)](min * 0x2) + max;
        }
    } else {
        result = Math['abs'](min) + max * 0x2;
    }
    if (min >= 0x0) {
        result = max;
    }
    if (max <= 0x0) {
        result = Math[_0x410458(0x0)](min);
    }
    return result;
}
function main(input) {
    var _0x50cbb9 = a0_0x9b62;
    const lines = input[_0x50cbb9(0x2)]('\x0a');
    const N = parseInt(lines[0x0][_0x50cbb9(0x2)]('\x20')[0x0]);
    const K = parseInt(lines[0x0][_0x50cbb9(0x2)]('\x20')[0x1]);
    const Xs = lines[0x1][_0x50cbb9(0x2)]('\x20')['map'](x => parseInt(x));
    var result = 0x989680;
    for (var i = 0x0; i < N - K + 0x1; i++) {
        var min = Xs[i];
        var max = Xs[i + K - 0x1];
        var tmp = get_run_length(min, max);
        result = Math[_0x50cbb9(0x3)](tmp, result);
    }
    console[_0x50cbb9(0x4)](result);
}
main(require('fs')['readFileSync'](a0_0x126b1a(0x5), a0_0x126b1a(0x6)));
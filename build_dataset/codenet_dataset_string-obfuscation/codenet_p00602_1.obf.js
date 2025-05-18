var a0_0x38b358 = a0_0x1328;
function a0_0x4d16() {
    var _0x57f9d3 = [
        '/dev/stdin',
        'map',
        '684480QBHuty',
        '5241369XsLnpB',
        'utf8',
        '5223354TmLoHA',
        '12835125fYtaLP',
        '45RCTAcP',
        'length',
        'split',
        'forEach',
        '1JhhDcj',
        '162612ggPivX',
        'trim',
        '14onTjKW',
        '2207200AtfNoS',
        '1159348lBqqWS'
    ];
    a0_0x4d16 = function () {
        return _0x57f9d3;
    };
    return a0_0x4d16();
}
function a0_0x1328(roBqWp, key) {
    var stringArray = a0_0x4d16();
    a0_0x1328 = function (index, key) {
        index = index - 0x104;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1328(roBqWp, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2f8f9a = a0_0x1328;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2f8f9a(0x10e)) / 0x1 * (parseInt(_0x2f8f9a(0x113)) / 0x2) + -parseInt(_0x2f8f9a(0x106)) / 0x3 + parseInt(_0x2f8f9a(0x10f)) / 0x4 * (parseInt(_0x2f8f9a(0x10a)) / 0x5) + -parseInt(_0x2f8f9a(0x108)) / 0x6 * (-parseInt(_0x2f8f9a(0x111)) / 0x7) + -parseInt(_0x2f8f9a(0x112)) / 0x8 + parseInt(_0x2f8f9a(0x109)) / 0x9 + parseInt(_0x2f8f9a(0x105)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4d16, 0xf3dd7));
var input = require('fs')['readFileSync'](a0_0x38b358(0x114), a0_0x38b358(0x107));
var arr = input[a0_0x38b358(0x110)]()[a0_0x38b358(0x10c)]('\x0a');
arr[a0_0x38b358(0x10d)](function (value) {
    var _0x594398 = a0_0x38b358;
    var vd = value[_0x594398(0x10c)]('\x20')[_0x594398(0x104)](Number);
    var v = vd[0x0];
    var d = vd[0x1];
    var f = [];
    f[0x0] = 0x1;
    f[0x1] = 0x2;
    for (var i = 0x2; i <= v; i++) {
        f[i] = (f[i - 0x1] + f[i - 0x2]) % 0x3e9;
    }
    f['shift']();
    f['sort'](function (a, b) {
        return a - b;
    });
    var cnt = 0x0;
    for (var i = 0x1; i < f['length']; i++) {
        if (f[i] - f[i - 0x1] < d)
            cnt++;
    }
    console['log'](f[_0x594398(0x10b)] - cnt);
});
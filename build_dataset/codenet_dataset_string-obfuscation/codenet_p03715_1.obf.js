var a0_0x597163 = a0_0x3449;
function a0_0x3449(Hsnpej, key) {
    var stringArray = a0_0x5a89();
    a0_0x3449 = function (index, key) {
        index = index - 0x17f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3449(Hsnpej, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5a081a = a0_0x3449;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5a081a(0x184)) / 0x1 + -parseInt(_0x5a081a(0x18e)) / 0x2 + parseInt(_0x5a081a(0x187)) / 0x3 + parseInt(_0x5a081a(0x18d)) / 0x4 * (parseInt(_0x5a081a(0x18f)) / 0x5) + -parseInt(_0x5a081a(0x17f)) / 0x6 + parseInt(_0x5a081a(0x18c)) / 0x7 + -parseInt(_0x5a081a(0x182)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5a89, 0x659f9));
function Main(input) {
    var _0x4cdc10 = a0_0x3449;
    input = input[_0x4cdc10(0x181)]()[_0x4cdc10(0x180)]('\x0a')['map'](function (x) {
        var _0x2ccc63 = _0x4cdc10;
        return x[_0x2ccc63(0x180)]('\x20');
    });
    var H = parseInt(input[0x0][0x0], 0xa);
    var W = parseInt(input[0x0][0x1], 0xa);
    var ans = calc(H, W);
    console[_0x4cdc10(0x183)](ans);
}
function calc(H, W) {
    var _0x5a669c = a0_0x3449;
    if (H % 0x3 === 0x0 || W % 0x3 === 0x0)
        return 0x0;
    var result = H * W;
    var tmp;
    var oldtmp = result;
    for (var i = 0x0; i <= W; i++) {
        tmp = Math[_0x5a669c(0x18b)](Math[_0x5a669c(0x185)](i * H - (W - i) * Math[_0x5a669c(0x189)](H / 0x2)), Math[_0x5a669c(0x185)](i * H - (W - i) * Math[_0x5a669c(0x188)](H / 0x2)), H % 0x2 * (W - i));
        result = Math['min'](result, tmp);
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
        tmp = Math['max'](Math[_0x5a669c(0x185)](i * H - (W - i) * Math[_0x5a669c(0x189)](H / 0x2)), Math['abs'](i * H - (W - i) * Math['floor'](H / 0x2)), H % 0x2 * (W - i));
        result = Math['min'](result, tmp);
        if (tmp > oldtmp)
            break;
        oldtmp = tmp;
    }
    return Math['min'](result, H, W);
}
Main(require('fs')[a0_0x597163(0x18a)](a0_0x597163(0x186), 'utf8'));
function a0_0x5a89() {
    var _0x2e8fd1 = [
        'log',
        '295155koBUDE',
        'abs',
        '/dev/stdin',
        '936996RMLFSu',
        'floor',
        'ceil',
        'readFileSync',
        'max',
        '2365426fGfIgw',
        '4irKKiO',
        '277670DqcApj',
        '2469765PjLUki',
        '2200074SDofkm',
        'split',
        'trim',
        '4140760njxEbK'
    ];
    a0_0x5a89 = function () {
        return _0x2e8fd1;
    };
    return a0_0x5a89();
}
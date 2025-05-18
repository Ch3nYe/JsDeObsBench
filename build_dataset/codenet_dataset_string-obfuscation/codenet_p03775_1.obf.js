var a0_0x3dfecf = a0_0xa248;
(function (stringArrayFunction, comparisonValue) {
    var _0xeda88c = a0_0xa248;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xeda88c(0x1de)) / 0x1 * (parseInt(_0xeda88c(0x1e9)) / 0x2) + parseInt(_0xeda88c(0x1e1)) / 0x3 + -parseInt(_0xeda88c(0x1dc)) / 0x4 + -parseInt(_0xeda88c(0x1df)) / 0x5 * (-parseInt(_0xeda88c(0x1e3)) / 0x6) + parseInt(_0xeda88c(0x1e7)) / 0x7 + parseInt(_0xeda88c(0x1ed)) / 0x8 + -parseInt(_0xeda88c(0x1e6)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39ba, 0x3bf01));
function divisor(n) {
    var _0xc2264d = a0_0xa248;
    var ret = [];
    for (var i = 0x1; i * i <= n; i++) {
        if (n % i == 0x0) {
            ret[_0xc2264d(0x1ec)](i);
            if (i * i != n)
                ret['push'](n / i);
        }
    }
    return ret;
}
function a0_0xa248(ukIMQG, key) {
    var stringArray = a0_0x39ba();
    a0_0xa248 = function (index, key) {
        index = index - 0x1dc;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa248(ukIMQG, key);
}
function f(a, b) {
    var _0x540e3f = a0_0xa248;
    return Math['max'](('' + a)[_0x540e3f(0x1dd)], ('' + b)['length']);
}
function a0_0x39ba() {
    var _0x5ce679 = [
        '341163eHlggq',
        '2559095caqUoN',
        'readFileSync',
        '603102ZHcXKw',
        'utf8',
        'floor',
        'push',
        '1739440shIARl',
        '1061352rlkvAi',
        'length',
        '1plBpDx',
        '5bWLVRx',
        '/dev/stdin',
        '29097ELCrep',
        'log',
        '1545522IpuLye',
        'split',
        'sort'
    ];
    a0_0x39ba = function () {
        return _0x5ce679;
    };
    return a0_0x39ba();
}
function main(input) {
    var _0x5bd948 = a0_0xa248;
    var inputs = input[_0x5bd948(0x1e4)]('\x0a');
    var n = parseInt(inputs[0x0], 0xa);
    var divisors = divisor(n)[_0x5bd948(0x1e5)]((a, b) => a - b);
    var surplus = divisors[_0x5bd948(0x1dd)] % 0x2;
    var lastIndex = divisors[_0x5bd948(0x1dd)] - 0x1;
    var halfLen = Math[_0x5bd948(0x1eb)](divisors[_0x5bd948(0x1dd)] / 0x2);
    var minF = ('' + n)['length'];
    for (var i = 0x0; i < halfLen - surplus; i++) {
        minF = Math['min'](minF, f(divisors[i], divisors[lastIndex - i]));
    }
    if (surplus == 0x1)
        minF = Math['min'](minF, ('' + divisors[halfLen])[_0x5bd948(0x1dd)]);
    console[_0x5bd948(0x1e2)](minF);
}
main(require('fs')[a0_0x3dfecf(0x1e8)](a0_0x3dfecf(0x1e0), a0_0x3dfecf(0x1ea)));
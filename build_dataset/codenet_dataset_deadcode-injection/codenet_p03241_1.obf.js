var a0_0x123573 = a0_0x524c;
function Main(input) {
    var _0x2ffbb5 = a0_0x524c;
    input = input[_0x2ffbb5(0x0)]('\x0a');
    tmp = input[0x0]['split']('\x20');
    var N = parseInt(tmp[0x0], 0xa);
    var M = parseInt(tmp[0x1], 0xa);
    var divisors = divisor(M);
    var max = 0x0;
    for (var i = 0x0; i < divisors[_0x2ffbb5(0x1)]; i++) {
        var d = divisors[i];
        if (M / d >= N) {
            if (_0x2ffbb5(0x2) === _0x2ffbb5(0x2)) {
                max = Math['max'](max, d);
            } else {
                input = input['split']('\x0a');
                tmp = input[0x0][_0x2ffbb5(0x0)]('\x20');
                var N = parseInt(tmp[0x0], 0xa);
                var M = parseInt(tmp[0x1], 0xa);
                var divisors = divisor(M);
                var max = 0x0;
                for (var i = 0x0; i < divisors[_0x2ffbb5(0x1)]; i++) {
                    var d = divisors[i];
                    if (M / d >= N) {
                        max = Math[_0x2ffbb5(0x3)](max, d);
                    }
                }
                console[_0x2ffbb5(0x4)]('%d', max);
            }
        }
    }
    console[_0x2ffbb5(0x4)]('%d', max);
}
function a0_0x3e14() {
    var _0x4b281f = [
        'split',
        'length',
        'kMWDv',
        'max',
        'log',
        'CThXJ',
        'push',
        'AYlIR',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3e14 = function () {
        return _0x4b281f;
    };
    return a0_0x3e14();
}
function a0_0x524c(JsrIFu, key) {
    var stringArray = a0_0x3e14();
    a0_0x524c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x524c(JsrIFu, key);
}
function divisor(n) {
    var _0x5bc6e7 = a0_0x524c;
    var res = [];
    for (var i = 0x1; i * i <= n; i++) {
        if (n % i == 0x0) {
            if (_0x5bc6e7(0x5) !== 'CThXJ') {
                if (n % i == 0x0) {
                    res[_0x5bc6e7(0x6)](i);
                    if (n / i != i) {
                        res['push'](n / i);
                    }
                }
            } else {
                res[_0x5bc6e7(0x6)](i);
                if (n / i != i) {
                    if (_0x5bc6e7(0x7) !== _0x5bc6e7(0x7)) {
                        res[_0x5bc6e7(0x6)](n / i);
                    } else {
                        res['push'](n / i);
                    }
                }
            }
        }
    }
    return res;
}
Main(require('fs')[a0_0x123573(0x8)](a0_0x123573(0x9), 'utf8'));
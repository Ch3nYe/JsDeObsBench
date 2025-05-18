var a0_0x4f8910 = a0_0x28e1;
function a0_0x5e38() {
    var _0x5b0e7f = [
        '9809268gkYMSN',
        'utf8',
        '1434235ZqnPsA',
        '/dev/stdin',
        '2891OhbtsW',
        '856CPSjWr',
        'push',
        '172siXddS',
        '23510XgOThV',
        'sqrt',
        'join',
        '11nojfcq',
        '99AcHCeB',
        'readFileSync',
        '33342ZIqSGj',
        '567288FEYmFr',
        '83756DUzJsu',
        'split',
        'trim',
        '4BOwKLI'
    ];
    a0_0x5e38 = function () {
        return _0x5b0e7f;
    };
    return a0_0x5e38();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4d8569 = a0_0x28e1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4d8569(0x1b5)) / 0x1 * (parseInt(_0x4d8569(0x1b2)) / 0x2) + -parseInt(_0x4d8569(0x1b0)) / 0x3 * (parseInt(_0x4d8569(0x1bd)) / 0x4) + parseInt(_0x4d8569(0x1b8)) / 0x5 + -parseInt(_0x4d8569(0x1b1)) / 0x6 + -parseInt(_0x4d8569(0x1ba)) / 0x7 * (-parseInt(_0x4d8569(0x1bb)) / 0x8) + -parseInt(_0x4d8569(0x1ae)) / 0x9 * (parseInt(_0x4d8569(0x1be)) / 0xa) + -parseInt(_0x4d8569(0x1c1)) / 0xb * (-parseInt(_0x4d8569(0x1b6)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5e38, 0x5d6be));
function a0_0x28e1(jmCvcK, key) {
    var stringArray = a0_0x5e38();
    a0_0x28e1 = function (index, key) {
        index = index - 0x1ae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28e1(jmCvcK, key);
}
function Main(input) {
    var _0x55d4c0 = a0_0x28e1;
    input = input[_0x55d4c0(0x1b4)]()[_0x55d4c0(0x1b3)]('\x0a')['map'](function (x) {
        var _0x399e6d = _0x55d4c0;
        return x[_0x399e6d(0x1b3)]('\x20');
    });
    var n = parseInt(input[0x0][0x0], 0xa);
    var originalN = n;
    var v_ans = [];
    var start = 0x2;
    whole_loop:
        while (!![]) {
            for (var i = start; i <= Math[_0x55d4c0(0x1bf)](n); i++) {
                if (n % i === 0x0) {
                    v_ans[_0x55d4c0(0x1bc)](i);
                    n /= i;
                    start = i;
                    continue whole_loop;
                }
            }
            v_ans['push'](n);
            break;
        }
    console['log'](originalN['toString']() + ':\x20' + v_ans[_0x55d4c0(0x1c0)]('\x20'));
}
Main(require('fs')[a0_0x4f8910(0x1af)](a0_0x4f8910(0x1b9), a0_0x4f8910(0x1b7)));
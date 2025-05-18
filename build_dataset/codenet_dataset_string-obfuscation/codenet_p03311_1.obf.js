function a0_0x4813() {
    var _0x180e5f = [
        'concat',
        '/dev/stdin',
        'length',
        '257064spfNMA',
        'abs',
        'map',
        '816GFvZMA',
        'reduce',
        'log',
        'sort',
        '2955XEkGVf',
        '308ZhaWjc',
        '669919OUluTh',
        '1243368MTCdHh',
        '786NBZwFD',
        'pop',
        '11394rZCCwr',
        '18406400FfEigz',
        '7984809ueqLWr',
        'utf8',
        'split'
    ];
    a0_0x4813 = function () {
        return _0x180e5f;
    };
    return a0_0x4813();
}
var a0_0x4ac36d = a0_0x323b;
(function (stringArrayFunction, comparisonValue) {
    var _0x3985fb = a0_0x323b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3985fb(0x1ad)) / 0x1 + parseInt(_0x3985fb(0x1b1)) / 0x2 * (parseInt(_0x3985fb(0x1a7)) / 0x3) + parseInt(_0x3985fb(0x1ae)) / 0x4 + parseInt(_0x3985fb(0x1ab)) / 0x5 * (parseInt(_0x3985fb(0x1af)) / 0x6) + parseInt(_0x3985fb(0x1ac)) / 0x7 * (-parseInt(_0x3985fb(0x1a4)) / 0x8) + -parseInt(_0x3985fb(0x1b3)) / 0x9 + parseInt(_0x3985fb(0x1b2)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4813, 0xc525b));
function Main(input) {
    var _0x31b3c6 = a0_0x323b;
    input = input[_0x31b3c6(0x1a0)]('\x0a');
    if (input[input[_0x31b3c6(0x1a3)] - 0x1] === '') {
        input[_0x31b3c6(0x1b0)]();
    }
    const N = input[0x0][_0x31b3c6(0x1a0)]('\x20')[0x0] - 0x0;
    var array = input[0x1][_0x31b3c6(0x1a0)]('\x20')[_0x31b3c6(0x1a6)]((e, i) => {
        return e - i - 0x1;
    })[_0x31b3c6(0x1aa)]((a, b) => {
        return a - b;
    });
    console[_0x31b3c6(0x1a9)](array[_0x31b3c6(0x1a8)]((acc, cur) => {
        var _0x222ca3 = _0x31b3c6;
        return acc + Math[_0x222ca3(0x1a5)](cur - array[Math['floor'](array[_0x222ca3(0x1a3)] / 0x2)]);
    }, 0x0));
}
Main(require('fs')['readFileSync'](a0_0x4ac36d(0x1a2), a0_0x4ac36d(0x19f)));
function a0_0x323b(cPRQpj, key) {
    var stringArray = a0_0x4813();
    a0_0x323b = function (index, key) {
        index = index - 0x19f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x323b(cPRQpj, key);
}
function permutation(n, k) {
    var _0xf4e9fa = a0_0x4ac36d;
    var ret = [[]];
    var next;
    for (var i = 0x0; i < k; i++) {
        next = [];
        ret['forEach'](e => {
            var _0x44022f = a0_0x323b;
            for (var k = 0x1; k <= n; k++) {
                if (!e['includes'](k)) {
                    next['push'](e[_0x44022f(0x1a1)]([k]));
                }
            }
        });
        ret = next[_0xf4e9fa(0x1a1)]([]);
    }
    return ret;
}
var a0_0x28bba9 = a0_0x2748;
(function (stringArrayFunction, comparisonValue) {
    var _0x3f98bd = a0_0x2748;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3f98bd(0x155)) / 0x1 + parseInt(_0x3f98bd(0x14d)) / 0x2 + -parseInt(_0x3f98bd(0x14f)) / 0x3 * (-parseInt(_0x3f98bd(0x152)) / 0x4) + -parseInt(_0x3f98bd(0x151)) / 0x5 + -parseInt(_0x3f98bd(0x148)) / 0x6 + -parseInt(_0x3f98bd(0x149)) / 0x7 + -parseInt(_0x3f98bd(0x14b)) / 0x8 * (-parseInt(_0x3f98bd(0x154)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1b7c, 0x78ff7));
function Main(input) {
    var _0x393887 = a0_0x2748;
    input = input[_0x393887(0x157)]('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0][_0x393887(0x157)]('\x20')[0x0] - 0x0;
    const K = input[0x0]['split']('\x20')[0x1] - 0x0;
    var A = input[0x1][_0x393887(0x157)]('\x20')[_0x393887(0x153)](e => {
        return e - 0x0;
    })['sort']((a, b) => {
        return a - b;
    });
    var F = input[0x2][_0x393887(0x157)]('\x20')[_0x393887(0x153)](e => {
        return e - 0x0;
    })['sort']((a, b) => {
        return b - a;
    });
    var possible = 0x0;
    for (var i = 0x0; i < N; i++) {
        possible = Math[_0x393887(0x14e)](possible, A[i] * F[i]);
    }
    var impossible = -0x1;
    var temp;
    var sum;
    while (possible - impossible > 0x1) {
        temp = Math['ceil']((impossible + possible) / 0x2);
        sum = 0x0;
        for (var i = 0x0; i < N; i++) {
            sum += Math[_0x393887(0x14e)](0x0, A[i] - Math[_0x393887(0x14a)](temp / F[i]));
        }
        if (sum <= K) {
            possible = temp;
        } else {
            impossible = temp;
        }
    }
    console[_0x393887(0x156)](possible);
}
Main(require('fs')[a0_0x28bba9(0x150)]('/dev/stdin', a0_0x28bba9(0x14c)));
function a0_0x2748(YpKUoa, key) {
    var stringArray = a0_0x1b7c();
    a0_0x2748 = function (index, key) {
        index = index - 0x148;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2748(YpKUoa, key);
}
function a0_0x1b7c() {
    var _0x3a9539 = [
        'readFileSync',
        '730940FcAzwz',
        '4rjjbiX',
        'map',
        '18gLxVVg',
        '692161GXNcOz',
        'log',
        'split',
        '5474688PjFAoN',
        '1218203CYcxIz',
        'floor',
        '7397456yaqCJq',
        'utf8',
        '734936uCViwi',
        'max',
        '610803DmxBJV'
    ];
    a0_0x1b7c = function () {
        return _0x3a9539;
    };
    return a0_0x1b7c();
}
function a0_0x3666(dgAEan, key) {
    var stringArray = a0_0xb8fc();
    a0_0x3666 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3666(dgAEan, key);
}
var a0_0x15536d = a0_0x3666;
function a0_0xb8fc() {
    var _0x346290 = [
        'split',
        'length',
        'pop',
        'map',
        'sort',
        'kSbuj',
        'GvIKv',
        'max',
        'hFFNF',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0xb8fc = function () {
        return _0x346290;
    };
    return a0_0xb8fc();
}
function Main(input) {
    var _0x35c010 = a0_0x3666;
    input = input[_0x35c010(0x0)]('\x0a');
    if (input[input[_0x35c010(0x1)] - 0x1] === '') {
        input[_0x35c010(0x2)]();
    }
    const N = input[0x0][_0x35c010(0x0)]('\x20')[0x0] - 0x0;
    const K = input[0x0][_0x35c010(0x0)]('\x20')[0x1] - 0x0;
    var A = input[0x1]['split']('\x20')[_0x35c010(0x3)](e => {
        return e - 0x0;
    })[_0x35c010(0x4)]((a, b) => {
        return a - b;
    });
    var F = input[0x2][_0x35c010(0x0)]('\x20')[_0x35c010(0x3)](e => {
        var _0x269760 = a0_0x3666;
        if (_0x269760(0x5) !== 'kSbuj') {
            return b - a;
        } else {
            return e - 0x0;
        }
    })[_0x35c010(0x4)]((a, b) => {
        return b - a;
    });
    var possible = 0x0;
    for (var i = 0x0; i < N; i++) {
        if (_0x35c010(0x6) === 'GvIKv') {
            possible = Math[_0x35c010(0x7)](possible, A[i] * F[i]);
        } else {
            input[_0x35c010(0x2)]();
        }
    }
    var impossible = -0x1;
    var temp;
    var sum;
    while (possible - impossible > 0x1) {
        temp = Math['ceil']((impossible + possible) / 0x2);
        sum = 0x0;
        for (var i = 0x0; i < N; i++) {
            if (_0x35c010(0x8) !== 'JDldL') {
                sum += Math['max'](0x0, A[i] - Math['floor'](temp / F[i]));
            } else {
                possible = temp;
            }
        }
        if (sum <= K) {
            possible = temp;
        } else {
            impossible = temp;
        }
    }
    console[_0x35c010(0x9)](possible);
}
Main(require('fs')[a0_0x15536d(0xa)](a0_0x15536d(0xb), 'utf8'));
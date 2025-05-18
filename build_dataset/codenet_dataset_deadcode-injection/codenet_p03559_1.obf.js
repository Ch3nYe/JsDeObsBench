var a0_0x332026 = a0_0x4f00;
function Main(input) {
    var _0x10a8ae = a0_0x4f00;
    input = input[_0x10a8ae(0x0)]()[_0x10a8ae(0x1)]('\x0a')['map'](function (x) {
        var _0x482f2f = a0_0x4f00;
        if (_0x482f2f(0x2) !== _0x482f2f(0x3)) {
            return x[_0x482f2f(0x1)]('\x20');
        } else {
            return x[_0x482f2f(0x1)]('\x20');
        }
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var vec_A = input[0x1][_0x10a8ae(0x4)](e => parseInt(e, 0xa));
    var vec_B = input[0x2]['map'](e => parseInt(e, 0xa));
    var vec_C = input[0x3][_0x10a8ae(0x4)](e => parseInt(e, 0xa));
    function compareFunc(a, b) {
        var _0x414cf4 = a0_0x4f00;
        if ('BlgSL' === _0x414cf4(0x5)) {
            while (s < N && vec_B[s] > vec_A[i]) {
                while (t < N - 0x1 && vec_C[t + 0x1] > vec_B[s]) {
                    t++;
                }
                if (s > 0x0)
                    tmpAdj = vec_sumB[s - 0x1];
                else
                    tmpAdj = 0x0;
                vec_sumB[s] = tmpAdj + t + 0x1;
                s++;
            }
            s = Math[_0x414cf4(0x6)](0x0, s - 0x1);
            ans += vec_sumB[s];
        } else {
            return b - a;
        }
    }
    vec_A['sort'](compareFunc);
    vec_B[_0x10a8ae(0x7)](compareFunc);
    vec_C[_0x10a8ae(0x7)](compareFunc);
    var s = 0x0;
    var t = -0x1;
    var vec_sumB = Array[_0x10a8ae(0x8)]({ 'length': N }, () => 0x0);
    var tmpAdj = 0x0;
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        while (s < N && vec_B[s] > vec_A[i]) {
            if (_0x10a8ae(0x9) === _0x10a8ae(0x9)) {
                while (t < N - 0x1 && vec_C[t + 0x1] > vec_B[s]) {
                    if (_0x10a8ae(0xa) !== _0x10a8ae(0xb)) {
                        t++;
                    } else {
                        t++;
                    }
                }
                if (s > 0x0)
                    tmpAdj = vec_sumB[s - 0x1];
                else
                    tmpAdj = 0x0;
                vec_sumB[s] = tmpAdj + t + 0x1;
                s++;
            } else {
                while (t < N - 0x1 && vec_C[t + 0x1] > vec_B[s]) {
                    t++;
                }
                if (s > 0x0)
                    tmpAdj = vec_sumB[s - 0x1];
                else
                    tmpAdj = 0x0;
                vec_sumB[s] = tmpAdj + t + 0x1;
                s++;
            }
        }
        s = Math[_0x10a8ae(0x6)](0x0, s - 0x1);
        ans += vec_sumB[s];
    }
    console[_0x10a8ae(0xc)](ans);
}
Main(require('fs')[a0_0x332026(0xd)](a0_0x332026(0xe), a0_0x332026(0xf)));
function a0_0x4f00(LWLcAr, key) {
    var stringArray = a0_0x4336();
    a0_0x4f00 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4f00(LWLcAr, key);
}
function a0_0x4336() {
    var _0x4012c7 = [
        'trim',
        'split',
        'axKyc',
        'YKquA',
        'map',
        'UjVsc',
        'max',
        'sort',
        'from',
        'ZLWDj',
        'gUTXv',
        'KAwor',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4336 = function () {
        return _0x4012c7;
    };
    return a0_0x4336();
}
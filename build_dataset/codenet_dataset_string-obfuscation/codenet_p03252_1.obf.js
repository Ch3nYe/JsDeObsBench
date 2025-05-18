function a0_0x32e7(GZqMNP, key) {
    var stringArray = a0_0x4c91();
    a0_0x32e7 = function (index, key) {
        index = index - 0x85;
        var value = stringArray[index];
        return value;
    };
    return a0_0x32e7(GZqMNP, key);
}
function a0_0x4c91() {
    var _0xe905f1 = [
        '26831976uWLdEL',
        '312250MwCVJS',
        'Yes',
        '10014IowOqD',
        'substr',
        'value',
        'split',
        '1091929pmCzMU',
        'length',
        '5GxJAbm',
        '8ZLHSNa',
        '11223288XFSxlQ',
        '2mDyFIr',
        '77TpzEJq',
        '1890AyqXLX',
        '3307983zCrzoU',
        '4355044egXvMp'
    ];
    a0_0x4c91 = function () {
        return _0xe905f1;
    };
    return a0_0x4c91();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4082ed = a0_0x32e7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4082ed(0x90)) / 0x1 + -parseInt(_0x4082ed(0x95)) / 0x2 * (-parseInt(_0x4082ed(0x87)) / 0x3) + parseInt(_0x4082ed(0x88)) / 0x4 * (-parseInt(_0x4082ed(0x92)) / 0x5) + -parseInt(_0x4082ed(0x8c)) / 0x6 * (-parseInt(_0x4082ed(0x86)) / 0x7) + -parseInt(_0x4082ed(0x93)) / 0x8 * (-parseInt(_0x4082ed(0x94)) / 0x9) + parseInt(_0x4082ed(0x8a)) / 0xa * (parseInt(_0x4082ed(0x85)) / 0xb) + -parseInt(_0x4082ed(0x89)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4c91, 0xbfe94));
function Main(input) {
    var _0x491cf7 = a0_0x32e7;
    input = input[_0x491cf7(0x8f)]('\x0a');
    var S = input[0x0];
    var T = input[0x1];
    var ans = _0x491cf7(0x8b);
    while (T[_0x491cf7(0x91)] != 0x0) {
        for (i = 0x1; i < T[_0x491cf7(0x91)]; i++) {
            if (T['substr'](0x0, 0x1) == T[_0x491cf7(0x8d)](i, 0x1)) {
                if (S[_0x491cf7(0x8d)](0x0, 0x1) != S[_0x491cf7(0x8d)](i, 0x1)) {
                    ans = 'No';
                    break;
                }
            }
            if (S[_0x491cf7(0x8d)](0x0, 0x1) == S[_0x491cf7(0x8d)](i, 0x1)) {
                if (T[_0x491cf7(0x8d)](0x0, 0x1) != T['substr'](i, 0x1)) {
                    ans = 'No';
                    break;
                }
            }
        }
        if (ans == 'No') {
            break;
        }
        S = S[_0x491cf7(0x8d)](0x1);
        T = T[_0x491cf7(0x8d)](0x1);
    }
    console['log']('%s', ans);
}
function debug() {
    var _0x2df07d = a0_0x32e7;
    var input = document['getElementById']('input')[_0x2df07d(0x8e)];
    Main(input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
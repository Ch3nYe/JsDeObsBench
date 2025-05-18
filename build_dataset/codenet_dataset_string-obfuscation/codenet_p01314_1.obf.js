var a0_0x1878c6 = a0_0x4671;
(function (stringArrayFunction, comparisonValue) {
    var _0x89a50a = a0_0x4671;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x89a50a(0x9b)) / 0x1 * (-parseInt(_0x89a50a(0xa2)) / 0x2) + -parseInt(_0x89a50a(0xa8)) / 0x3 * (-parseInt(_0x89a50a(0xa3)) / 0x4) + -parseInt(_0x89a50a(0xa7)) / 0x5 * (-parseInt(_0x89a50a(0xa4)) / 0x6) + -parseInt(_0x89a50a(0xa0)) / 0x7 + parseInt(_0x89a50a(0x9d)) / 0x8 + parseInt(_0x89a50a(0xa6)) / 0x9 + -parseInt(_0x89a50a(0xa1)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3383, 0x92815));
function Main(input) {
    var _0x2642fa = a0_0x4671;
    input = input[_0x2642fa(0x9f)]('\x0a');
    for (var i = 0x0; 0x1; i++) {
        var n = parseInt(input[i], 0xa);
        var ans = 0x0;
        if (n == 0x0)
            break;
        for (var j = 0x2; j < n; j++) {
            if (n - j * (j - 0x1) / 0x2 > 0x0 && (n - j * (j - 0x1) / 0x2) % j == 0x0) {
                ans++;
            }
        }
        console[_0x2642fa(0xa5)](ans);
    }
}
function a0_0x4671(NMHszg, key) {
    var stringArray = a0_0x3383();
    a0_0x4671 = function (index, key) {
        index = index - 0x9a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4671(NMHszg, key);
}
Main(require('fs')[a0_0x1878c6(0x9a)](a0_0x1878c6(0x9e), a0_0x1878c6(0x9c)));
function a0_0x3383() {
    var _0x52687c = [
        '6024599mHNlKN',
        '15923150JIGmML',
        '246866lnOPtg',
        '3242916QgXEeC',
        '7181916HyelLq',
        'log',
        '4878468RoQjBV',
        '5kLXKby',
        '3WiTQkl',
        'readFileSync',
        '1zpxcib',
        'utf8',
        '5013784idvQzP',
        '/dev/stdin',
        'split'
    ];
    a0_0x3383 = function () {
        return _0x52687c;
    };
    return a0_0x3383();
}
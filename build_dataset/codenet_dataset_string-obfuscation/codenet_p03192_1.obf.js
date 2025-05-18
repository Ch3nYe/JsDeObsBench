var a0_0x25e9fd = a0_0x3557;
(function (stringArrayFunction, comparisonValue) {
    var _0x1d3047 = a0_0x3557;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1d3047(0x98)) / 0x1 * (parseInt(_0x1d3047(0x91)) / 0x2) + -parseInt(_0x1d3047(0x87)) / 0x3 + -parseInt(_0x1d3047(0x8d)) / 0x4 * (parseInt(_0x1d3047(0x8e)) / 0x5) + -parseInt(_0x1d3047(0x92)) / 0x6 + -parseInt(_0x1d3047(0x94)) / 0x7 * (parseInt(_0x1d3047(0x88)) / 0x8) + -parseInt(_0x1d3047(0x8b)) / 0x9 * (-parseInt(_0x1d3047(0x8a)) / 0xa) + parseInt(_0x1d3047(0x93)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1cd5, 0x941ba));
function Main(input) {
    var _0x23f07a = a0_0x3557;
    input = input['split']('\x0a');
    S = input[0x0][_0x23f07a(0x96)]('');
    var ans = 0x0;
    for (i = 0x0; i < S['length']; i++) {
        if (S[i] == '2') {
            ans++;
        }
    }
    console[_0x23f07a(0x90)]('%s', ans);
}
function a0_0x1cd5() {
    var _0x222f47 = [
        'utf8',
        'split',
        'value',
        '192419myHTfD',
        '1827093uGKcIS',
        '2253312XZcPve',
        'readFileSync',
        '1709530IFGJLC',
        '9eWDzfU',
        'getElementById',
        '732rlrLzJ',
        '27290Oadkfp',
        'input',
        'log',
        '2YwmtEc',
        '961782oDAZBy',
        '31420532FJVtOb',
        '21nSRtcG'
    ];
    a0_0x1cd5 = function () {
        return _0x222f47;
    };
    return a0_0x1cd5();
}
function debug() {
    var _0x5abcd0 = a0_0x3557;
    var input = document[_0x5abcd0(0x8c)](_0x5abcd0(0x8f))[_0x5abcd0(0x97)];
    Main(input);
}
function a0_0x3557(ONkaXC, key) {
    var stringArray = a0_0x1cd5();
    a0_0x3557 = function (index, key) {
        index = index - 0x87;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3557(ONkaXC, key);
}
Main(require('fs')[a0_0x25e9fd(0x89)]('/dev/stdin', a0_0x25e9fd(0x95)));
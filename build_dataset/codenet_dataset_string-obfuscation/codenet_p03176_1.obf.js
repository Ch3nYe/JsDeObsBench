function a0_0x42d7(NXMdEH, key) {
    var stringArray = a0_0x4679();
    a0_0x42d7 = function (index, key) {
        index = index - 0x70;
        var value = stringArray[index];
        return value;
    };
    return a0_0x42d7(NXMdEH, key);
}
function a0_0x4679() {
    var _0x21fccc = [
        '276082aZmqES',
        'innerHTML',
        'map',
        'split',
        'utf8',
        'input',
        'result',
        'max',
        'log',
        '801444uxRPoJ',
        '6ydUlCe',
        '17507njaGSE',
        '3981990bkHSdR',
        '81bSqWcp',
        'readFileSync',
        '1483675nBBcfy',
        'fill',
        'output',
        '8iYUQoG',
        '/dev/stdin',
        '37980xLKdEb',
        '11133xnCucw',
        'value'
    ];
    a0_0x4679 = function () {
        return _0x21fccc;
    };
    return a0_0x4679();
}
var a0_0x5af7a7 = a0_0x42d7;
(function (stringArrayFunction, comparisonValue) {
    var _0x208813 = a0_0x42d7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x208813(0x7f)) / 0x1 + -parseInt(_0x208813(0x71)) / 0x2 + -parseInt(_0x208813(0x75)) / 0x3 * (-parseInt(_0x208813(0x7c)) / 0x4) + -parseInt(_0x208813(0x77)) / 0x5 + parseInt(_0x208813(0x72)) / 0x6 * (parseInt(_0x208813(0x73)) / 0x7) + parseInt(_0x208813(0x7a)) / 0x8 * (-parseInt(_0x208813(0x7d)) / 0x9) + parseInt(_0x208813(0x74)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4679, 0x393d5));
function Main(input) {
    var _0x355213 = a0_0x42d7;
    input = input['split']('\x0a');
    var N = parseInt(input[0x0]);
    var h = input[0x1][_0x355213(0x82)]('\x20')[_0x355213(0x81)](i => parseInt(i));
    var a = input[0x2][_0x355213(0x82)]('\x20')['map'](i => parseInt(i));
    var dp = new Array(N + 0x1)[_0x355213(0x78)](0x0);
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        var max = 0x0;
        tmp = a[i] + dp[h[i]];
        for (var j = h[i]; j < N + 0x1; j++) {
            if (tmp > dp[j]) {
                dp[j] = tmp;
            } else {
                break;
            }
        }
        ans = Math[_0x355213(0x86)](ans, dp[h[i]]);
    }
    console[_0x355213(0x70)]('%s', ans);
    return ans;
}
function debug(n) {
    var _0x4ccc2a = a0_0x42d7;
    var input = document['getElementById'](_0x4ccc2a(0x84) + n)[_0x4ccc2a(0x7e)];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document['getElementById'](_0x4ccc2a(0x79) + n)[_0x4ccc2a(0x7e)][_0x4ccc2a(0x82)]('\x0a')[0x0]) {
        result = 'AC';
    }
    document['getElementById'](_0x4ccc2a(0x85) + n)[_0x4ccc2a(0x80)] = result;
}
Main(require('fs')[a0_0x5af7a7(0x76)](a0_0x5af7a7(0x7b), a0_0x5af7a7(0x83)));
var a0_0x11f220 = a0_0x3da6;
(function (stringArrayFunction, comparisonValue) {
    var _0x5db1f2 = a0_0x3da6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5db1f2(0x18d)) / 0x1 + -parseInt(_0x5db1f2(0x17c)) / 0x2 + parseInt(_0x5db1f2(0x18c)) / 0x3 + parseInt(_0x5db1f2(0x184)) / 0x4 + -parseInt(_0x5db1f2(0x17d)) / 0x5 * (-parseInt(_0x5db1f2(0x185)) / 0x6) + -parseInt(_0x5db1f2(0x189)) / 0x7 * (-parseInt(_0x5db1f2(0x18a)) / 0x8) + -parseInt(_0x5db1f2(0x17f)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2ceb, 0x52bc0));
process[a0_0x11f220(0x188)][a0_0x11f220(0x180)]();
process[a0_0x11f220(0x188)][a0_0x11f220(0x17b)](a0_0x11f220(0x186));
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process[a0_0x11f220(0x188)]['on'](a0_0x11f220(0x181), function (data) {
    input_stdin += data;
});
process['on']('SIGINT', function () {
    var _0x3cd294 = a0_0x11f220;
    input_stdin_array = input_stdin[_0x3cd294(0x187)]('\x0a');
    main();
    process[_0x3cd294(0x18b)]();
});
process['stdin']['on'](a0_0x11f220(0x182), function () {
    var _0x1b0a6c = a0_0x11f220;
    input_stdin_array = input_stdin[_0x1b0a6c(0x187)]('\x0a');
    main();
});
function a0_0x2ceb() {
    var _0x463915 = [
        '3728qhyaMJ',
        'exit',
        '1699440trPHxw',
        '40462wqPYDN',
        'setEncoding',
        '186750bAleRr',
        '18855taCqnT',
        'push',
        '3977649gMERgl',
        'resume',
        'data',
        'end',
        'log',
        '1016732ficQJF',
        '6eqrMVY',
        'ascii',
        'split',
        'stdin',
        '140STEcCa'
    ];
    a0_0x2ceb = function () {
        return _0x463915;
    };
    return a0_0x2ceb();
}
function readLine() {
    return input_stdin_array[input_currentline++];
}
function a0_0x3da6(HCqHPw, key) {
    var stringArray = a0_0x2ceb();
    a0_0x3da6 = function (index, key) {
        index = index - 0x17b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3da6(HCqHPw, key);
}
function main() {
    var _0x57afad = a0_0x11f220;
    var N = parseInt(readLine());
    var s = readLine()['split']('\x20');
    var T = [0x0];
    var sum = 0x0;
    for (var i = 0x1; i <= N; i++) {
        T[_0x57afad(0x17e)](parseInt(s[i - 0x1]));
        sum += T[i];
    }
    var M = parseInt(readLine());
    for (var k = 0x0; k < M; k++) {
        s = readLine()[_0x57afad(0x187)]('\x20');
        var i = parseInt(s[0x0]);
        var x = parseInt(s[0x1]);
        console[_0x57afad(0x183)](sum - T[i] + x);
    }
}
var a0_0x67602a = a0_0x2a70;
function a0_0x2a70(ucFtMw, key) {
    var stringArray = a0_0x2571();
    a0_0x2a70 = function (index, key) {
        index = index - 0x6a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a70(ucFtMw, key);
}
function a0_0x2571() {
    var _0x2a9ae9 = [
        '/dev/stdin',
        '15gAmFTZ',
        '5552127lBQVTJ',
        'log',
        '42099xiinlx',
        '1041812HTyAxm',
        '330547QjyQfm',
        'utf8',
        '248vdDXQY',
        'readFileSync',
        '4067046hzzfxt',
        '46cTYmUO',
        'split',
        '10zPVgwP',
        '17206321yJRhAp',
        '1603344SfgxXm'
    ];
    a0_0x2571 = function () {
        return _0x2a9ae9;
    };
    return a0_0x2571();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x71d5e7 = a0_0x2a70;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x71d5e7(0x6c)) / 0x1 * (-parseInt(_0x71d5e7(0x73)) / 0x2) + parseInt(_0x71d5e7(0x72)) / 0x3 + parseInt(_0x71d5e7(0x6d)) / 0x4 * (-parseInt(_0x71d5e7(0x79)) / 0x5) + -parseInt(_0x71d5e7(0x77)) / 0x6 + -parseInt(_0x71d5e7(0x6e)) / 0x7 * (parseInt(_0x71d5e7(0x70)) / 0x8) + -parseInt(_0x71d5e7(0x6a)) / 0x9 * (parseInt(_0x71d5e7(0x75)) / 0xa) + parseInt(_0x71d5e7(0x76)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2571, 0xb9431));
function Main(input) {
    var _0x2159b9 = a0_0x2a70;
    input = input[_0x2159b9(0x74)]('\x0a');
    tmp0 = input[0x0][_0x2159b9(0x74)]('\x20');
    N = Number(tmp0[0x0]);
    M = Number(tmp0[0x1]);
    C = Number(tmp0[0x2]);
    B = input[0x1][_0x2159b9(0x74)]('\x20');
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        A = input[0x2 + i]['split']('\x20');
        var tmpSum = 0x0;
        for (var j = 0x0; j < M; j++) {
            tmpSum += Number(A[j]) * Number(B[j]);
        }
        if (tmpSum + C > 0x0) {
            ans++;
        }
    }
    console[_0x2159b9(0x6b)](ans);
}
Main(require('fs')[a0_0x67602a(0x71)](a0_0x67602a(0x78), a0_0x67602a(0x6f)));
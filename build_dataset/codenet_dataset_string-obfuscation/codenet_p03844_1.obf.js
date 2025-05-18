var a0_0x5d9900 = a0_0x3efc;
(function (stringArrayFunction, comparisonValue) {
    var _0x14b77d = a0_0x3efc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x14b77d(0xf1)) / 0x1 + parseInt(_0x14b77d(0xef)) / 0x2 + -parseInt(_0x14b77d(0xe9)) / 0x3 + -parseInt(_0x14b77d(0xec)) / 0x4 + parseInt(_0x14b77d(0xea)) / 0x5 + -parseInt(_0x14b77d(0xee)) / 0x6 + parseInt(_0x14b77d(0xf2)) / 0x7 * (parseInt(_0x14b77d(0xe6)) / 0x8);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x38d1, 0xefc1a));
process[a0_0x5d9900(0xe4)]['resume']();
function a0_0x38d1() {
    var _0x53105a = [
        'log',
        '6837402OnUdHB',
        '1574500BOEmPY',
        'split',
        '485230eqDdqg',
        '5523WxlRqh',
        'stdin',
        'SIGINT',
        '20224wgjJzO',
        'ascii',
        'exit',
        '5816511mXAQbg',
        '9362070gnsvQW',
        'data',
        '4316160ljSKRq'
    ];
    a0_0x38d1 = function () {
        return _0x53105a;
    };
    return a0_0x38d1();
}
process[a0_0x5d9900(0xe4)]['setEncoding'](a0_0x5d9900(0xe7));
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on'](a0_0x5d9900(0xeb), function (data) {
    input_stdin += data;
});
process['on'](a0_0x5d9900(0xe5), function () {
    var _0x3bd67a = a0_0x5d9900;
    input_stdin_array = input_stdin['split']('\x0a');
    main();
    process[_0x3bd67a(0xe8)]();
});
process['stdin']['on']('end', function () {
    input_stdin_array = input_stdin['split']('\x0a');
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function a0_0x3efc(boikmr, key) {
    var stringArray = a0_0x38d1();
    a0_0x3efc = function (index, key) {
        index = index - 0xe4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3efc(boikmr, key);
}
function main() {
    var _0x42cd35 = a0_0x5d9900;
    var s = readLine()[_0x42cd35(0xf0)]('\x20');
    var a = parseInt(s[0x0]);
    var op = s[0x1];
    var b = parseInt(s[0x2]);
    var c;
    if (op == '+') {
        c = a + b;
    } else {
        c = a - b;
    }
    console[_0x42cd35(0xed)](c);
}
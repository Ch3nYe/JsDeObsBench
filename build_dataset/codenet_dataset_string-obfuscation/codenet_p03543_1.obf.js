var a0_0x5944bb = a0_0x2d1b;
(function (stringArrayFunction, comparisonValue) {
    var _0x323b88 = a0_0x2d1b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x323b88(0x1a8)) / 0x1 + -parseInt(_0x323b88(0x1aa)) / 0x2 + parseInt(_0x323b88(0x19d)) / 0x3 + parseInt(_0x323b88(0x1a2)) / 0x4 + -parseInt(_0x323b88(0x1a6)) / 0x5 * (parseInt(_0x323b88(0x1a7)) / 0x6) + parseInt(_0x323b88(0x1a4)) / 0x7 * (parseInt(_0x323b88(0x1a9)) / 0x8) + parseInt(_0x323b88(0x19e)) / 0x9 * (parseInt(_0x323b88(0x1a3)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x948b, 0xdcd3e));
function a0_0x948b() {
    var _0x5440b4 = [
        'log',
        '2135457SJFoAX',
        '9ZmFbyJ',
        'split',
        '/dev/stdin',
        'Yes',
        '1889932SjBpcR',
        '29025470byFQSg',
        '63EnkkAN',
        'readFileSync',
        '127065zPZdIt',
        '414OqQASu',
        '1597573IAQWyW',
        '1246088DTVxQM',
        '2466236MpRPOF'
    ];
    a0_0x948b = function () {
        return _0x5440b4;
    };
    return a0_0x948b();
}
function a0_0x2d1b(VjccNq, key) {
    var stringArray = a0_0x948b();
    a0_0x2d1b = function (index, key) {
        index = index - 0x19c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d1b(VjccNq, key);
}
function Main(input) {
    var _0x7b88cc = a0_0x2d1b;
    input = input[_0x7b88cc(0x19f)]('\x0a');
    var n = input[0x0];
    var s = 'No';
    if (n[0x1] == n[0x2]) {
        if (n[0x0] == n[0x1] || n[0x2] == n[0x3])
            s = _0x7b88cc(0x1a1);
    }
    console[_0x7b88cc(0x19c)]('%s', s);
}
Main(require('fs')[a0_0x5944bb(0x1a5)](a0_0x5944bb(0x1a0), 'utf8'));
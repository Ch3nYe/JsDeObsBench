var a0_0x38f952 = a0_0x1051;
function a0_0x1051(rBjwMI, key) {
    var stringArray = a0_0x4b6f();
    a0_0x1051 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1051(rBjwMI, key);
}
function Main(input) {
    var _0x343001 = a0_0x1051;
    input = '' + input + '';
    input = input[_0x343001(0x0)](input[_0x343001(0x1)] - 0x1, 0x1);
    var d = '';
    if (input == 0x2 || input == 0x4 || input == 0x5 || input == 0x7 || input == 0x9) {
        d = _0x343001(0x2);
    }
    if (input == 0x0 || input == 0x1 || input == 0x6 || input == 0x8) {
        d = 'pon';
    }
    if (input == 0x3) {
        d = 'bon';
    }
    console[_0x343001(0x3)](d);
}
Main(require('fs')[a0_0x38f952(0x4)](a0_0x38f952(0x5), a0_0x38f952(0x6)));
function a0_0x4b6f() {
    var _0x2487d2 = [
        'substr',
        'length',
        'hon',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4b6f = function () {
        return _0x2487d2;
    };
    return a0_0x4b6f();
}
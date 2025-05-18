function a0_0x2ce5() {
    var _0x27c917 = [
        'toString',
        'split',
        'length',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2ce5 = function () {
        return _0x27c917;
    };
    return a0_0x2ce5();
}
function a0_0x1df9(QrNvVv, key) {
    var stringArray = a0_0x2ce5();
    a0_0x1df9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1df9(QrNvVv, key);
}
var a0_0x567ca2 = a0_0x1df9;
function main(input) {
    var _0x5c05dd = a0_0x1df9;
    var inputA = input[_0x5c05dd(0x0)]()[_0x5c05dd(0x1)]('');
    var sum = 0x0;
    for (var i = 0x0; i < inputA[_0x5c05dd(0x2)]; i++) {
        sum += parseInt(inputA[i]);
    }
    if (parseInt(input) % sum == 0x0) {
        console[_0x5c05dd(0x3)](_0x5c05dd(0x4));
    } else {
        console[_0x5c05dd(0x3)]('No');
    }
}
main(require('fs')[a0_0x567ca2(0x5)](a0_0x567ca2(0x6), a0_0x567ca2(0x7)));
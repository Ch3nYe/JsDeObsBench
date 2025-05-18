var a0_0x255fc9 = a0_0x382b;
function main(input) {
    var _0x4a9c72 = a0_0x382b;
    var digits = input[_0x4a9c72(0x0)]()[_0x4a9c72(0x1)];
    var input = parseInt(input, 0xa);
    var divisor = Math['pow'](0xa, digits - 0x1);
    var arr = [];
    for (var i = 0x0; i < digits; i++) {
        arr[_0x4a9c72(0x2)](Math[_0x4a9c72(0x3)](input / divisor));
        input = input % divisor;
        divisor /= 0xa;
    }
    var answer = arr['reduce']((a, b) => a + b);
    if (answer == 0x1) {
        answer = 0xa;
    }
    console[_0x4a9c72(0x4)](answer);
}
function a0_0x2412() {
    var _0x299334 = [
        'toString',
        'length',
        'push',
        'floor',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2412 = function () {
        return _0x299334;
    };
    return a0_0x2412();
}
function a0_0x382b(FAflNh, key) {
    var stringArray = a0_0x2412();
    a0_0x382b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x382b(FAflNh, key);
}
main(require('fs')[a0_0x255fc9(0x5)](a0_0x255fc9(0x6), 'utf8'));
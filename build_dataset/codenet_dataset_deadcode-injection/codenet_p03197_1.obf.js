var a0_0x45dbe5 = a0_0x1741;
function Main(input) {
    var _0x213a83 = a0_0x1741;
    input = input[_0x213a83(0x0)]('\x0a')[_0x213a83(0x1)](Number);
    input[_0x213a83(0x2)]();
    var n = arrsum(input);
    if (n == input[_0x213a83(0x3)]) {
        n = 0x1;
    }
    if (n % 0x2 == 0x1) {
        console['log'](_0x213a83(0x4));
    } else {
        if (_0x213a83(0x5) !== 'TbHYg') {
            console[_0x213a83(0x6)](_0x213a83(0x7));
        } else {
            n = 0x1;
        }
    }
}
function a0_0x1741(hqibQM, key) {
    var stringArray = a0_0x47a2();
    a0_0x1741 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1741(hqibQM, key);
}
Main(require('fs')[a0_0x45dbe5(0x8)](a0_0x45dbe5(0x9), a0_0x45dbe5(0xa))[a0_0x45dbe5(0xb)]());
function arrsum(arr) {
    var sum = 0x0;
    for (var i = 0x0, len = arr['length']; i < len; ++i) {
        sum += arr[i];
    }
    ;
    return sum;
}
function a0_0x47a2() {
    var _0x1beb41 = [
        'split',
        'map',
        'shift',
        'length',
        'first',
        'yyirb',
        'log',
        'second',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x47a2 = function () {
        return _0x1beb41;
    };
    return a0_0x47a2();
}
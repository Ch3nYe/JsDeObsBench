var a0_0x4dc061 = a0_0x3b41;
function a0_0x3ebb() {
    var _0x496feb = [
        'split',
        'toString',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3ebb = function () {
        return _0x496feb;
    };
    return a0_0x3ebb();
}
function a0_0x3b41(IeAfHC, key) {
    var stringArray = a0_0x3ebb();
    a0_0x3b41 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b41(IeAfHC, key);
}
function Main(input) {
    var _0x3e0b54 = a0_0x3b41;
    var input = input[_0x3e0b54(0x0)]('\x20');
    var A = input[0x0];
    var B = input[0x1];
    var cnt = 0x0;
    function hoge() {
        var _0x5e441c = a0_0x3b41;
        var x = A[_0x5e441c(0x1)]();
        if (x[0x0] === x[0x4] && x[0x1] === x[0x3]) {
            return !![];
        }
    }
    while (A <= B) {
        if (hoge()) {
            cnt++;
        }
        A++;
    }
    console['log'](cnt);
}
Main(require('fs')[a0_0x4dc061(0x2)](a0_0x4dc061(0x3), a0_0x4dc061(0x4)));
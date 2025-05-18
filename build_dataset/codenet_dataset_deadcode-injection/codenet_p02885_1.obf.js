function a0_0xf5a1(ECTosw, key) {
    var stringArray = a0_0x18e2();
    a0_0xf5a1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf5a1(ECTosw, key);
}
var a0_0xd0fa2a = a0_0xf5a1;
function Main(input) {
    var _0x415841 = a0_0xf5a1;
    var args = input[_0x415841(0x0)]()[_0x415841(0x1)]('\x20')[_0x415841(0x2)](Number);
    var nums = args[0x1] * 0x2;
    var ans = 0x0;
    if (nums <= args[0x0]) {
        ans = args[0x0] - nums;
    }
    console[_0x415841(0x3)](ans);
}
function a0_0x18e2() {
    var _0x583f5d = [
        'trim',
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x18e2 = function () {
        return _0x583f5d;
    };
    return a0_0x18e2();
}
Main(require('fs')[a0_0xd0fa2a(0x4)](a0_0xd0fa2a(0x5), 'utf8'));
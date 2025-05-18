function a0_0x2421() {
    var _0x2308a4 = [
        'readFileSync',
        'utf8',
        'split',
        'log'
    ];
    a0_0x2421 = function () {
        return _0x2308a4;
    };
    return a0_0x2421();
}
var a0_0x5982c1 = a0_0xd5e6;
function a0_0xd5e6(KebpOZ, key) {
    var stringArray = a0_0x2421();
    a0_0xd5e6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd5e6(KebpOZ, key);
}
Main(require('fs')[a0_0x5982c1(0x0)]('/dev/stdin', a0_0x5982c1(0x1)));
function Main(args) {
    var _0x199a2d = a0_0xd5e6;
    input = args[_0x199a2d(0x2)]('\x0a');
    const N = parseInt(input[0x0]);
    var tmp;
    var result = 0x0;
    for (var i = 0x1; i <= N; i++) {
        tmp = input[i]['split']('\x20');
        result += parseInt(tmp[0x1]) - parseInt(tmp[0x0]) + 0x1;
    }
    console[_0x199a2d(0x3)](result);
}
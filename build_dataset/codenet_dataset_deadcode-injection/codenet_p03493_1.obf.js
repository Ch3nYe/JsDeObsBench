var a0_0x1ff1ce = a0_0x790e;
function Main(input) {
    var _0x76fd1 = a0_0x790e;
    var args = input[_0x76fd1(0x0)]('\x20');
    var num = parseInt(args[0x0], 0xa);
    var str = num['toString'](0xa);
    var count = 0x0;
    for (var i = 0x0; i < str[_0x76fd1(0x1)]; i++) {
        if (str[i] == '1') {
            count += 0x1;
        }
    }
    console[_0x76fd1(0x2)](count);
}
function a0_0x790e(YxLslK, key) {
    var stringArray = a0_0x3d66();
    a0_0x790e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x790e(YxLslK, key);
}
Main(require('fs')['readFileSync'](a0_0x1ff1ce(0x3), a0_0x1ff1ce(0x4)));
function a0_0x3d66() {
    var _0x4b1a06 = [
        'split',
        'length',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3d66 = function () {
        return _0x4b1a06;
    };
    return a0_0x3d66();
}
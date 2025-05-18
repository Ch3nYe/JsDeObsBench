function a0_0x3ecc() {
    var _0x3f5852 = [
        'map',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3ecc = function () {
        return _0x3f5852;
    };
    return a0_0x3ecc();
}
function a0_0x3981(QmQAUC, key) {
    var stringArray = a0_0x3ecc();
    a0_0x3981 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3981(QmQAUC, key);
}
var a0_0x2d4412 = a0_0x3981;
function Main(input) {
    var _0x10f149 = a0_0x3981;
    var [a, b] = input['split']('\x20')[_0x10f149(0x0)](Number);
    if (b > a)
        [a, b] = [
            b,
            a
        ];
    var r;
    do {
        r = a % b;
        a = b;
        b = r;
    } while (r);
    console['log'](a);
}
Main(require('fs')[a0_0x2d4412(0x1)](a0_0x2d4412(0x2), a0_0x2d4412(0x3)));
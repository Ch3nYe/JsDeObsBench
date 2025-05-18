var a0_0x1e21bc = a0_0xf91c;
function a0_0xf91c(IHqMAD, key) {
    var stringArray = a0_0x1789();
    a0_0xf91c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf91c(IHqMAD, key);
}
function main(arg) {
    var _0x9a5c12 = a0_0xf91c;
    var size = arg[_0x9a5c12(0x0)]('\x0a')[0x0][_0x9a5c12(0x0)]('\x20');
    var sel = arg[_0x9a5c12(0x0)]('\x0a')[0x1][_0x9a5c12(0x0)]('\x20');
    console[_0x9a5c12(0x1)](size[0x0] * size[0x1] - size[0x1] * sel[0x0] - (size[0x0] - sel[0x0]) * sel[0x1]);
}
main(require('fs')[a0_0x1e21bc(0x2)](a0_0x1e21bc(0x3), a0_0x1e21bc(0x4)));
function a0_0x1789() {
    var _0x1befdf = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1789 = function () {
        return _0x1befdf;
    };
    return a0_0x1789();
}
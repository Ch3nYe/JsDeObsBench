var a0_0xebe96a = a0_0x2b12;
function a0_0x2b12(NRuoFI, key) {
    var stringArray = a0_0x3d75();
    a0_0x2b12 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b12(NRuoFI, key);
}
function a0_0x3d75() {
    var _0x1bcd65 = [
        'split',
        'log',
        'readFileSync',
        'UTF-8'
    ];
    a0_0x3d75 = function () {
        return _0x1bcd65;
    };
    return a0_0x3d75();
}
const main = inputs => {
    var _0x9515b7 = a0_0x2b12;
    var array = inputs[0x0][_0x9515b7(0x0)]('\x20');
    var X = Number(array);
    var num = 0x64;
    var count = 0x0;
    while (0x1) {
        var risoku = Math['floor'](num * 0.01);
        num = num + risoku;
        count++;
        if (X <= num)
            break;
    }
    console[_0x9515b7(0x1)](count);
};
main(require('fs')[a0_0xebe96a(0x2)]('/dev/stdin', a0_0xebe96a(0x3))['trim']()[a0_0xebe96a(0x0)]('\x0a'));
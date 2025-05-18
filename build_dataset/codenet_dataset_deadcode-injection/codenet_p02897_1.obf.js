function a0_0xb64e() {
    var _0x1c1850 = [
        'log',
        'toFixed',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xb64e = function () {
        return _0x1c1850;
    };
    return a0_0xb64e();
}
var a0_0x258671 = a0_0x2447;
function a0_0x2447(BQMLZu, key) {
    var stringArray = a0_0xb64e();
    a0_0x2447 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2447(BQMLZu, key);
}
function main(input) {
    var _0x3f3857 = a0_0x2447;
    var Gusu = 0x0;
    var Kisu = 0x0;
    var Out = 0x0;
    if (input > 0x0) {
        if (input % 0x2 == 0x0) {
            Gusu = input / 0x2;
            Kisu = Gusu;
            Out = Kisu / input;
        } else if (input % 0x2 == 0x1) {
            Gusu = parseInt(input / 0x2);
            Kisu = Gusu + 0x1;
            Out = Kisu / input;
        }
    }
    console[_0x3f3857(0x0)](Out[_0x3f3857(0x1)](0xa));
}
main(require('fs')[a0_0x258671(0x2)](a0_0x258671(0x3), a0_0x258671(0x4)));
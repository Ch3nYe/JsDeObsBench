function a0_0x7e1f() {
    var _0x40fd48 = [
        'replace',
        'log',
        'length',
        'readFileSync',
        'utf8'
    ];
    a0_0x7e1f = function () {
        return _0x40fd48;
    };
    return a0_0x7e1f();
}
function a0_0x3305(jzlENv, key) {
    var stringArray = a0_0x7e1f();
    a0_0x3305 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3305(jzlENv, key);
}
var a0_0x50fb17 = a0_0x3305;
function main(arg) {
    var _0x295471 = a0_0x3305;
    var arg2 = arg['split'](/\n/g);
    var honbun = arg2[0x1];
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (i = 0x0; i < alphabet['length']; i++) {
        var iro = alphabet['substr'](i, 0x1);
        var regkun = new RegExp(iro + '+', 'g');
        honbun = honbun[_0x295471(0x0)](regkun, iro);
    }
    console[_0x295471(0x1)](honbun[_0x295471(0x2)]);
}
main(require('fs')[a0_0x50fb17(0x3)]('/dev/stdin', a0_0x50fb17(0x4)));
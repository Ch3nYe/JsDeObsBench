var a0_0x541d4c = a0_0x9dbe;
function a0_0x9dbe(elADvX, key) {
    var stringArray = a0_0x3fe6();
    a0_0x9dbe = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9dbe(elADvX, key);
}
function main(input) {
    input = input['split']('\x20');
    var max = input[0x1] < input[0x2] ? input[0x1] : input[0x2];
    var min = input[0x0] - input[0x1] > input[0x2] ? 0x0 : input[0x2] - (input[0x0] - input[0x1]);
    console['log'](max + '\x20' + min);
}
main(require('fs')['readFileSync'](a0_0x541d4c(0x0), a0_0x541d4c(0x1)));
function a0_0x3fe6() {
    var _0x2fa662 = [
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3fe6 = function () {
        return _0x2fa662;
    };
    return a0_0x3fe6();
}
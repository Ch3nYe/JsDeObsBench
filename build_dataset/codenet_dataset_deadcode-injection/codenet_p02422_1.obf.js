'use strict';
var a0_0x37f918 = a0_0x509c;
main(require('fs')[a0_0x37f918(0x0)](a0_0x37f918(0x1), a0_0x37f918(0x2))[a0_0x37f918(0x3)](/\r?\n$/, '')['split'](/\r?\n/));
function a0_0x509c(RQpRIk, key) {
    var stringArray = a0_0x4420();
    a0_0x509c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x509c(RQpRIk, key);
}
function a0_0x4420() {
    var _0x2a6340 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'replace',
        'shift',
        'split',
        'print',
        'slice',
        'reverse'
    ];
    a0_0x4420 = function () {
        return _0x2a6340;
    };
    return a0_0x4420();
}
function main(lines) {
    var _0x3a2a8b = a0_0x509c;
    var str = lines[_0x3a2a8b(0x4)]();
    lines['shift']();
    var code;
    while (code = lines['shift']()) {
        code = code[_0x3a2a8b(0x5)]('\x20');
        var from = +code[0x1], to = +code[0x2];
        switch (code[0x0]) {
        case _0x3a2a8b(0x6):
            console['log'](str[_0x3a2a8b(0x7)](from, to + 0x1));
            break;
        case _0x3a2a8b(0x3):
            str = str[_0x3a2a8b(0x7)](0x0, from) + code[0x3] + str['slice'](to + 0x1);
            break;
        case _0x3a2a8b(0x8):
            str = str[_0x3a2a8b(0x7)](0x0, from) + str['slice'](from, to + 0x1)[_0x3a2a8b(0x5)]('')[_0x3a2a8b(0x8)]()['join']('') + str['slice'](to + 0x1);
            break;
        }
    }
}
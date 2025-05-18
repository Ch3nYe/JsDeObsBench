var a0_0x373509 = a0_0x1b12;
var input = require('fs')['readFileSync'](a0_0x373509(0x0), a0_0x373509(0x1));
var arr = input['trim']()['split']('\x0a');
function a0_0xb922() {
    var _0x45aca8 = [
        '/dev/stdin',
        'utf8',
        'split',
        'reduce',
        'map',
        'log'
    ];
    a0_0xb922 = function () {
        return _0x45aca8;
    };
    return a0_0xb922();
}
var A = arr[0x1][a0_0x373509(0x2)]('\x20')['map'](Number)[a0_0x373509(0x3)]((a, b) => a + b);
function a0_0x1b12(dmOkIN, key) {
    var stringArray = a0_0xb922();
    a0_0x1b12 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b12(dmOkIN, key);
}
var B = arr[0x2][a0_0x373509(0x2)]('\x20')[a0_0x373509(0x4)](Number)['reduce']((a, b) => a + b);
console[a0_0x373509(0x5)](A * B);
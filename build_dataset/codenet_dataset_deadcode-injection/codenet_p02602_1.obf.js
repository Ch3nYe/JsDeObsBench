var a0_0x502a6d = a0_0x3b92;
function a0_0x3b92(MfXItP, key) {
    var stringArray = a0_0x28dc();
    a0_0x3b92 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b92(MfXItP, key);
}
function a0_0x28dc() {
    var _0x5a960c = [
        'replace',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x28dc = function () {
        return _0x5a960c;
    };
    return a0_0x28dc();
}
function Main(input) {
    var _0x3847a6 = a0_0x3b92;
    input = input[_0x3847a6(0x0)](/\n/g, '\x20');
    input = input['split']('\x20');
    var A = Number(input[0x0]);
    var B = Number(input[0x1]);
    input = input['slice'](0x2);
    for (var i = 0x0; i < input['length'] - B; i++) {
        if (Number(input[i]) < Number(input[i + B])) {
            console[_0x3847a6(0x1)](_0x3847a6(0x2));
        } else {
            console['log']('No');
        }
    }
}
Main(require('fs')[a0_0x502a6d(0x3)](a0_0x502a6d(0x4), a0_0x502a6d(0x5)));
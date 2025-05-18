var a0_0x1f58c4 = a0_0x484d;
function a0_0x484d(ayqIur, key) {
    var stringArray = a0_0xdbf9();
    a0_0x484d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x484d(ayqIur, key);
}
function Main(input) {
    var _0x4873d6 = a0_0x484d;
    input = input['split']('\x0a');
    t = input[0x0][_0x4873d6(0x0)]('');
    s = input[0x1][_0x4873d6(0x0)]('');
    var result = 0x0;
    for (var i = 0x0; i < s[_0x4873d6(0x1)]; i++) {
        if (s[i] != t[i]) {
            result = result + 0x1;
        } else {
        }
    }
    console[_0x4873d6(0x2)](result);
}
function a0_0xdbf9() {
    var _0x4c9021 = [
        'split',
        'length',
        'log',
        '/dev/stdin'
    ];
    a0_0xdbf9 = function () {
        return _0x4c9021;
    };
    return a0_0xdbf9();
}
Main(require('fs')['readFileSync'](a0_0x1f58c4(0x3), 'utf8'));
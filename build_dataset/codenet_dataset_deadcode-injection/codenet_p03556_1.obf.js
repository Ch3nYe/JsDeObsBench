function a0_0x2fc3(XhiblM, key) {
    var stringArray = a0_0x2491();
    a0_0x2fc3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fc3(XhiblM, key);
}
var a0_0x3322fa = a0_0x2fc3;
function Main(input) {
    var _0x1a3579 = a0_0x2fc3;
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]);
    var ans = Math[_0x1a3579(0x0)](Math[_0x1a3579(0x1)](Math['sqrt'](n)), 0x2);
    console['log']('%s', ans);
}
function a0_0x2491() {
    var _0x433d6e = [
        'pow',
        'floor',
        'utf8'
    ];
    a0_0x2491 = function () {
        return _0x433d6e;
    };
    return a0_0x2491();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x3322fa(0x2)));
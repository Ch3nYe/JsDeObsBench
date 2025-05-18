var a0_0x4982bd = a0_0x3dbc;
function a0_0x3dbc(ktXVAm, key) {
    var stringArray = a0_0x5bc7();
    a0_0x3dbc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3dbc(ktXVAm, key);
}
function Main(input) {
    var _0x32b977 = a0_0x3dbc;
    input = input[_0x32b977(0x0)]('\x20');
    var a = String(input[0x0]);
    var b = String(input[0x1]);
    if (a === 'H' && b === 'H' || a === 'D' && b === 'D') {
        console[_0x32b977(0x1)]('H');
    } else {
        console[_0x32b977(0x1)]('D');
    }
}
Main(require('fs')[a0_0x4982bd(0x2)](a0_0x4982bd(0x3), a0_0x4982bd(0x4)));
function a0_0x5bc7() {
    var _0x1a541d = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5bc7 = function () {
        return _0x1a541d;
    };
    return a0_0x5bc7();
}
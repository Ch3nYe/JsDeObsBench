var a0_0x4690f0 = a0_0x302f;
function a0_0x302f(uahRbr, key) {
    var stringArray = a0_0x3a40();
    a0_0x302f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x302f(uahRbr, key);
}
function Main(input) {
    var _0x424ab5 = a0_0x302f;
    input = input[_0x424ab5(0x0)]('\x0a');
    var mem = input[0x0][_0x424ab5(0x0)]('\x20')['map'](Number);
    var sum = 0x0;
    for (var i = 0x1; i < input[_0x424ab5(0x1)]; i++) {
        var n = input[i]['split']('\x20')[_0x424ab5(0x2)](Number);
        if (n[0x0] >= mem[0x1] && n[0x1] >= mem[0x2])
            sum++;
    }
    console['log'](sum);
}
Main(require('fs')['readFileSync'](a0_0x4690f0(0x3), a0_0x4690f0(0x4))[a0_0x4690f0(0x5)]());
function a0_0x3a40() {
    var _0xdd808f = [
        'split',
        'length',
        'map',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x3a40 = function () {
        return _0xdd808f;
    };
    return a0_0x3a40();
}
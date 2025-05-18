function a0_0x4aa2(tONfQs, key) {
    var stringArray = a0_0x175d();
    a0_0x4aa2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4aa2(tONfQs, key);
}
var a0_0x222462 = a0_0x4aa2;
function Main(input) {
    var _0x1c9a29 = a0_0x4aa2;
    input = input[_0x1c9a29(0x0)]('\x0a');
    var N = parseInt(input[0x0], 0xa);
    if (parseInt(N / 0xa) === 0x0) {
        console[_0x1c9a29(0x1)](_0x1c9a29(0x2));
        return;
    }
    var Sum = 0x0;
    var Mod = N;
    for (var i = 0x5f5e100; i >= 0xa; i = i / 0xa) {
        Sum += parseInt(Mod / i);
        Mod = Mod % i;
    }
    Sum += Mod;
    if (N % Sum === 0x0) {
        console[_0x1c9a29(0x1)](_0x1c9a29(0x2));
    } else {
        console[_0x1c9a29(0x1)]('No');
    }
}
function a0_0x175d() {
    var _0x2ff361 = [
        'split',
        'log',
        'Yes',
        'readFileSync',
        'utf8'
    ];
    a0_0x175d = function () {
        return _0x2ff361;
    };
    return a0_0x175d();
}
Main(require('fs')[a0_0x222462(0x3)]('/dev/stdin', a0_0x222462(0x4)));
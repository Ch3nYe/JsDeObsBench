var a0_0xd559ab = a0_0x2351;
function Main(input) {
    var _0x472366 = a0_0x2351;
    input = input[_0x472366(0x0)]('\x0a');
    var n = input[0x0];
    var s = 'No';
    if (n[0x1] == n[0x2]) {
        if (n[0x0] == n[0x1] || n[0x2] == n[0x3])
            s = 'Yes';
    }
    console[_0x472366(0x1)]('%s', s);
}
function a0_0x4f90() {
    var _0x5f00c8 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4f90 = function () {
        return _0x5f00c8;
    };
    return a0_0x4f90();
}
function a0_0x2351(JpxcGC, key) {
    var stringArray = a0_0x4f90();
    a0_0x2351 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2351(JpxcGC, key);
}
Main(require('fs')[a0_0xd559ab(0x2)](a0_0xd559ab(0x3), 'utf8'));
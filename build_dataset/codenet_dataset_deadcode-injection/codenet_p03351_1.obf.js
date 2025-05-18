var a0_0x521d40 = a0_0x1fad;
function a0_0x1fad(UJuyiN, key) {
    var stringArray = a0_0x1753();
    a0_0x1fad = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1fad(UJuyiN, key);
}
function Main(input) {
    var _0x454320 = a0_0x1fad;
    input = input['split'](/\s/);
    input[_0x454320(0x0)](function (e, i, a) {
        a[i] = Number(a[i]);
    });
    var ans = 'No';
    if (Math[_0x454320(0x1)](input[0x0] - input[0x2]) <= input[0x3]) {
        ans = 'Yes';
    }
    if (Math['abs'](input[0x0] - input[0x1]) <= input[0x3] && Math[_0x454320(0x1)](input[0x1] - input[0x2]) <= input[0x3]) {
        ans = _0x454320(0x2);
    }
    console[_0x454320(0x3)](ans);
}
function a0_0x1753() {
    var _0x5be5aa = [
        'forEach',
        'abs',
        'Yes',
        'log',
        'utf8'
    ];
    a0_0x1753 = function () {
        return _0x5be5aa;
    };
    return a0_0x1753();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x521d40(0x4)));
function a0_0x274c() {
    var _0x2ad51f = [
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x274c = function () {
        return _0x2ad51f;
    };
    return a0_0x274c();
}
var a0_0xfd3180 = a0_0x2174;
function a0_0x2174(GQzZSC, key) {
    var stringArray = a0_0x274c();
    a0_0x2174 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2174(GQzZSC, key);
}
const Main = input => {
    var _0x49e052 = a0_0x2174;
    const tmp = input['split']('\x20');
    var a = parseInt(tmp[0x0]);
    var b = parseInt(tmp[0x1]);
    var c = parseInt(tmp[0x2]);
    if (a === b && b !== c || b === c && c !== a || c === a && b !== c) {
        console[_0x49e052(0x0)]('Yes');
    } else {
        console[_0x49e052(0x0)]('No');
    }
};
Main(require('fs')[a0_0xfd3180(0x1)](a0_0xfd3180(0x2), a0_0xfd3180(0x3)));
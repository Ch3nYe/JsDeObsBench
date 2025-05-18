function a0_0x2a8a(BgoBJh, key) {
    var stringArray = a0_0x1a7c();
    a0_0x2a8a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a8a(BgoBJh, key);
}
function a0_0x1a7c() {
    var _0x21be59 = [
        'indexOf',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1a7c = function () {
        return _0x21be59;
    };
    return a0_0x1a7c();
}
var a0_0x2f8897 = a0_0x2a8a;
function main(input) {
    var _0x3669a9 = a0_0x2a8a;
    var aa = input[_0x3669a9(0x0)]('a');
    var bb = input[_0x3669a9(0x0)]('b');
    var cc = input[_0x3669a9(0x0)]('c');
    if (aa == -0x1 || bb == -0x1 || cc == -0x1) {
        console[_0x3669a9(0x1)]('No');
    } else {
        console[_0x3669a9(0x1)](_0x3669a9(0x2));
    }
}
main(require('fs')[a0_0x2f8897(0x3)](a0_0x2f8897(0x4), a0_0x2f8897(0x5)));
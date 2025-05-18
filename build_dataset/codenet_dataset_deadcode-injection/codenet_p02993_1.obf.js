function a0_0xb6b4(zotIBW, key) {
    var stringArray = a0_0x2b19();
    a0_0xb6b4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb6b4(zotIBW, key);
}
function a0_0x2b19() {
    var _0x34e269 = [
        'split',
        'log',
        'Bad',
        'Good',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2b19 = function () {
        return _0x34e269;
    };
    return a0_0x2b19();
}
var a0_0x1e355d = a0_0xb6b4;
function Main(input) {
    var _0x2e2237 = a0_0xb6b4;
    input = input[_0x2e2237(0x0)]('\x20');
    var tem = input;
    var beforeText = tem;
    var arr = String(tem)[_0x2e2237(0x0)]('');
    var a = parseInt(arr[0x0], 0xa);
    var b = parseInt(arr[0x1], 0xa);
    var c = parseInt(arr[0x2], 0xa);
    var d = parseInt(arr[0x3], 0xa);
    if (a == b) {
        console[_0x2e2237(0x1)](_0x2e2237(0x2));
    } else if (b == c) {
        console[_0x2e2237(0x1)]('Bad');
    } else if (c == d) {
        console['log']('Bad');
    } else {
        console[_0x2e2237(0x1)](_0x2e2237(0x3));
    }
}
Main(require('fs')[a0_0x1e355d(0x4)](a0_0x1e355d(0x5), 'utf8'));
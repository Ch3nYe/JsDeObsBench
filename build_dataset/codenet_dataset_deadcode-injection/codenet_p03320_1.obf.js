function a0_0x16f3() {
    var _0x1b6b63 = [
        'log',
        'join',
        'readFileSync',
        'utf8'
    ];
    a0_0x16f3 = function () {
        return _0x1b6b63;
    };
    return a0_0x16f3();
}
function a0_0x3cfa(onkkAw, key) {
    var stringArray = a0_0x16f3();
    a0_0x3cfa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3cfa(onkkAw, key);
}
var a0_0x231292 = a0_0x3cfa;
function Main(s) {
    var _0x197158 = a0_0x3cfa;
    k = +s;
    var ans = [];
    var x = 0x1;
    var y = '';
    for (var i = 0x0; i < k; i++) {
        ans[i] = x + y;
        if (x === 0x9) {
            x = 0x1;
            y += '9';
        } else
            x++;
    }
    console[_0x197158(0x0)](ans[_0x197158(0x1)]('\x0a'));
}
Main(require('fs')[a0_0x231292(0x2)]('/dev/stdin', a0_0x231292(0x3)));
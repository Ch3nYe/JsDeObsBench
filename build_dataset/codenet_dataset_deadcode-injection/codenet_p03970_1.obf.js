function a0_0x28cf() {
    var _0xd6732e = [
        'trim',
        'CODEFESTIVAL2016',
        'length',
        'slice',
        'readFileSync',
        'utf8'
    ];
    a0_0x28cf = function () {
        return _0xd6732e;
    };
    return a0_0x28cf();
}
var a0_0x6dd92f = a0_0x183d;
function a0_0x183d(thQTWW, key) {
    var stringArray = a0_0x28cf();
    a0_0x183d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x183d(thQTWW, key);
}
function Main(input) {
    var _0x53449d = a0_0x183d;
    input = input[_0x53449d(0x0)]();
    var output = 0x0;
    var seijou = _0x53449d(0x1);
    for (var i = 0x0; i < input[_0x53449d(0x2)]; i++) {
        var tmp1 = input[_0x53449d(0x3)](i, i + 0x1);
        var tmp2 = seijou[_0x53449d(0x3)](i, i + 0x1);
        if (tmp1 != tmp2) {
            output++;
        }
    }
    console['log'](output);
}
Main(require('fs')[a0_0x6dd92f(0x4)]('/dev/stdin', a0_0x6dd92f(0x5)));
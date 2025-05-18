function a0_0x9e22(UmzqBV, key) {
    var stringArray = a0_0x1f3f();
    a0_0x9e22 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9e22(UmzqBV, key);
}
function a0_0x1f3f() {
    var _0x1c9884 = [
        'replace',
        'split',
        'shift',
        'splice',
        'concat',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1f3f = function () {
        return _0x1c9884;
    };
    return a0_0x1f3f();
}
var a0_0x5557fc = a0_0x9e22;
(function (input) {
    var _0x384ae7 = a0_0x9e22;
    var inputs = input[_0x384ae7(0x0)](/\r/g, '')[_0x384ae7(0x1)]('\x0a');
    while (!![]) {
        var cards = [], line = inputs[_0x384ae7(0x2)]()[_0x384ae7(0x1)]('\x20'), n = parseInt(line[0x0]), r = parseInt(line[0x1]);
        if (n === 0x0 && r === 0x0)
            break;
        for (var i = n; i > 0x0; i--) {
            cards['push'](i);
        }
        while (r--) {
            var line = inputs[_0x384ae7(0x2)]()[_0x384ae7(0x1)]('\x20'), p = parseInt(line[0x0]) - 0x1, c = parseInt(line[0x1]), tmp;
            tmp = cards[_0x384ae7(0x3)](p, c);
            cards = tmp[_0x384ae7(0x4)](cards);
        }
        console[_0x384ae7(0x5)](cards[_0x384ae7(0x2)]());
    }
}(require('fs')['readFileSync'](a0_0x5557fc(0x6), a0_0x5557fc(0x7))));
var a0_0x21bc89 = a0_0x2d2f;
function myout(text) {
    var _0x3403e6 = a0_0x2d2f;
    console[_0x3403e6(0x0)](text);
}
function Main(input) {
    var _0x243725 = a0_0x2d2f;
    input = parseInt(input);
    var list = [];
    var output = 0x0;
    for (var i = 0x1; i <= input; i++) {
        output += i;
        list[_0x243725(0x1)](i);
        if (output == input) {
            if (_0x243725(0x2) !== 'JitpU') {
                output += i;
                list[_0x243725(0x1)](i);
                if (output == input) {
                    myout(list['join']('\x0a'));
                    return;
                } else if (output > input) {
                    var diff = output - input;
                    list['splice'](list[_0x243725(0x3)](diff), 0x1);
                    myout(list[_0x243725(0x4)]('\x0a'));
                    return;
                }
            } else {
                myout(list['join']('\x0a'));
                return;
            }
        } else if (output > input) {
            var diff = output - input;
            list[_0x243725(0x5)](list[_0x243725(0x3)](diff), 0x1);
            myout(list['join']('\x0a'));
            return;
        }
    }
}
Main(require('fs')[a0_0x21bc89(0x6)]('/dev/stdin', 'utf8')[a0_0x21bc89(0x7)]());
function a0_0x2d2f(mOloPX, key) {
    var stringArray = a0_0x3769();
    a0_0x2d2f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d2f(mOloPX, key);
}
function a0_0x3769() {
    var _0xf0426a = [
        'log',
        'push',
        'JitpU',
        'indexOf',
        'join',
        'splice',
        'readFileSync',
        'trim'
    ];
    a0_0x3769 = function () {
        return _0xf0426a;
    };
    return a0_0x3769();
}
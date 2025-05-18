var a0_0x32dfa1 = a0_0x45ef;
input = require('fs')[a0_0x32dfa1(0x0)]('/dev/stdin', 'utf8');
lines = input[a0_0x32dfa1(0x1)]('\x0a');
N = lines['shift']() * 0x1;
b = lines[a0_0x32dfa1(0x2)]()['split']('\x20');
a = [];
for (i = N; i > 0x0; i--) {
    found = ![];
    for (j = i; j > 0x0; j--) {
        if (b[j - 0x1] == j) {
            a[a0_0x32dfa1(0x3)](b['splice'](j - 0x1, 0x1));
            found = !![];
            break;
        }
    }
    if (!found) {
        a = [-0x1];
        break;
    }
}
function a0_0x45ef(mXvsFt, key) {
    var stringArray = a0_0x2541();
    a0_0x45ef = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x45ef(mXvsFt, key);
}
console[a0_0x32dfa1(0x4)](a[a0_0x32dfa1(0x5)]()[a0_0x32dfa1(0x6)]('\x0a'));
function a0_0x2541() {
    var _0x15da99 = [
        'readFileSync',
        'split',
        'shift',
        'push',
        'log',
        'reverse',
        'join'
    ];
    a0_0x2541 = function () {
        return _0x15da99;
    };
    return a0_0x2541();
}
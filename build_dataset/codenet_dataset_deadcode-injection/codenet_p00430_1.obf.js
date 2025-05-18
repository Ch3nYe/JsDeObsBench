function a0_0x2b7b(QwoNjm, key) {
    var stringArray = a0_0x4914();
    a0_0x2b7b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b7b(QwoNjm, key);
}
var a0_0x98c905 = a0_0x2b7b;
function a0_0x4914() {
    var _0x2a815d = [
        'log',
        'join',
        'push',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift'
    ];
    a0_0x4914 = function () {
        return _0x2a815d;
    };
    return a0_0x4914();
}
function bomb(arr) {
    var _0x2aa48a = a0_0x2b7b;
    console[_0x2aa48a(0x0)](arr[_0x2aa48a(0x1)]('\x20'));
    if (arr[0x0] === 0x1)
        return;
    var i = arr['length'] - 0x1;
    while (!![]) {
        if (arr[i] !== 0x1) {
            if (arr[i] === 0x2 || i === arr['length'] - 0x1) {
                arr[i]--;
                arr[_0x2aa48a(0x2)](0x1);
            } else {
                arr[i]--;
                arr[i + 0x1]++;
            }
            break;
        }
        i--;
    }
    bomb(arr);
}
var input = require('fs')['readFileSync'](a0_0x98c905(0x3), a0_0x98c905(0x4));
var Arr = input[a0_0x98c905(0x5)]()[a0_0x98c905(0x6)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x98c905(0x7)]() - 0x0;
    if (n == 0x0)
        break;
    bomb([n]);
}
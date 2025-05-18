var a0_0x31efea = a0_0x3aab;
var input = require('fs')[a0_0x31efea(0x0)](a0_0x31efea(0x1), 'utf8');
var s = input[a0_0x31efea(0x2)]();
var len = s[a0_0x31efea(0x3)];
function a0_0x429d() {
    var _0x2c40a4 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'length',
        '0123456789AabcdefghijklmnopqrstuvwxyzA',
        'replace',
        'log'
    ];
    a0_0x429d = function () {
        return _0x2c40a4;
    };
    return a0_0x429d();
}
var abc = a0_0x31efea(0x4)['split']('');
var sum = 0x0;
while (!![]) {
    if (s == '')
        break;
    var cnt = 0x0;
    var flag = ![];
    abc['forEach'](v => {
        var _0x3b9c9d = a0_0x3aab;
        var re = new RegExp(v);
        if (re['test'](s)) {
            if (flag)
                cnt++;
            flag = !![];
            s = s[_0x3b9c9d(0x5)](re, '');
        } else {
            if (cnt >= 0x3)
                sum += cnt - 0x2;
            cnt = 0x0;
            flag = ![];
        }
    });
}
function a0_0x3aab(AgWcYT, key) {
    var stringArray = a0_0x429d();
    a0_0x3aab = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3aab(AgWcYT, key);
}
console[a0_0x31efea(0x6)](len - sum);
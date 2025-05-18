var a0_0x1772dd = a0_0x50ec;
function a0_0x461b() {
    var _0x54ebd7 = [
        'readFileSync',
        'input',
        'ascii',
        'split',
        'insert',
        'push',
        'extract',
        'sort',
        'pop'
    ];
    a0_0x461b = function () {
        return _0x54ebd7;
    };
    return a0_0x461b();
}
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')[a0_0x1772dd(0x0)](config[a0_0x1772dd(0x1)], a0_0x1772dd(0x2))[a0_0x1772dd(0x3)](config['newline']);
function a0_0x50ec(icVNUK, key) {
    var stringArray = a0_0x461b();
    a0_0x50ec = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x50ec(icVNUK, key);
}
S = [];
for (i in line) {
    ary = line[i][a0_0x1772dd(0x3)]('\x20');
    if (ary[0x0] === a0_0x1772dd(0x4))
        S[a0_0x1772dd(0x5)](parseInt(ary[0x1], 0xa));
    else if (ary[0x0] === a0_0x1772dd(0x6)) {
        S[a0_0x1772dd(0x7)](function (a, b) {
            return a - b;
        });
        console['log'](S[a0_0x1772dd(0x8)]());
    }
}
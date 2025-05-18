var a0_0x4d8317 = a0_0x2dc5;
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')[a0_0x4d8317(0x0)](config[a0_0x4d8317(0x1)], a0_0x4d8317(0x2))[a0_0x4d8317(0x3)]()[a0_0x4d8317(0x4)](config[a0_0x4d8317(0x5)]);
function a0_0x2dc5(OFYfUJ, key) {
    var stringArray = a0_0x44e7();
    a0_0x2dc5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2dc5(OFYfUJ, key);
}
n = Number(line[a0_0x4d8317(0x6)]());
adj = {};
for (i in line) {
    ary = line[i]['split']('\x20');
    j = ary['shift']();
    ary[a0_0x4d8317(0x6)]();
    adj[j] = ary;
}
for (i = 0x1; i <= n; i++) {
    ary = [];
    for (j = 0x1; j <= n; j++) {
        if (adj[i]['indexOf'](String(j)) !== -0x1)
            ary[a0_0x4d8317(0x7)](0x1);
        else
            ary[a0_0x4d8317(0x7)](0x0);
    }
    console[a0_0x4d8317(0x8)](ary[a0_0x4d8317(0x9)]('\x20'));
}
function a0_0x44e7() {
    var _0x56532a = [
        'readFileSync',
        'input',
        'ascii',
        'trim',
        'split',
        'newline',
        'shift',
        'push',
        'log',
        'join'
    ];
    a0_0x44e7 = function () {
        return _0x56532a;
    };
    return a0_0x44e7();
}
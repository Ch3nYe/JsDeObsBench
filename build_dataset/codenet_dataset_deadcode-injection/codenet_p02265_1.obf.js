const a0_0x5a132d = a0_0x3423;
const config = {
    'input': a0_0x5a132d(0x0),
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], a0_0x5a132d(0x1))[a0_0x5a132d(0x2)](config[a0_0x5a132d(0x3)]);
function a0_0x5821() {
    const _0x4d02da = [
        '/dev/stdin',
        'utf-8',
        'split',
        'newline',
        'unshift',
        'length',
        'pop',
        'slice',
        'reduce',
        'insert',
        'delete',
        'deleteFirst',
        'deleteLast',
        'toString',
        'join',
        'log'
    ];
    a0_0x5821 = function () {
        return _0x4d02da;
    };
    return a0_0x5821();
}
const insert = (arr, x) => arr[a0_0x5a132d(0x4)](x);
const del = (arr, x) => {
    const _0x58eaa7 = a0_0x3423;
    for (var i = 0x0; i < arr[_0x58eaa7(0x5)]; i++) {
        if (x === arr[i])
            break;
    }
    if (i !== arr[_0x58eaa7(0x5)])
        arr['splice'](i, 0x1);
};
const delFirst = arr => arr['shift']();
function a0_0x3423(nAjskh, key) {
    const stringArray = a0_0x5821();
    a0_0x3423 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3423(nAjskh, key);
}
const delLast = arr => arr[a0_0x5a132d(0x6)]();
const cmds = line[a0_0x5a132d(0x7)](0x1);
const ans = cmds[a0_0x5a132d(0x8)]((acc, x) => {
    const _0x19fa82 = a0_0x3423;
    const cmd = x[_0x19fa82(0x2)]('\x20');
    switch (cmd[0x0]) {
    case _0x19fa82(0x9):
        insert(acc, parseInt(cmd[0x1]));
        break;
    case _0x19fa82(0xa):
        del(acc, parseInt(cmd[0x1]));
        break;
    case _0x19fa82(0xb):
        delFirst(acc);
        break;
    case _0x19fa82(0xc):
        delLast(acc);
        break;
    }
    return acc;
}, [])['map'](x => x[a0_0x5a132d(0xd)]())[a0_0x5a132d(0xe)]('\x20');
console[a0_0x5a132d(0xf)](ans);
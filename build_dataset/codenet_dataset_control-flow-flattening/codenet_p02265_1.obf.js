const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
const insert = (arr, x) => arr['unshift'](x);
const del = (arr, x) => {
    const HjLWnF = {
        'ErekA': function (x, y) {
            return x < y;
        }
    };
    for (var i = 0x0; HjLWnF['ErekA'](i, arr['length']); i++) {
        if (x === arr[i])
            break;
    }
    if (i !== arr['length'])
        arr['splice'](i, 0x1);
};
const delFirst = arr => arr['shift']();
const delLast = arr => arr['pop']();
const cmds = line['slice'](0x1);
const ans = cmds['reduce']((acc, x) => {
    const mZqLLz = {
        'EeNUo': 'insert',
        'nyRhN': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'nnEob': function (callee, param1) {
            return callee(param1);
        },
        'TOsAf': 'delete',
        'zzrKd': 'deleteFirst',
        'WrPZM': 'deleteLast'
    };
    const cmd = x['split']('\x20');
    switch (cmd[0x0]) {
    case mZqLLz['EeNUo']:
        mZqLLz['nyRhN'](insert, acc, mZqLLz['nnEob'](parseInt, cmd[0x1]));
        break;
    case mZqLLz['TOsAf']:
        del(acc, parseInt(cmd[0x1]));
        break;
    case mZqLLz['zzrKd']:
        mZqLLz['nnEob'](delFirst, acc);
        break;
    case mZqLLz['WrPZM']:
        delLast(acc);
        break;
    }
    return acc;
}, [])['map'](x => x['toString']())['join']('\x20');
console['log'](ans);
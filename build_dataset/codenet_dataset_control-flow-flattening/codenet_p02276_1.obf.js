const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
const list = line[0x1]['split']('\x20')['map'](x => parseInt(x));
const partition = arr => {
    const iyiZkB = {
        'HYKZq': function (x, y) {
            return x - y;
        },
        'wTjId': function (x, y) {
            return x < y;
        },
        'fWQtu': function (x, y) {
            return x - y;
        },
        'VnDBs': function (x, y) {
            return x <= y;
        },
        'zOUlU': function (x, y) {
            return x + y;
        },
        'xIFAt': function (x, y) {
            return x - y;
        },
        'dIqyS': function (x, y) {
            return x - y;
        }
    };
    const x = arr[iyiZkB['HYKZq'](arr['length'], 0x1)];
    const result = [...arr];
    let i = -0x1;
    for (let j = 0x0; iyiZkB['wTjId'](j, iyiZkB['fWQtu'](arr['length'], 0x1)); j++) {
        if (iyiZkB['VnDBs'](result[j], x)) {
            i++;
            const tmp = result[i];
            result[i] = result[j];
            result[j] = tmp;
        }
    }
    const tmp = result[iyiZkB['zOUlU'](i, 0x1)];
    result[iyiZkB['zOUlU'](i, 0x1)] = result[iyiZkB['xIFAt'](arr['length'], 0x1)];
    result[iyiZkB['dIqyS'](arr['length'], 0x1)] = tmp;
    return [
        i + 0x1,
        result
    ];
};
const res = partition(list);
console['log'](res[0x1]['map']((x, i) => i === res[0x0] ? '[' + x + ']' : x['toString']())['join']('\x20'));
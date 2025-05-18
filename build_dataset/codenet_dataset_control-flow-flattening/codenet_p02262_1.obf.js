const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
let cnt = 0x0;
const isort = (arr, g) => {
    const zlksUV = {
        'Rzlzl': function (x, y) {
            return x < y;
        },
        'Eykif': function (x, y) {
            return x >= y;
        },
        'wlmbG': function (x, y) {
            return x > y;
        },
        'rnfhC': function (x, y) {
            return x - y;
        },
        'mOvBu': function (x, y) {
            return x + y;
        }
    };
    for (let i = g; zlksUV['Rzlzl'](i, arr['length']); i++) {
        let v = arr[i];
        let j = i - g;
        while (zlksUV['Eykif'](j, 0x0) && zlksUV['wlmbG'](arr[j], v)) {
            arr[j + g] = arr[j];
            j = zlksUV['rnfhC'](j, g);
            cnt++;
        }
        arr[zlksUV['mOvBu'](j, g)] = v;
    }
    return arr;
};
const shellSort = arr => {
    const wvMPlR = {
        'BXUSZ': function (x, y) {
            return x < y;
        },
        'CeQJP': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    const g = arr['map']((_, i) => 0x3 * i + 0x1)['filter'](x => x <= arr['length'])['reverse']();
    console['log'](g['length']);
    console['log'](g['map'](x => x['toString']())['join']('\x20'));
    for (i = 0x0; wvMPlR['BXUSZ'](i, arr['length']); i++) {
        arr = wvMPlR['CeQJP'](isort, arr, g[i]);
    }
    return arr;
};
const n = parseInt(line[0x0]);
const data = line['slice'](0x1, n + 0x1)['map'](x => parseInt(x));
const sorted = shellSort(data);
console['log'](cnt);
console['log'](sorted['map'](x => x['toString']())['join']('\x0a'));
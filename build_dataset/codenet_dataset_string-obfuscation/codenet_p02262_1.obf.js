const a0_0x112db6 = a0_0x17b6;
(function (stringArrayFunction, comparisonValue) {
    const _0x23719c = a0_0x17b6;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x23719c(0x13d)) / 0x1 * (parseInt(_0x23719c(0x133)) / 0x2) + parseInt(_0x23719c(0x13b)) / 0x3 + -parseInt(_0x23719c(0x130)) / 0x4 * (parseInt(_0x23719c(0x135)) / 0x5) + parseInt(_0x23719c(0x13e)) / 0x6 + -parseInt(_0x23719c(0x12e)) / 0x7 * (parseInt(_0x23719c(0x132)) / 0x8) + parseInt(_0x23719c(0x140)) / 0x9 * (parseInt(_0x23719c(0x13f)) / 0xa) + parseInt(_0x23719c(0x12f)) / 0xb * (-parseInt(_0x23719c(0x138)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1b58, 0xe02a3));
const config = {
    'input': a0_0x112db6(0x141),
    'newline': '\x0a'
};
const line = require('fs')[a0_0x112db6(0x131)](config[a0_0x112db6(0x139)], 'utf-8')[a0_0x112db6(0x144)](config['newline']);
function a0_0x17b6(TVWBNT, key) {
    const stringArray = a0_0x1b58();
    a0_0x17b6 = function (index, key) {
        index = index - 0x12e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x17b6(TVWBNT, key);
}
let cnt = 0x0;
const isort = (arr, g) => {
    for (let i = g; i < arr['length']; i++) {
        let v = arr[i];
        let j = i - g;
        while (j >= 0x0 && arr[j] > v) {
            arr[j + g] = arr[j];
            j = j - g;
            cnt++;
        }
        arr[j + g] = v;
    }
    return arr;
};
const shellSort = arr => {
    const _0x40fed5 = a0_0x112db6;
    const g = arr[_0x40fed5(0x136)]((_, i) => 0x3 * i + 0x1)['filter'](x => x <= arr[_0x40fed5(0x13c)])[_0x40fed5(0x137)]();
    console['log'](g[_0x40fed5(0x13c)]);
    console[_0x40fed5(0x142)](g[_0x40fed5(0x136)](x => x[_0x40fed5(0x13a)]())[_0x40fed5(0x134)]('\x20'));
    for (i = 0x0; i < arr[_0x40fed5(0x13c)]; i++) {
        arr = isort(arr, g[i]);
    }
    return arr;
};
const n = parseInt(line[0x0]);
const data = line[a0_0x112db6(0x143)](0x1, n + 0x1)[a0_0x112db6(0x136)](x => parseInt(x));
const sorted = shellSort(data);
function a0_0x1b58() {
    const _0x6f2501 = [
        '1048927wBMrwX',
        '28988dLpiKX',
        'readFileSync',
        '16OBjOLC',
        '842234LdUGiR',
        'join',
        '305Eivrjp',
        'map',
        'reverse',
        '132sILrXK',
        'input',
        'toString',
        '972330bbWwNW',
        'length',
        '3xFbqvx',
        '940980TlLQee',
        '23770MZWBWB',
        '3240aKLbgr',
        '/dev/stdin',
        'log',
        'slice',
        'split',
        '667933LSLbQo'
    ];
    a0_0x1b58 = function () {
        return _0x6f2501;
    };
    return a0_0x1b58();
}
console['log'](cnt);
console[a0_0x112db6(0x142)](sorted['map'](x => x[a0_0x112db6(0x13a)]())[a0_0x112db6(0x134)]('\x0a'));
const a0_0x7b22c7 = a0_0x5927;
const config = {
    'input': a0_0x7b22c7(0x0),
    'newline': '\x0a'
};
const line = require('fs')[a0_0x7b22c7(0x1)](config[a0_0x7b22c7(0x2)], a0_0x7b22c7(0x3))[a0_0x7b22c7(0x4)](config['newline']);
function a0_0x9ee3() {
    const _0x260be7 = [
        '/dev/stdin',
        'readFileSync',
        'input',
        'utf-8',
        'split',
        'length',
        'filter',
        'reverse',
        'log',
        'join',
        'jQWXQ',
        'slice',
        'map',
        'toString'
    ];
    a0_0x9ee3 = function () {
        return _0x260be7;
    };
    return a0_0x9ee3();
}
let cnt = 0x0;
const isort = (arr, g) => {
    const _0x2749ed = a0_0x5927;
    for (let i = g; i < arr[_0x2749ed(0x5)]; i++) {
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
    const _0x5aa3e3 = a0_0x5927;
    const g = arr['map']((_, i) => 0x3 * i + 0x1)[_0x5aa3e3(0x6)](x => x <= arr['length'])[_0x5aa3e3(0x7)]();
    console[_0x5aa3e3(0x8)](g[_0x5aa3e3(0x5)]);
    console[_0x5aa3e3(0x8)](g['map'](x => x['toString']())[_0x5aa3e3(0x9)]('\x20'));
    for (i = 0x0; i < arr['length']; i++) {
        if (_0x5aa3e3(0xa) !== 'ZazDY') {
            arr = isort(arr, g[i]);
        } else {
            for (let i = g; i < arr[_0x5aa3e3(0x5)]; i++) {
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
        }
    }
    return arr;
};
const n = parseInt(line[0x0]);
const data = line[a0_0x7b22c7(0xb)](0x1, n + 0x1)['map'](x => parseInt(x));
const sorted = shellSort(data);
function a0_0x5927(pPpLBQ, key) {
    const stringArray = a0_0x9ee3();
    a0_0x5927 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5927(pPpLBQ, key);
}
console[a0_0x7b22c7(0x8)](cnt);
console[a0_0x7b22c7(0x8)](sorted[a0_0x7b22c7(0xc)](x => x[a0_0x7b22c7(0xd)]())[a0_0x7b22c7(0x9)]('\x0a'));
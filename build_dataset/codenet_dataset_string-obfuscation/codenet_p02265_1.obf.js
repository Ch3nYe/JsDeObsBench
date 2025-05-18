const a0_0x364110 = a0_0x34bb;
(function (stringArrayFunction, comparisonValue) {
    const _0xe7abd3 = a0_0x34bb;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xe7abd3(0xb0)) / 0x1 + -parseInt(_0xe7abd3(0xaf)) / 0x2 * (-parseInt(_0xe7abd3(0xbb)) / 0x3) + parseInt(_0xe7abd3(0xb2)) / 0x4 + parseInt(_0xe7abd3(0xb8)) / 0x5 * (parseInt(_0xe7abd3(0xb4)) / 0x6) + -parseInt(_0xe7abd3(0xae)) / 0x7 + parseInt(_0xe7abd3(0xc1)) / 0x8 * (parseInt(_0xe7abd3(0xb9)) / 0x9) + -parseInt(_0xe7abd3(0xb3)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x48ce, 0xea87c));
function a0_0x34bb(eioQln, key) {
    const stringArray = a0_0x48ce();
    a0_0x34bb = function (index, key) {
        index = index - 0xac;
        let value = stringArray[index];
        return value;
    };
    return a0_0x34bb(eioQln, key);
}
const config = {
    'input': a0_0x364110(0xbf),
    'newline': '\x0a'
};
const line = require('fs')[a0_0x364110(0xb1)](config[a0_0x364110(0xbd)], a0_0x364110(0xc2))[a0_0x364110(0xbc)](config[a0_0x364110(0xb7)]);
const insert = (arr, x) => arr['unshift'](x);
const del = (arr, x) => {
    const _0x209946 = a0_0x364110;
    for (var i = 0x0; i < arr[_0x209946(0xb6)]; i++) {
        if (x === arr[i])
            break;
    }
    if (i !== arr[_0x209946(0xb6)])
        arr[_0x209946(0xbe)](i, 0x1);
};
const delFirst = arr => arr[a0_0x364110(0xba)]();
const delLast = arr => arr['pop']();
const cmds = line[a0_0x364110(0xc0)](0x1);
function a0_0x48ce() {
    const _0x1bc900 = [
        '1775286KiCdTJ',
        'shift',
        '3veTgFt',
        'split',
        'input',
        'splice',
        '/dev/stdin',
        'slice',
        '72NkuMeJ',
        'utf-8',
        'log',
        'map',
        'reduce',
        '2625574lZRFhW',
        '3400462mbAKBQ',
        '109550WBPKJK',
        'readFileSync',
        '404004fGmXPX',
        '28598740BtMydf',
        '312PLJfkE',
        'deleteLast',
        'length',
        'newline',
        '70060DquEYO'
    ];
    a0_0x48ce = function () {
        return _0x1bc900;
    };
    return a0_0x48ce();
}
const ans = cmds[a0_0x364110(0xad)]((acc, x) => {
    const _0x237484 = a0_0x364110;
    const cmd = x[_0x237484(0xbc)]('\x20');
    switch (cmd[0x0]) {
    case 'insert':
        insert(acc, parseInt(cmd[0x1]));
        break;
    case 'delete':
        del(acc, parseInt(cmd[0x1]));
        break;
    case 'deleteFirst':
        delFirst(acc);
        break;
    case _0x237484(0xb5):
        delLast(acc);
        break;
    }
    return acc;
}, [])[a0_0x364110(0xac)](x => x['toString']())['join']('\x20');
console[a0_0x364110(0xc3)](ans);
const a0_0x2c940e = a0_0x1b91;
(function (stringArrayFunction, comparisonValue) {
    const _0x5d6012 = a0_0x1b91;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5d6012(0x118)) / 0x1 * (parseInt(_0x5d6012(0x116)) / 0x2) + -parseInt(_0x5d6012(0x125)) / 0x3 * (parseInt(_0x5d6012(0x11c)) / 0x4) + parseInt(_0x5d6012(0x11b)) / 0x5 + parseInt(_0x5d6012(0x11f)) / 0x6 + parseInt(_0x5d6012(0x115)) / 0x7 + parseInt(_0x5d6012(0x123)) / 0x8 + -parseInt(_0x5d6012(0x124)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f45, 0x848d0));
const config = {
    'input': a0_0x2c940e(0x11a),
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config[a0_0x2c940e(0x126)], a0_0x2c940e(0x11d))[a0_0x2c940e(0x122)](config[a0_0x2c940e(0x119)]);
function a0_0x2f45() {
    const _0x2c20c0 = [
        'map',
        'log',
        'split',
        '7992uCVOxq',
        '14670054ozskoJ',
        '2151fqPQzw',
        'input',
        '1088129CqAARF',
        '50afcazL',
        'length',
        '36557tnwILD',
        'newline',
        '/dev/stdin',
        '3720770LziAnL',
        '440jqjLZG',
        'utf-8',
        'toString',
        '2623674CRCgSn'
    ];
    a0_0x2f45 = function () {
        return _0x2c20c0;
    };
    return a0_0x2f45();
}
const list = line[0x1][a0_0x2c940e(0x122)]('\x20')[a0_0x2c940e(0x120)](x => parseInt(x));
const partition = arr => {
    const _0x122d23 = a0_0x2c940e;
    const x = arr[arr['length'] - 0x1];
    const result = [...arr];
    let i = -0x1;
    for (let j = 0x0; j < arr[_0x122d23(0x117)] - 0x1; j++) {
        if (result[j] <= x) {
            i++;
            const tmp = result[i];
            result[i] = result[j];
            result[j] = tmp;
        }
    }
    const tmp = result[i + 0x1];
    result[i + 0x1] = result[arr['length'] - 0x1];
    result[arr[_0x122d23(0x117)] - 0x1] = tmp;
    return [
        i + 0x1,
        result
    ];
};
function a0_0x1b91(xfTDRm, key) {
    const stringArray = a0_0x2f45();
    a0_0x1b91 = function (index, key) {
        index = index - 0x115;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1b91(xfTDRm, key);
}
const res = partition(list);
console[a0_0x2c940e(0x121)](res[0x1][a0_0x2c940e(0x120)]((x, i) => i === res[0x0] ? '[' + x + ']' : x[a0_0x2c940e(0x11e)]())['join']('\x20'));
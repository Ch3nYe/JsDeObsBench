function a0_0x1787(CzPFyj, key) {
    const stringArray = a0_0x5a7b();
    a0_0x1787 = function (index, key) {
        index = index - 0x109;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1787(CzPFyj, key);
}
const a0_0x14ac95 = a0_0x1787;
function a0_0x5a7b() {
    const _0x5f536c = [
        'length',
        '7904322RQWGab',
        'readFileSync',
        '10003iNFmoF',
        '101330RBcFqr',
        'log',
        '222hPkPSS',
        '/dev/stdin',
        '4283792PoZzbc',
        '848692OjzzCm',
        '1088520wMRfJY',
        '1405erGeDt',
        '4364GaLhEI'
    ];
    a0_0x5a7b = function () {
        return _0x5f536c;
    };
    return a0_0x5a7b();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5d1237 = a0_0x1787;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5d1237(0x111)) / 0x1 + parseInt(_0x5d1237(0x109)) / 0x2 + parseInt(_0x5d1237(0x10a)) / 0x3 + parseInt(_0x5d1237(0x10c)) / 0x4 * (-parseInt(_0x5d1237(0x10b)) / 0x5) + -parseInt(_0x5d1237(0x113)) / 0x6 * (-parseInt(_0x5d1237(0x110)) / 0x7) + parseInt(_0x5d1237(0x115)) / 0x8 + -parseInt(_0x5d1237(0x10e)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5a7b, 0x474c2));
console[a0_0x14ac95(0x112)]((args => {
    const _0x216407 = a0_0x14ac95;
    const [s, t] = args['trim']()['split']`\n`;
    const sl = s[_0x216407(0x10d)], tl = t[_0x216407(0x10d)];
    let i = -0x1, cyc = 0x0;
    T:
        for (let j = 0x0; j < tl; j++) {
            for (let k = i + 0x1; k < sl; k++) {
                if (s[k] === t[j]) {
                    i = k;
                    continue T;
                }
            }
            if (i === -0x1)
                return '-1';
            cyc++;
            i = -0x1;
            j--;
        }
    return '' + (cyc * sl + i + 0x1);
})(require('fs')[a0_0x14ac95(0x10f)](a0_0x14ac95(0x114), 'utf8')));
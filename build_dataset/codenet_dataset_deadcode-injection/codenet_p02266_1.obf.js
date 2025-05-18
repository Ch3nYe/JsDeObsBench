const a0_0x2b88b7 = a0_0x167f;
const calc = str => {
    const _0x1c3236 = a0_0x167f;
    const areas = [];
    const depthIndexes = [];
    let sum = 0x0;
    for (let i = 0x0; i < str[_0x1c3236(0x0)]; i++) {
        if (_0x1c3236(0x1) === _0x1c3236(0x1)) {
            const char = str[i];
            if (char === '\x5c') {
                depthIndexes[_0x1c3236(0x2)](i);
                continue;
            }
            if (char === '/' && depthIndexes[_0x1c3236(0x0)] > 0x0) {
                const j = depthIndexes[_0x1c3236(0x3)]();
                sum += i - j;
                let currentArea = i - j;
                while (areas['length'] > 0x0 && areas[areas[_0x1c3236(0x0)] - 0x1]['depth'] > j) {
                    currentArea += areas[areas[_0x1c3236(0x0)] - 0x1][_0x1c3236(0x4)];
                    areas[_0x1c3236(0x3)]();
                }
                areas['push']({
                    'depth': j,
                    'area': currentArea
                });
            }
        } else {
            console[_0x1c3236(0x5)](0x0);
            return;
        }
    }
    console[_0x1c3236(0x5)](sum);
    if (areas[_0x1c3236(0x0)] === 0x0) {
        console[_0x1c3236(0x5)](0x0);
        return;
    }
    console[_0x1c3236(0x5)](areas[_0x1c3236(0x0)] + '\x20' + areas[_0x1c3236(0x6)](obj => obj[_0x1c3236(0x4)])[_0x1c3236(0x7)]('\x20'));
};
let inputStr = '';
process[a0_0x2b88b7(0x8)]['on'](a0_0x2b88b7(0x9), input => {
    const _0x41dede = a0_0x167f;
    inputStr += String[_0x41dede(0xa)]`${ input }`;
});
function a0_0x167f(OWhNEI, key) {
    const stringArray = a0_0x143e();
    a0_0x167f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x167f(OWhNEI, key);
}
process['stdin']['on'](a0_0x2b88b7(0xb), () => {
    calc(inputStr);
});
function a0_0x143e() {
    const _0x496b72 = [
        'length',
        'sBJws',
        'push',
        'pop',
        'area',
        'log',
        'map',
        'join',
        'stdin',
        'data',
        'raw',
        'end'
    ];
    a0_0x143e = function () {
        return _0x496b72;
    };
    return a0_0x143e();
}
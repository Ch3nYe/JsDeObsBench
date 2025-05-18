const a0_0x22af8e = a0_0x241a;
function a0_0x5807() {
    const _0xd0911c = [
        '7274370OEuHRv',
        'log',
        '234222FYNJCv',
        '1096CcTnaE',
        '22232080sJZBiF',
        'map',
        'stdin',
        'data',
        'end',
        '2427250yitiwi',
        '42OXoVlt',
        'split',
        '68odZevx',
        '78636lpGMKg',
        '117774veVlrj',
        '1492914MmNLRo'
    ];
    a0_0x5807 = function () {
        return _0xd0911c;
    };
    return a0_0x5807();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1765bd = a0_0x241a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1765bd(0x128)) / 0x1 + parseInt(_0x1765bd(0x122)) / 0x2 + -parseInt(_0x1765bd(0x126)) / 0x3 * (-parseInt(_0x1765bd(0x125)) / 0x4) + parseInt(_0x1765bd(0x129)) / 0x5 + -parseInt(_0x1765bd(0x12b)) / 0x6 * (parseInt(_0x1765bd(0x123)) / 0x7) + parseInt(_0x1765bd(0x11c)) / 0x8 * (parseInt(_0x1765bd(0x127)) / 0x9) + -parseInt(_0x1765bd(0x11d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5807, 0xe987d));
const processData = lines => {
    const _0x392ab3 = a0_0x241a;
    let [n, m] = lines[0x0][_0x392ab3(0x124)]('\x20')[_0x392ab3(0x11e)](x => +x);
    if (n % 0x2 === 0x1) {
        let end = n - 0x1;
        let start = 0x1;
        while (m) {
            console[_0x392ab3(0x12a)](start++ + '\x20' + end--);
            m--;
        }
    } else {
        let end = n / 0x2 + 0x1;
        let start = n / 0x2;
        while (m) {
            console[_0x392ab3(0x12a)](start-- + '\x20' + end++);
            m--;
        }
    }
};
let i = '';
function a0_0x241a(cMpfAi, key) {
    const stringArray = a0_0x5807();
    a0_0x241a = function (index, key) {
        index = index - 0x11c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x241a(cMpfAi, key);
}
process[a0_0x22af8e(0x11f)]['on'](a0_0x22af8e(0x120), c => i += c);
process[a0_0x22af8e(0x11f)]['on'](a0_0x22af8e(0x121), () => {
    const _0x40e342 = a0_0x22af8e;
    const {EOL: EOL} = require('os');
    const lines = i[_0x40e342(0x124)](EOL);
    processData(lines);
});
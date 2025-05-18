const a0_0x12e552 = a0_0x1ded;
(function (stringArrayFunction, comparisonValue) {
    const _0x326816 = a0_0x1ded;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x326816(0x1b0)) / 0x1 * (-parseInt(_0x326816(0x1ad)) / 0x2) + -parseInt(_0x326816(0x1af)) / 0x3 * (parseInt(_0x326816(0x1b3)) / 0x4) + -parseInt(_0x326816(0x1bd)) / 0x5 + -parseInt(_0x326816(0x1b1)) / 0x6 * (-parseInt(_0x326816(0x1b6)) / 0x7) + parseInt(_0x326816(0x1bc)) / 0x8 + -parseInt(_0x326816(0x1bb)) / 0x9 + -parseInt(_0x326816(0x1b9)) / 0xa * (-parseInt(_0x326816(0x1b5)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x54c8, 0x35686));
function a0_0x54c8() {
    const _0x3b7449 = [
        '901AtTwik',
        '13194sBmUpv',
        'stdin',
        '20564uUAwWw',
        'split',
        '1056tCsvuv',
        '1043eHieLG',
        'map',
        'max',
        '26900tnVaMJ',
        'log',
        '3644343SettBD',
        '823192wOOotf',
        '1170875QCOFEZ',
        '866LSLToM',
        'end',
        '129XpxNeh'
    ];
    a0_0x54c8 = function () {
        return _0x3b7449;
    };
    return a0_0x54c8();
}
const processData = lines => {
    const _0x5d9c4b = a0_0x1ded;
    const [n, m] = lines[0x0][_0x5d9c4b(0x1b4)]('\x20')[_0x5d9c4b(0x1b7)](x => +x);
    let friendships = {};
    for (let i = 0x0; i < m; i++) {
        const f = lines[i + 0x1][_0x5d9c4b(0x1b4)]('\x20')[_0x5d9c4b(0x1b7)](x => +x);
        let friendItem = friendships[f[0x0]] || friendships[f[0x1]] || {};
        friendships[f[0x0]] = friendItem;
        friendships[f[0x1]] = friendItem;
        friendItem[f[0x0]] = !![];
        friendItem[f[0x1]] = !![];
    }
    let maxCount = 0x1;
    for (let p in friendships) {
        let count = 0x0;
        for (let t2 in friendships[p]) {
            count++;
        }
        maxCount = Math[_0x5d9c4b(0x1b8)](maxCount, count);
    }
    console[_0x5d9c4b(0x1ba)](maxCount);
};
let i = '';
function a0_0x1ded(dIzKOt, key) {
    const stringArray = a0_0x54c8();
    a0_0x1ded = function (index, key) {
        index = index - 0x1ad;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1ded(dIzKOt, key);
}
process[a0_0x12e552(0x1b2)]['on']('data', c => i += c);
process[a0_0x12e552(0x1b2)]['on'](a0_0x12e552(0x1ae), () => {
    const {EOL: EOL} = require('os');
    const lines = i['split'](EOL);
    processData(lines);
});
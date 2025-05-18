function a0_0x46c1(EMNYKb, key) {
    const stringArray = a0_0x58b5();
    a0_0x46c1 = function (index, key) {
        index = index - 0x194;
        let value = stringArray[index];
        return value;
    };
    return a0_0x46c1(EMNYKb, key);
}
const a0_0x1eb4f9 = a0_0x46c1;
(function (stringArrayFunction, comparisonValue) {
    const _0x4b1f65 = a0_0x46c1;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4b1f65(0x1a5)) / 0x1 * (parseInt(_0x4b1f65(0x19b)) / 0x2) + -parseInt(_0x4b1f65(0x195)) / 0x3 + parseInt(_0x4b1f65(0x19e)) / 0x4 + -parseInt(_0x4b1f65(0x199)) / 0x5 + -parseInt(_0x4b1f65(0x1a7)) / 0x6 * (-parseInt(_0x4b1f65(0x19a)) / 0x7) + parseInt(_0x4b1f65(0x198)) / 0x8 + -parseInt(_0x4b1f65(0x1a3)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x58b5, 0x9dfd6));
const calc = str => {
    const _0x2e638b = a0_0x46c1;
    const areas = [];
    const depthIndexes = [];
    let sum = 0x0;
    for (let i = 0x0; i < str['length']; i++) {
        const char = str[i];
        if (char === '\x5c') {
            depthIndexes[_0x2e638b(0x19f)](i);
            continue;
        }
        if (char === '/' && depthIndexes[_0x2e638b(0x1a4)] > 0x0) {
            const j = depthIndexes[_0x2e638b(0x1a1)]();
            sum += i - j;
            let currentArea = i - j;
            while (areas['length'] > 0x0 && areas[areas['length'] - 0x1][_0x2e638b(0x196)] > j) {
                currentArea += areas[areas[_0x2e638b(0x1a4)] - 0x1]['area'];
                areas[_0x2e638b(0x1a1)]();
            }
            areas[_0x2e638b(0x19f)]({
                'depth': j,
                'area': currentArea
            });
        }
    }
    console[_0x2e638b(0x19d)](sum);
    if (areas[_0x2e638b(0x1a4)] === 0x0) {
        console[_0x2e638b(0x19d)](0x0);
        return;
    }
    console[_0x2e638b(0x19d)](areas['length'] + '\x20' + areas[_0x2e638b(0x197)](obj => obj[_0x2e638b(0x1a6)])[_0x2e638b(0x19c)]('\x20'));
};
let inputStr = '';
process[a0_0x1eb4f9(0x1a0)]['on'](a0_0x1eb4f9(0x1a2), input => {
    const _0x4f2634 = a0_0x1eb4f9;
    inputStr += String[_0x4f2634(0x194)]`${ input }`;
});
function a0_0x58b5() {
    const _0x55d0c9 = [
        '1rfuZQj',
        'area',
        '63882iiLeha',
        'raw',
        '3624039GmgMzp',
        'depth',
        'map',
        '8387840MSebdr',
        '3022125GWntMd',
        '623ROzfjF',
        '234082GvdEAL',
        'join',
        'log',
        '2436896ghxpDl',
        'push',
        'stdin',
        'pop',
        'data',
        '2364876MzZbNJ',
        'length'
    ];
    a0_0x58b5 = function () {
        return _0x55d0c9;
    };
    return a0_0x58b5();
}
process['stdin']['on']('end', () => {
    calc(inputStr);
});
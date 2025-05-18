const a0_0x46cd06 = a0_0x4921;
(function (stringArrayFunction, comparisonValue) {
    const _0x342fb1 = a0_0x4921;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x342fb1(0x1c7)) / 0x1 + parseInt(_0x342fb1(0x1c8)) / 0x2 + -parseInt(_0x342fb1(0x1c9)) / 0x3 * (parseInt(_0x342fb1(0x1ba)) / 0x4) + -parseInt(_0x342fb1(0x1b9)) / 0x5 + parseInt(_0x342fb1(0x1c3)) / 0x6 + -parseInt(_0x342fb1(0x1bf)) / 0x7 * (-parseInt(_0x342fb1(0x1bc)) / 0x8) + -parseInt(_0x342fb1(0x1c1)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2770, 0x4f30a));
function a0_0x2770() {
    const _0x241e0e = [
        '1627164gevjHZ',
        'map',
        'length',
        'split',
        '311320TxTNCE',
        '625344oiePrp',
        '15ffhZhM',
        '864840pZyaxl',
        '443236NnfERo',
        'readFileSync',
        '12808GnBHDP',
        'indexOf',
        'log',
        '889hYfENA',
        'push',
        '424242xzmADX',
        '/dev/stdin'
    ];
    a0_0x2770 = function () {
        return _0x241e0e;
    };
    return a0_0x2770();
}
function a0_0x4921(HLrbcm, key) {
    const stringArray = a0_0x2770();
    a0_0x4921 = function (index, key) {
        index = index - 0x1b9;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4921(HLrbcm, key);
}
function Main(input) {
    const _0x276f88 = a0_0x4921;
    tmp = input[_0x276f88(0x1c6)]('\x0a');
    tmp2 = tmp[0x0]['split']('\x20');
    var n = parseInt(tmp2[0x0], 0xa);
    var k = parseInt(tmp2[0x1], 0xa);
    tmp['shift']();
    arry = tmp['slice']();
    list = [];
    count = 0x0;
    tmp3 = [];
    for (let i = 0x0; i < arry[_0x276f88(0x1c5)]; i++) {
        if (i % 0x2 !== 0x0) {
            arry[i] = arry[i][_0x276f88(0x1c6)]('\x20');
            tmp3 = arry[i][_0x276f88(0x1c4)](Number);
            for (let index = 0x0; index < tmp3[_0x276f88(0x1c5)]; index++) {
                list[_0x276f88(0x1c0)](tmp3[index]);
            }
        }
    }
    for (let i = 0x1; i <= n; i++) {
        if (list[_0x276f88(0x1bd)](i) >= 0x0) {
        } else {
            count += 0x1;
        }
    }
    console[_0x276f88(0x1be)](count);
}
Main(require('fs')[a0_0x46cd06(0x1bb)](a0_0x46cd06(0x1c2), 'utf8'));
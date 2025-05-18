const a0_0x4124cc = a0_0x3af0;
(function (stringArrayFunction, comparisonValue) {
    const _0x2fd063 = a0_0x3af0;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2fd063(0x1b4)) / 0x1 * (-parseInt(_0x2fd063(0x1bf)) / 0x2) + parseInt(_0x2fd063(0x1bc)) / 0x3 * (-parseInt(_0x2fd063(0x1be)) / 0x4) + -parseInt(_0x2fd063(0x1ba)) / 0x5 * (parseInt(_0x2fd063(0x1b3)) / 0x6) + parseInt(_0x2fd063(0x1b8)) / 0x7 + -parseInt(_0x2fd063(0x1b7)) / 0x8 + parseInt(_0x2fd063(0x1bd)) / 0x9 + parseInt(_0x2fd063(0x1b9)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f55, 0xe02fa));
function Main(input) {
    const _0x398f9c = a0_0x3af0;
    const numbers = input['split']('\x20')[_0x398f9c(0x1b5)](n => Number(n));
    const a = numbers[0x0];
    const b = numbers[0x1];
    const c = numbers[0x2];
    if (a === b) {
        console[_0x398f9c(0x1bb)](c);
    } else if (b === c) {
        console['log'](a);
    } else {
        console[_0x398f9c(0x1bb)](b);
    }
}
function a0_0x2f55() {
    const _0x4360e6 = [
        '14919hIpZVl',
        '253440FqtbdX',
        '976iBPacE',
        '2rDdfLa',
        '4555374sCciTv',
        '1205489oprJnl',
        'map',
        '/dev/stdin',
        '1959464uqImYN',
        '5162976OLsZAA',
        '11646230tprujc',
        '5hBFiUx',
        'log'
    ];
    a0_0x2f55 = function () {
        return _0x4360e6;
    };
    return a0_0x2f55();
}
function a0_0x3af0(BdBqDn, key) {
    const stringArray = a0_0x2f55();
    a0_0x3af0 = function (index, key) {
        index = index - 0x1b3;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3af0(BdBqDn, key);
}
Main(require('fs')['readFileSync'](a0_0x4124cc(0x1b6), 'utf8'));
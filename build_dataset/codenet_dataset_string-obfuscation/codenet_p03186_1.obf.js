'use strict';
function a0_0x3d0a() {
    const _0x1d3e67 = [
        'map',
        '24YKQQSL',
        '42bsXsKf',
        '206710ktUQvy',
        '4013766bqhAjW',
        '1521562yrhEef',
        '1611OwWkrH',
        'split',
        'trim',
        '5622432XOSkgJ',
        '925722ZlvBtb',
        '876985goQFWN',
        '/dev/stdin',
        '137556vBnuGH',
        'log',
        'readFileSync'
    ];
    a0_0x3d0a = function () {
        return _0x1d3e67;
    };
    return a0_0x3d0a();
}
const a0_0x126aec = a0_0xda8c;
(function (stringArrayFunction, comparisonValue) {
    const _0x5ae5f7 = a0_0xda8c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5ae5f7(0x192)) / 0x1 + -parseInt(_0x5ae5f7(0x18d)) / 0x2 + -parseInt(_0x5ae5f7(0x18c)) / 0x3 + -parseInt(_0x5ae5f7(0x189)) / 0x4 * (-parseInt(_0x5ae5f7(0x193)) / 0x5) + -parseInt(_0x5ae5f7(0x185)) / 0x6 * (parseInt(_0x5ae5f7(0x18a)) / 0x7) + -parseInt(_0x5ae5f7(0x191)) / 0x8 + parseInt(_0x5ae5f7(0x18e)) / 0x9 * (parseInt(_0x5ae5f7(0x18b)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3d0a, 0xd8b9a));
function Main(input) {
    const _0x47894b = a0_0xda8c;
    input = input[_0x47894b(0x190)]()[_0x47894b(0x18f)]('\x20')[_0x47894b(0x188)](Number);
    let badKusuri = input[0x0];
    let goodKusuri = input[0x1];
    let goodPoison = input[0x2];
    for (; goodKusuri > 0x0 && goodPoison > 0x0;) {
        goodKusuri--;
        goodPoison--;
    }
    if (goodPoison == 0x0) {
        goodKusuri = 0x0;
    } else {
        for (; badKusuri > 0x0 && goodPoison > 0x0;) {
            badKusuri--;
            goodPoison--;
        }
    }
    if (goodPoison > 0x0) {
        goodPoison--;
    }
    console[_0x47894b(0x186)](input[0x1] + input[0x2] - (goodKusuri + goodPoison));
}
function a0_0xda8c(slwJhb, key) {
    const stringArray = a0_0x3d0a();
    a0_0xda8c = function (index, key) {
        index = index - 0x184;
        let value = stringArray[index];
        return value;
    };
    return a0_0xda8c(slwJhb, key);
}
Main(require('fs')[a0_0x126aec(0x187)](a0_0x126aec(0x184), 'utf8'));
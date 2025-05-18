const a0_0x41c0cf = a0_0x1a3e;
(function (stringArrayFunction, comparisonValue) {
    const _0x29563f = a0_0x1a3e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x29563f(0x1ab)) / 0x1 * (parseInt(_0x29563f(0x198)) / 0x2) + parseInt(_0x29563f(0x1a5)) / 0x3 + parseInt(_0x29563f(0x1a0)) / 0x4 * (-parseInt(_0x29563f(0x19b)) / 0x5) + -parseInt(_0x29563f(0x199)) / 0x6 + -parseInt(_0x29563f(0x197)) / 0x7 * (parseInt(_0x29563f(0x1a7)) / 0x8) + parseInt(_0x29563f(0x19f)) / 0x9 + -parseInt(_0x29563f(0x1a1)) / 0xa * (-parseInt(_0x29563f(0x1aa)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1fa0, 0xab631));
function a0_0x1a3e(fOCKhw, key) {
    const stringArray = a0_0x1fa0();
    a0_0x1a3e = function (index, key) {
        index = index - 0x197;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1a3e(fOCKhw, key);
}
function Main(input) {
    'use strict';
    const _0x202587 = a0_0x1a3e;
    const temp = input[_0x202587(0x1ac)]('\x0a');
    const s = temp[_0x202587(0x1a9)]()['split']();
    const q = parseInt(temp['shift']());
    const queries = temp['map'](query => query['split']('\x20'));
    let reverse_flag = 0x0;
    for (let i = 0x0; i < q; i++) {
        const query = queries[i];
        if (query['length'] == 0x1)
            reverse_flag = (reverse_flag + 0x1) % 0x2;
        else if (query[_0x202587(0x1a3)] == 0x3) {
            if (reverse_flag + parseInt(query[0x1]) % 0x2 == 0x0)
                s[_0x202587(0x19d)](query[0x2]);
            else
                s[_0x202587(0x1a8)](query[0x2]);
        }
    }
    if (reverse_flag)
        console[_0x202587(0x19e)](s[_0x202587(0x1a4)]()['join']('') + '\x0a');
    else
        console['log'](s[_0x202587(0x19a)]('') + '\x0a');
}
function a0_0x1fa0() {
    const _0x5ea24d = [
        '8136297VgKkvs',
        '887776zIwvfD',
        '13490TgsbQg',
        'readFileSync',
        'length',
        'reverse',
        '669006yRsjvB',
        'utf8',
        '6617392TPoYqv',
        'unshift',
        'shift',
        '12529UBuDip',
        '26823FDwlwU',
        'split',
        '7UdTEMi',
        '8WGKFBU',
        '4830810ANyHLg',
        'join',
        '5qVHKwP',
        '/dev/stdin',
        'push',
        'log'
    ];
    a0_0x1fa0 = function () {
        return _0x5ea24d;
    };
    return a0_0x1fa0();
}
Main(require('fs')[a0_0x41c0cf(0x1a2)](a0_0x41c0cf(0x19c), a0_0x41c0cf(0x1a6)));
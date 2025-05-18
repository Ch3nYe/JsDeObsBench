function a0_0x5449() {
    const _0x8625f4 = [
        '33AYLaTY',
        '2193766voHESW',
        '1DTCAkx',
        '303045hwxYmt',
        '145000ovzYCz',
        '60WpGQKR',
        'length',
        '273100ZCEbVe',
        '293908MAaAtR',
        '/dev/stdin',
        'trim',
        '1472967xQquqF',
        '1234996NRofJC',
        'log',
        'readFileSync'
    ];
    a0_0x5449 = function () {
        return _0x8625f4;
    };
    return a0_0x5449();
}
const a0_0x4a6ebd = a0_0x27da;
(function (stringArrayFunction, comparisonValue) {
    const _0x1ef216 = a0_0x27da;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1ef216(0xb5)) / 0x1 * (parseInt(_0x1ef216(0xc3)) / 0x2) + -parseInt(_0x1ef216(0xc2)) / 0x3 * (parseInt(_0x1ef216(0xbb)) / 0x4) + parseInt(_0x1ef216(0xb6)) / 0x5 * (parseInt(_0x1ef216(0xb8)) / 0x6) + -parseInt(_0x1ef216(0xbf)) / 0x7 + -parseInt(_0x1ef216(0xb7)) / 0x8 + -parseInt(_0x1ef216(0xbe)) / 0x9 + parseInt(_0x1ef216(0xba)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5449, 0x89a6c));
function a0_0x27da(uopvRx, key) {
    const stringArray = a0_0x5449();
    a0_0x27da = function (index, key) {
        index = index - 0xb5;
        let value = stringArray[index];
        return value;
    };
    return a0_0x27da(uopvRx, key);
}
console[a0_0x4a6ebd(0xc0)]((args => {
    const _0x1b6f78 = a0_0x4a6ebd;
    const s = args[_0x1b6f78(0xbd)]();
    const N = s[_0x1b6f78(0xb9)] - 0x1;
    let x = 0x0;
    for (let i = 0x0, j = N; i < j; i++, j--) {
        while (s[i] !== s[j]) {
            if (s[i] === 'x')
                x++, i++;
            else if (s[j] === 'x')
                x++, j--;
            else
                return '-1';
        }
    }
    return '' + x;
})(require('fs')[a0_0x4a6ebd(0xc1)](a0_0x4a6ebd(0xbc), 'utf8')));
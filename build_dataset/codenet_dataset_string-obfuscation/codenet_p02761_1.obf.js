var a0_0x382f9b = a0_0x5541;
function a0_0x5541(EILEyf, key) {
    var stringArray = a0_0x2190();
    a0_0x5541 = function (index, key) {
        index = index - 0x1c6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5541(EILEyf, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4d80e8 = a0_0x5541;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4d80e8(0x1d4)) / 0x1 * (parseInt(_0x4d80e8(0x1c6)) / 0x2) + -parseInt(_0x4d80e8(0x1d7)) / 0x3 * (-parseInt(_0x4d80e8(0x1c8)) / 0x4) + -parseInt(_0x4d80e8(0x1d2)) / 0x5 * (parseInt(_0x4d80e8(0x1d0)) / 0x6) + parseInt(_0x4d80e8(0x1d9)) / 0x7 * (-parseInt(_0x4d80e8(0x1c7)) / 0x8) + parseInt(_0x4d80e8(0x1cf)) / 0x9 + -parseInt(_0x4d80e8(0x1d8)) / 0xa * (parseInt(_0x4d80e8(0x1d1)) / 0xb) + parseInt(_0x4d80e8(0x1d6)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2190, 0x95fda));
function Main(input) {
    var _0x13a2bd = a0_0x5541;
    input = input['split']('\x0a');
    tmp = input[_0x13a2bd(0x1ce)]();
    N = parseInt(tmp[_0x13a2bd(0x1d3)]('\x20')[0x0]);
    M = tmp[_0x13a2bd(0x1d3)]('\x20')[0x1];
    S = input;
    A = 'n'[_0x13a2bd(0x1c9)](N)[_0x13a2bd(0x1d3)]('');
    flag = !![];
    S[_0x13a2bd(0x1cb)](v => {
        var _0x27862f = _0x13a2bd;
        t = v[_0x27862f(0x1d3)]('\x20')[_0x27862f(0x1d5)](v => parseInt(v));
        if (A[t[0x0] - 0x1] != 'n' && A[t[0x0] - 0x1] != t[0x1])
            flag = ![];
        A[t[0x0] - 0x1] = t[0x1];
    });
    A = A['join']('');
    A = A[_0x13a2bd(0x1da)](/^nn([0-9])/, '10$1');
    A = A[_0x13a2bd(0x1da)](/^n([0-9])/, '1$1');
    A = A[_0x13a2bd(0x1da)](/n/g, '0');
    A = parseInt(A);
    if (flag && (A + '')[_0x13a2bd(0x1db)] == N) {
        console[_0x13a2bd(0x1cd)](A);
    } else {
        console[_0x13a2bd(0x1cd)](-0x1);
    }
}
function a0_0x2190() {
    var _0x404c9 = [
        '73282XIqKDA',
        '17585QHgwLT',
        'split',
        '3019jKieEr',
        'map',
        '23123652iimwQL',
        '3HXnelB',
        '920TbVvLg',
        '42nKnLVb',
        'replace',
        'length',
        '314ltYjii',
        '954232ekzQCI',
        '92804tHoDge',
        'repeat',
        '/dev/stdin',
        'forEach',
        'readFileSync',
        'log',
        'shift',
        '7650936wxomgk',
        '654SNuETl'
    ];
    a0_0x2190 = function () {
        return _0x404c9;
    };
    return a0_0x2190();
}
Main(require('fs')[a0_0x382f9b(0x1cc)](a0_0x382f9b(0x1ca), 'utf8'));
const a0_0x3e4c8e = a0_0x3639;
function a0_0x3639(aTFppU, key) {
    const stringArray = a0_0x5707();
    a0_0x3639 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3639(aTFppU, key);
}
function Main(input) {
    const _0x15fc78 = a0_0x3639;
    input = input[_0x15fc78(0x0)]('\x0a');
    inputStr = input[0x0]['split']('\x20');
    const L = Number['parseInt'](inputStr[0x0]);
    const R = Number[_0x15fc78(0x1)](inputStr[0x1]);
    var min = 0x7e2;
    if (L * R > 0x7e3) {
        if (R - L < 0x7e3) {
            const L2 = L % 0x7e3;
            const R2 = R % 0x7e3;
            for (var i1 = L2; i1 < R2; i1++) {
                for (var i2 = i1 + 0x1; i2 < R2 + 0x1; i2++) {
                    min = Math[_0x15fc78(0x2)](min, i1 * i2 % 0x7e3);
                    if (min === 0x0) {
                        break;
                    }
                }
            }
            console['log'](min);
        } else {
            console[_0x15fc78(0x3)](0x0);
        }
    } else {
        console['log'](L * (L + 0x1));
    }
}
Main(require('fs')[a0_0x3e4c8e(0x4)](a0_0x3e4c8e(0x5), 'utf8'));
function a0_0x5707() {
    const _0x2374c7 = [
        'split',
        'parseInt',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x5707 = function () {
        return _0x2374c7;
    };
    return a0_0x5707();
}
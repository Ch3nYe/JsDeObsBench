function a0_0x1e90(fvICqD, key) {
    var stringArray = a0_0x4e7f();
    a0_0x1e90 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1e90(fvICqD, key);
}
var a0_0x461f82 = a0_0x1e90;
function a0_0x4e7f() {
    var _0x15986b = [
        'split',
        'length',
        'push',
        'bEsAb',
        'nAyWf',
        'fJiYd',
        'YxVEH',
        'AkyfG',
        'slice',
        'log',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4e7f = function () {
        return _0x15986b;
    };
    return a0_0x4e7f();
}
function Main(input) {
    var _0x27bda4 = a0_0x1e90;
    var idata = input[_0x27bda4(0x0)]('');
    var ninzuu = [];
    var nextninzuutemp = [];
    for (let i = 0x0; i < idata[_0x27bda4(0x1)]; i++) {
        ninzuu[_0x27bda4(0x2)](0x1);
        nextninzuutemp[_0x27bda4(0x2)](0x0);
    }
    var nextninzuu = nextninzuutemp['slice']();
    for (let turn = 0x0; turn < ninzuu['length'] + ninzuu[_0x27bda4(0x1)] % 0x2; turn++) {
        if (_0x27bda4(0x3) === _0x27bda4(0x3)) {
            for (let j = 0x0; j < ninzuu[_0x27bda4(0x1)]; j++) {
                if ('IkAPg' === _0x27bda4(0x4)) {
                    if (idata[j] == 'R') {
                        nextninzuu[j + 0x1] += ninzuu[j];
                    } else if (idata[j] == 'L') {
                        nextninzuu[j - 0x1] += ninzuu[j];
                    }
                } else {
                    if (idata[j] == 'R') {
                        if (_0x27bda4(0x5) !== _0x27bda4(0x6)) {
                            nextninzuu[j + 0x1] += ninzuu[j];
                        } else {
                            ninzuu['push'](0x1);
                            nextninzuutemp[_0x27bda4(0x2)](0x0);
                        }
                    } else if (idata[j] == 'L') {
                        if (_0x27bda4(0x7) === _0x27bda4(0x7)) {
                            nextninzuu[j - 0x1] += ninzuu[j];
                        } else {
                            for (let j = 0x0; j < ninzuu[_0x27bda4(0x1)]; j++) {
                                if (idata[j] == 'R') {
                                    nextninzuu[j + 0x1] += ninzuu[j];
                                } else if (idata[j] == 'L') {
                                    nextninzuu[j - 0x1] += ninzuu[j];
                                }
                            }
                            ninzuu = nextninzuu['slice']();
                            nextninzuu = nextninzuutemp[_0x27bda4(0x8)]();
                        }
                    }
                }
            }
            ninzuu = nextninzuu[_0x27bda4(0x8)]();
            nextninzuu = nextninzuutemp[_0x27bda4(0x8)]();
        } else {
            nextninzuu[j + 0x1] += ninzuu[j];
        }
    }
    console[_0x27bda4(0x9)](ninzuu[_0x27bda4(0xa)]('\x20'));
}
Main(require('fs')[a0_0x461f82(0xb)](a0_0x461f82(0xc), a0_0x461f82(0xd)));
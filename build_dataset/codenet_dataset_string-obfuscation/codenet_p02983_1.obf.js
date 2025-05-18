const a0_0xacdf6 = a0_0x2cd9;
(function (stringArrayFunction, comparisonValue) {
    const _0xeed4a1 = a0_0x2cd9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xeed4a1(0x164)) / 0x1 + -parseInt(_0xeed4a1(0x174)) / 0x2 * (parseInt(_0xeed4a1(0x170)) / 0x3) + -parseInt(_0xeed4a1(0x16b)) / 0x4 * (-parseInt(_0xeed4a1(0x168)) / 0x5) + -parseInt(_0xeed4a1(0x166)) / 0x6 * (-parseInt(_0xeed4a1(0x175)) / 0x7) + parseInt(_0xeed4a1(0x16f)) / 0x8 * (parseInt(_0xeed4a1(0x167)) / 0x9) + -parseInt(_0xeed4a1(0x16c)) / 0xa * (-parseInt(_0xeed4a1(0x172)) / 0xb) + -parseInt(_0xeed4a1(0x173)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d2c, 0x5305c));
function a0_0x1d2c() {
    const _0xc75651 = [
        '3284sfYEJD',
        '470oKlpvj',
        'utf8',
        'parseInt',
        '886344MKAuAJ',
        '315843RWncMs',
        'min',
        '9537UitdrR',
        '4738032LBhHYC',
        '4leAXFM',
        '16688igWpJs',
        'log',
        '382536TkCJgb',
        'split',
        '486sobFlT',
        '54vYtzIy',
        '2615GpBgmk',
        '/dev/stdin',
        'readFileSync'
    ];
    a0_0x1d2c = function () {
        return _0xc75651;
    };
    return a0_0x1d2c();
}
function a0_0x2cd9(ICrNJr, key) {
    const stringArray = a0_0x1d2c();
    a0_0x2cd9 = function (index, key) {
        index = index - 0x164;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2cd9(ICrNJr, key);
}
function Main(input) {
    const _0x1b4422 = a0_0x2cd9;
    input = input[_0x1b4422(0x165)]('\x0a');
    inputStr = input[0x0][_0x1b4422(0x165)]('\x20');
    const L = Number[_0x1b4422(0x16e)](inputStr[0x0]);
    const R = Number[_0x1b4422(0x16e)](inputStr[0x1]);
    var min = 0x7e2;
    if (L * R > 0x7e3) {
        if (R - L < 0x7e3) {
            const L2 = L % 0x7e3;
            const R2 = R % 0x7e3;
            for (var i1 = L2; i1 < R2; i1++) {
                for (var i2 = i1 + 0x1; i2 < R2 + 0x1; i2++) {
                    min = Math[_0x1b4422(0x171)](min, i1 * i2 % 0x7e3);
                    if (min === 0x0) {
                        break;
                    }
                }
            }
            console[_0x1b4422(0x176)](min);
        } else {
            console[_0x1b4422(0x176)](0x0);
        }
    } else {
        console[_0x1b4422(0x176)](L * (L + 0x1));
    }
}
Main(require('fs')[a0_0xacdf6(0x16a)](a0_0xacdf6(0x169), a0_0xacdf6(0x16d)));
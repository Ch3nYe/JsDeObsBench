var a0_0x712edc = a0_0xb0e1;
(function (stringArrayFunction, comparisonValue) {
    var _0x1c0796 = a0_0xb0e1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1c0796(0x179)) / 0x1 + parseInt(_0x1c0796(0x17c)) / 0x2 + parseInt(_0x1c0796(0x17b)) / 0x3 + parseInt(_0x1c0796(0x182)) / 0x4 * (-parseInt(_0x1c0796(0x177)) / 0x5) + -parseInt(_0x1c0796(0x176)) / 0x6 + parseInt(_0x1c0796(0x180)) / 0x7 * (parseInt(_0x1c0796(0x186)) / 0x8) + parseInt(_0x1c0796(0x185)) / 0x9 * (-parseInt(_0x1c0796(0x184)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x25c3, 0xdb88e));
function Main(input) {
    var _0x3bc75e = a0_0xb0e1;
    var idata = input[_0x3bc75e(0x178)]('');
    var ninzuu = [];
    var nextninzuutemp = [];
    for (let i = 0x0; i < idata[_0x3bc75e(0x17f)]; i++) {
        ninzuu['push'](0x1);
        nextninzuutemp[_0x3bc75e(0x17e)](0x0);
    }
    var nextninzuu = nextninzuutemp[_0x3bc75e(0x175)]();
    for (let turn = 0x0; turn < ninzuu[_0x3bc75e(0x17f)] + ninzuu[_0x3bc75e(0x17f)] % 0x2; turn++) {
        for (let j = 0x0; j < ninzuu[_0x3bc75e(0x17f)]; j++) {
            if (idata[j] == 'R') {
                nextninzuu[j + 0x1] += ninzuu[j];
            } else if (idata[j] == 'L') {
                nextninzuu[j - 0x1] += ninzuu[j];
            }
        }
        ninzuu = nextninzuu[_0x3bc75e(0x175)]();
        nextninzuu = nextninzuutemp[_0x3bc75e(0x175)]();
    }
    console['log'](ninzuu[_0x3bc75e(0x183)]('\x20'));
}
function a0_0xb0e1(eECjbM, key) {
    var stringArray = a0_0x25c3();
    a0_0xb0e1 = function (index, key) {
        index = index - 0x175;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb0e1(eECjbM, key);
}
Main(require('fs')[a0_0x712edc(0x17a)](a0_0x712edc(0x181), a0_0x712edc(0x17d)));
function a0_0x25c3() {
    var _0xa0621c = [
        'split',
        '1148757BJIgZd',
        'readFileSync',
        '3315762cZUYwh',
        '1347184tfzOgp',
        'utf8',
        'push',
        'length',
        '21FIrWSp',
        '/dev/stdin',
        '963532cDyJFg',
        'join',
        '416450cpCKjX',
        '531stmRLo',
        '3667984IQlVEk',
        'slice',
        '2790372dFRaDf',
        '10OnidgH'
    ];
    a0_0x25c3 = function () {
        return _0xa0621c;
    };
    return a0_0x25c3();
}
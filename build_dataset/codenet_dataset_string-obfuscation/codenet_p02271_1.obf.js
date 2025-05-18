(function (stringArrayFunction, comparisonValue) {
    const _0x2eceb4 = a0_0x479c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2eceb4(0x123)) / 0x1 + -parseInt(_0x2eceb4(0x11e)) / 0x2 * (-parseInt(_0x2eceb4(0x121)) / 0x3) + parseInt(_0x2eceb4(0x119)) / 0x4 * (parseInt(_0x2eceb4(0x118)) / 0x5) + -parseInt(_0x2eceb4(0x126)) / 0x6 + parseInt(_0x2eceb4(0x125)) / 0x7 * (parseInt(_0x2eceb4(0x115)) / 0x8) + parseInt(_0x2eceb4(0x11a)) / 0x9 + parseInt(_0x2eceb4(0x120)) / 0xa * (-parseInt(_0x2eceb4(0x116)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xa650, 0xce400));
function a0_0xa650() {
    const _0x216d8c = [
        'trim',
        '5dClPtx',
        '1480904qCHdth',
        '9703935ZzPUsr',
        'utf8',
        'map',
        'log',
        '170DBSlwN',
        'shift',
        '457570PnpBlx',
        '12315nGkuAk',
        'yes',
        '516200bMsjbb',
        'split',
        '8966944KHLwtd',
        '5636934hMODvE',
        'readFileSync',
        'forEach',
        '8EfwJcR',
        '187mdTxdl'
    ];
    a0_0xa650 = function () {
        return _0x216d8c;
    };
    return a0_0xa650();
}
function a0_0x479c(OwntQE, key) {
    const stringArray = a0_0xa650();
    a0_0x479c = function (index, key) {
        index = index - 0x113;
        let value = stringArray[index];
        return value;
    };
    return a0_0x479c(OwntQE, key);
}
(function main() {
    const _0x297849 = a0_0x479c;
    const lines = require('fs')[_0x297849(0x113)]('/dev/stdin', _0x297849(0x11b))[_0x297849(0x117)]()['split']('\x0a');
    const n1 = Number(lines[_0x297849(0x11f)]());
    const arr1 = lines[_0x297849(0x11f)]()[_0x297849(0x124)]('\x20')[_0x297849(0x11c)](Number);
    const n2 = Number(lines[_0x297849(0x11f)]());
    const arr2 = lines[_0x297849(0x11f)]()[_0x297849(0x124)]('\x20')['map'](Number);
    const solve = (i, m) => {
        if (m == 0x0)
            return !![];
        if (i >= n1)
            return ![];
        return solve(i + 0x1, m) || solve(i + 0x1, m - arr1[i]);
    };
    arr2['map'](m => solve(0x0, m) ? _0x297849(0x122) : 'no')[_0x297849(0x114)](res => console[_0x297849(0x11d)](res));
}());
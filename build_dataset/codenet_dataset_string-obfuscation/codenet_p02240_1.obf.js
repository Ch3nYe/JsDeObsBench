var a0_0x2a33d1 = a0_0x40f6;
(function (stringArrayFunction, comparisonValue) {
    var _0x5efa18 = a0_0x40f6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5efa18(0x185)) / 0x1 * (parseInt(_0x5efa18(0x17d)) / 0x2) + -parseInt(_0x5efa18(0x182)) / 0x3 + -parseInt(_0x5efa18(0x17e)) / 0x4 + parseInt(_0x5efa18(0x178)) / 0x5 + -parseInt(_0x5efa18(0x183)) / 0x6 * (-parseInt(_0x5efa18(0x188)) / 0x7) + -parseInt(_0x5efa18(0x189)) / 0x8 * (parseInt(_0x5efa18(0x17b)) / 0x9) + parseInt(_0x5efa18(0x184)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5f10, 0x29f9c));
function a0_0x5f10() {
    var _0x37c078 = [
        '1048455KVYkBT',
        'sort',
        'split',
        '81xcmxzv',
        'map',
        '35570WKUeTW',
        '528308qAbnmn',
        'newline',
        '/dev/stdin',
        'slice',
        '1005384VMZzLW',
        '42258rYCxZj',
        '3559130ZugKzk',
        '1SITSSk',
        'yes',
        'readFileSync',
        '91tOoWVD',
        '31832lAIPTd',
        'trim',
        'ascii',
        'min'
    ];
    a0_0x5f10 = function () {
        return _0x37c078;
    };
    return a0_0x5f10();
}
config = {
    'input': a0_0x2a33d1(0x180),
    'newline': '\x0a'
};
line = require('fs')[a0_0x2a33d1(0x187)](config['input'], a0_0x2a33d1(0x176))[a0_0x2a33d1(0x18a)]()[a0_0x2a33d1(0x17a)](config[a0_0x2a33d1(0x17f)])[a0_0x2a33d1(0x17c)](function (line) {
    var _0x39c7d9 = a0_0x2a33d1;
    return line['split']('\x20')[_0x39c7d9(0x17c)](Number);
});
n = line[0x0][0x0];
m = line[0x0][0x1];
q = line[m + 0x1][0x0];
function a0_0x40f6(RkVZVm, key) {
    var stringArray = a0_0x5f10();
    a0_0x40f6 = function (index, key) {
        index = index - 0x176;
        var value = stringArray[index];
        return value;
    };
    return a0_0x40f6(RkVZVm, key);
}
adj = new Array(n);
for (i = 0x0; i < n; i++)
    adj[i] = null;
conn = line[a0_0x2a33d1(0x181)](0x1, m + 0x1);
conn[a0_0x2a33d1(0x179)](function (a, b) {
    if (a[0x0] === b[0x0])
        return a[0x1] - b[0x1];
    return a[0x0] - b[0x0];
});
for (i in conn) {
    min0 = id0 = conn[i][0x0];
    min1 = id1 = conn[i][0x1];
    while (adj[min0] !== null)
        min0 = adj[min0];
    while (adj[min1] !== null)
        min1 = adj[min1];
    min = Math[a0_0x2a33d1(0x177)](min0, min1);
    if (id0 !== min)
        adj[id0] = min;
    if (id1 !== min)
        adj[id1] = min;
}
q = line['slice'](m + 0x2, m + 0x2 + q);
for (i in q) {
    min0 = q[i][0x0];
    min1 = q[i][0x1];
    while (adj[min0] !== null)
        min0 = adj[min0];
    while (adj[min1] !== null)
        min1 = adj[min1];
    console['log'](min0 === min1 ? a0_0x2a33d1(0x186) : 'no');
}
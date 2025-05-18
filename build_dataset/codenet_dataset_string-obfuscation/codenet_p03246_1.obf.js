var a0_0x4fdc98 = a0_0x5253;
function a0_0x1154() {
    var _0x80db9b = [
        '1347252DTVjHT',
        'readFileSync',
        'push',
        '534504dBqkfB',
        '13739724AQXcDl',
        '25847220vEdLjj',
        '/dev/stdin',
        '8QZVJPT',
        'log',
        '11866596HZLDhI',
        '5NTpjsc',
        '826768SUCfKw',
        '1119005GCMdyY',
        '16enJIPG',
        'sort'
    ];
    a0_0x1154 = function () {
        return _0x80db9b;
    };
    return a0_0x1154();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4251a9 = a0_0x5253;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4251a9(0x15a)) / 0x1 + parseInt(_0x4251a9(0x15b)) / 0x2 * (parseInt(_0x4251a9(0x160)) / 0x3) + -parseInt(_0x4251a9(0x159)) / 0x4 * (-parseInt(_0x4251a9(0x158)) / 0x5) + -parseInt(_0x4251a9(0x15d)) / 0x6 + parseInt(_0x4251a9(0x157)) / 0x7 + -parseInt(_0x4251a9(0x164)) / 0x8 * (-parseInt(_0x4251a9(0x161)) / 0x9) + -parseInt(_0x4251a9(0x162)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1154, 0xe1fbf));
line = require('fs')[a0_0x4fdc98(0x15e)](a0_0x4fdc98(0x163), 'utf8')['split']('\x0a');
n = parseInt(line[0x0]);
v = line[0x1]['split']('\x20');
function a0_0x5253(pBANzs, key) {
    var stringArray = a0_0x1154();
    a0_0x5253 = function (index, key) {
        index = index - 0x156;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5253(pBANzs, key);
}
var odds = {};
var even = {};
for (var i = 0x0; i < v['length']; i++) {
    di = i & 0x1 ? even : odds;
    di[v[i]] = !di[v[i]] ? 0x1 : di[v[i]] + 0x1;
}
var a = [];
var b = [];
for (var k in odds)
    a[a0_0x4fdc98(0x15f)]({
        'v': k,
        'n': odds[k]
    });
for (var k in even)
    b[a0_0x4fdc98(0x15f)]({
        'v': k,
        'n': even[k]
    });
a['sort']((x, y) => y['n'] - x['n']);
b[a0_0x4fdc98(0x15c)]((x, y) => y['n'] - x['n']);
va = a[0x0];
vb = b[0x0];
if (va['v'] === vb['v']) {
    if (va['n'] > vb['n'])
        vb = !b[0x1] ? { 'n': 0x0 } : b[0x1];
    else
        va = !a[0x1] ? { 'n': 0x0 } : a[0x1];
}
log = console[a0_0x4fdc98(0x156)];
log(n / 0x2 - va['n'] + n / 0x2 - vb['n']);
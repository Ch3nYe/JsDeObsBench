var a0_0x3d8903 = a0_0x581d;
(function (stringArrayFunction, comparisonValue) {
    var _0x44409c = a0_0x581d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x44409c(0x1da)) / 0x1 * (-parseInt(_0x44409c(0x1e8)) / 0x2) + -parseInt(_0x44409c(0x1e1)) / 0x3 * (parseInt(_0x44409c(0x1ea)) / 0x4) + -parseInt(_0x44409c(0x1db)) / 0x5 + -parseInt(_0x44409c(0x1e9)) / 0x6 + -parseInt(_0x44409c(0x1dd)) / 0x7 + parseInt(_0x44409c(0x1d8)) / 0x8 + parseInt(_0x44409c(0x1eb)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2014, 0x44fe2));
var input = require('fs')[a0_0x3d8903(0x1de)](a0_0x3d8903(0x1e0), a0_0x3d8903(0x1e5));
var arr = input['trim']()[a0_0x3d8903(0x1df)]('\x0a');
function a0_0x2014() {
    var _0x485622 = [
        'readFileSync',
        'split',
        '/dev/stdin',
        '197865oNkpSa',
        'slice',
        'log',
        'filter',
        'utf8',
        'length',
        'indexOf',
        '2uSbFfd',
        '1351170VwqhjF',
        '28rGmcAM',
        '3353247XZqvYp',
        'map',
        'forEach',
        'shift',
        '2519480pEuBlk',
        'includes',
        '390928KMqexd',
        '152160ouWElk',
        'push',
        '549780qnEddo'
    ];
    a0_0x2014 = function () {
        return _0x485622;
    };
    return a0_0x2014();
}
function a0_0x581d(kTHuuS, key) {
    var stringArray = a0_0x2014();
    a0_0x581d = function (index, key) {
        index = index - 0x1d6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x581d(kTHuuS, key);
}
while (!![]) {
    var n = arr[a0_0x3d8903(0x1d7)]() - 0x0;
    if (n == 0x0)
        break;
    var ary = arr[a0_0x3d8903(0x1e2)](0x0, n);
    ary = ary[a0_0x3d8903(0x1ec)](v => v[a0_0x3d8903(0x1df)]('\x20')[a0_0x3d8903(0x1ec)](Number)[a0_0x3d8903(0x1e2)](0x1));
    var flag = !![];
    var h = [];
    for (var i = 0x0; i < n; i++)
        h[a0_0x3d8903(0x1dc)]([i]);
    for (var i = 0x1; i <= 0x1e; i++) {
        var a = [];
        ary[a0_0x3d8903(0x1d6)]((v, j) => {
            var _0x1de6ed = a0_0x3d8903;
            if (v[_0x1de6ed(0x1d9)](i))
                a['push'](j);
        });
        var b = [];
        a['forEach'](v => b[a0_0x3d8903(0x1dc)](...h[v]));
        b = b[a0_0x3d8903(0x1e4)]((x, i, self) => self[a0_0x3d8903(0x1e7)](x) == i);
        if (b[a0_0x3d8903(0x1e6)] == n) {
            flag = ![];
            console[a0_0x3d8903(0x1e3)](i);
            break;
        }
        a[a0_0x3d8903(0x1d6)](v => h[v] = b);
    }
    if (flag)
        console[a0_0x3d8903(0x1e3)](-0x1);
    arr = arr[a0_0x3d8903(0x1e2)](n);
}
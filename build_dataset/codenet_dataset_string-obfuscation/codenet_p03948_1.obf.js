function a0_0x5c78(OhBeEL, key) {
    var stringArray = a0_0x5f30();
    a0_0x5c78 = function (index, key) {
        index = index - 0x1e9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c78(OhBeEL, key);
}
var a0_0x13c536 = a0_0x5c78;
(function (stringArrayFunction, comparisonValue) {
    var _0x2b56ed = a0_0x5c78;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2b56ed(0x1f8)) / 0x1 * (-parseInt(_0x2b56ed(0x1e9)) / 0x2) + parseInt(_0x2b56ed(0x1f3)) / 0x3 * (-parseInt(_0x2b56ed(0x1fa)) / 0x4) + parseInt(_0x2b56ed(0x1ed)) / 0x5 + -parseInt(_0x2b56ed(0x1f2)) / 0x6 + parseInt(_0x2b56ed(0x1f9)) / 0x7 * (-parseInt(_0x2b56ed(0x1fb)) / 0x8) + -parseInt(_0x2b56ed(0x1f1)) / 0x9 + -parseInt(_0x2b56ed(0x1ec)) / 0xa * (-parseInt(_0x2b56ed(0x1ee)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5f30, 0xe7749));
function Main(input) {
    var _0x3b3216 = a0_0x5c78;
    var space_strinput = function (line) {
        var _0x4ff86a = a0_0x5c78;
        var arr = line[_0x4ff86a(0x1ea)](/(^\s+)|(\s+$)/g, '')[_0x4ff86a(0x1f7)]('\x20');
        for (var i = 0x0; i < arr[_0x4ff86a(0x1eb)]; ++i) {
            arr[i] = arr[i];
        }
        return arr;
    };
    var space_numinput = function (line) {
        var _0x1bbd39 = a0_0x5c78;
        var arr = line[_0x1bbd39(0x1ea)](/(^\s+)|(\s+$)/g, '')[_0x1bbd39(0x1f7)]('\x20');
        for (var i = 0x0; i < arr[_0x1bbd39(0x1eb)]; ++i) {
            arr[i] = +arr[i];
        }
        return arr;
    };
    var getmin = function (a, b) {
        return a > b ? b : a;
    };
    lines = input[_0x3b3216(0x1f7)]('\x0a');
    var l0 = space_numinput(lines[0x0]);
    var n = l0[0x0];
    var t = l0[0x1];
    var a = space_numinput(lines[0x1]);
    var rieki = 0x0;
    var rieki_place_count = 0x0;
    var min = a[0x0];
    var max = a[0x0];
    for (var i = 0x0; i < n; ++i) {
        var val = a[i];
        if (val - min > rieki) {
            rieki = val - min;
            rieki_place_count = 0x1;
        } else if (val - min == rieki) {
            rieki_place_count++;
        }
        min = val < min ? val : min;
    }
    console[_0x3b3216(0x1ef)](getmin(rieki_place_count, Math[_0x3b3216(0x1f4)](t / 0x2)));
}
function a0_0x5f30() {
    var _0x48f498 = [
        '6464SpMDaG',
        '6skgkRX',
        'replace',
        'length',
        '431710OGouYV',
        '1388215QIKTnX',
        '1133zzfpur',
        'log',
        'utf8',
        '16145271OGDRWy',
        '8676564VUIRld',
        '657iJODoi',
        'floor',
        'readFileSync',
        '/dev/stdin',
        'split',
        '568970OaRqxf',
        '5985PhcSSh',
        '28352lFwQEF'
    ];
    a0_0x5f30 = function () {
        return _0x48f498;
    };
    return a0_0x5f30();
}
Main(require('fs')[a0_0x13c536(0x1f5)](a0_0x13c536(0x1f6), a0_0x13c536(0x1f0)));
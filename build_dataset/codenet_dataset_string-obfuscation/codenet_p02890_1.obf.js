function a0_0x291e() {
    var _0x2e5a31 = [
        'size',
        '1242812CYUEvA',
        'push',
        'utf8',
        '4866864TPfcBa',
        'map',
        '292073QuAhiE',
        '4brYAtM',
        'join',
        'floor',
        '695296ZwBDoa',
        '/dev/stdin',
        'log',
        '866600ndgGov',
        '1666767GnsIpd',
        '3716640vXiQKs',
        'toString',
        'split'
    ];
    a0_0x291e = function () {
        return _0x2e5a31;
    };
    return a0_0x291e();
}
var a0_0x5c3b11 = a0_0x11ab;
function a0_0x11ab(xImKfs, key) {
    var stringArray = a0_0x291e();
    a0_0x11ab = function (index, key) {
        index = index - 0x194;
        var value = stringArray[index];
        return value;
    };
    return a0_0x11ab(xImKfs, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1b44db = a0_0x11ab;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1b44db(0x1a0)) / 0x1 + parseInt(_0x1b44db(0x19b)) / 0x2 + -parseInt(_0x1b44db(0x196)) / 0x3 * (parseInt(_0x1b44db(0x1a1)) / 0x4) + -parseInt(_0x1b44db(0x197)) / 0x5 + parseInt(_0x1b44db(0x19e)) / 0x6 + parseInt(_0x1b44db(0x1a4)) / 0x7 + -parseInt(_0x1b44db(0x195)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x291e, 0x65bc5));
function Main(arg) {
    var _0xc3c5a = a0_0x11ab;
    var N = arg[_0xc3c5a(0x199)]('\x0a')[0x0] - 0x0;
    var A = arg['split']('\x0a')[0x1][_0xc3c5a(0x199)]('\x20')[_0xc3c5a(0x19f)](v => v - 0x0);
    var tmp = new Set(A);
    var ans = [];
    ans['push'](N);
    for (var K = 0x2; K <= N; K++) {
        if (tmp['size'] < K) {
            ans['push'](0x0);
        } else {
            ans[_0xc3c5a(0x19c)](Math[_0xc3c5a(0x1a3)](tmp[_0xc3c5a(0x19a)] / K));
        }
    }
    console[_0xc3c5a(0x194)](ans[_0xc3c5a(0x1a2)]('\x0a')[_0xc3c5a(0x198)]());
    return;
}
Main(require('fs')['readFileSync'](a0_0x5c3b11(0x1a5), a0_0x5c3b11(0x19d)));
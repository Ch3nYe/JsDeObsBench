function a0_0x543d() {
    var _0x510d6a = [
        'utf8',
        '16OBvhKO',
        '/dev/stdin',
        '2135722xrjvRV',
        '826587NETTIx',
        '5262erGSQO',
        '20tQqTtX',
        '1515770UawcYF',
        'readFileSync',
        '1300GAWllz',
        '6409417FCtpJV',
        '12EiZbxp',
        'split',
        '3RnOAVn',
        '81710431YqwgNK',
        '6440008jIvvVf'
    ];
    a0_0x543d = function () {
        return _0x510d6a;
    };
    return a0_0x543d();
}
function a0_0x56f8(kBIXFA, key) {
    var stringArray = a0_0x543d();
    a0_0x56f8 = function (index, key) {
        index = index - 0x19a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x56f8(kBIXFA, key);
}
var a0_0x2a2448 = a0_0x56f8;
(function (stringArrayFunction, comparisonValue) {
    var _0x37dc66 = a0_0x56f8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x37dc66(0x19b)) / 0x1 + parseInt(_0x37dc66(0x1a7)) / 0x2 * (-parseInt(_0x37dc66(0x1a1)) / 0x3) + -parseInt(_0x37dc66(0x1a3)) / 0x4 + -parseInt(_0x37dc66(0x19d)) / 0x5 * (parseInt(_0x37dc66(0x1a9)) / 0x6) + -parseInt(_0x37dc66(0x19e)) / 0x7 * (parseInt(_0x37dc66(0x1a5)) / 0x8) + parseInt(_0x37dc66(0x1a8)) / 0x9 * (-parseInt(_0x37dc66(0x19a)) / 0xa) + -parseInt(_0x37dc66(0x1a2)) / 0xb * (-parseInt(_0x37dc66(0x19f)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x543d, 0xf2184));
function Main(input) {
    var _0x2c2524 = a0_0x56f8;
    var str = input;
    const n = str['split']('\x0a');
    var k = Number(n[0x0]);
    var p = n[0x1][_0x2c2524(0x1a0)]('\x20');
    var a = Number(p[0x0]);
    var b = Number(p[0x1]);
    var ans = '';
    for (var i = a; i <= b; i++) {
        if (i % k === 0x0) {
            ans = 'OK';
        }
    }
    if (ans !== 'OK') {
        ans = 'NG';
    }
    console['log'](ans);
}
Main(require('fs')[a0_0x2a2448(0x19c)](a0_0x2a2448(0x1a6), a0_0x2a2448(0x1a4)));
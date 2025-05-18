function a0_0x3cb9(oyIRcu, key) {
    var stringArray = a0_0x246c();
    a0_0x3cb9 = function (index, key) {
        index = index - 0x1c4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3cb9(oyIRcu, key);
}
var a0_0x568e0b = a0_0x3cb9;
function a0_0x246c() {
    var _0x5f1843 = [
        'log',
        '0123456789AabcdefghijklmnopqrstuvwxyzA',
        '8wXCvfV',
        'test',
        '10230633HyfEsJ',
        '115xguShv',
        '7705033ckiMyV',
        'split',
        'utf8',
        'replace',
        '/dev/stdin',
        '808447EdeZnv',
        '20galKyq',
        '674460RBkwlO',
        '11EGjYyf',
        '2IxNzhS',
        'trim',
        'readFileSync',
        '21698700MbfroZ',
        '933020rpGbsH',
        '241158pNqmXy'
    ];
    a0_0x246c = function () {
        return _0x5f1843;
    };
    return a0_0x246c();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x14f256 = a0_0x3cb9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x14f256(0x1d7)) / 0x1 * (-parseInt(_0x14f256(0x1c6)) / 0x2) + parseInt(_0x14f256(0x1c4)) / 0x3 * (-parseInt(_0x14f256(0x1d8)) / 0x4) + -parseInt(_0x14f256(0x1d1)) / 0x5 * (-parseInt(_0x14f256(0x1cb)) / 0x6) + -parseInt(_0x14f256(0x1d2)) / 0x7 * (parseInt(_0x14f256(0x1ce)) / 0x8) + parseInt(_0x14f256(0x1d0)) / 0x9 + parseInt(_0x14f256(0x1ca)) / 0xa * (-parseInt(_0x14f256(0x1c5)) / 0xb) + parseInt(_0x14f256(0x1c9)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x246c, 0xb55b1));
var input = require('fs')[a0_0x568e0b(0x1c8)](a0_0x568e0b(0x1d6), a0_0x568e0b(0x1d4));
var s = input[a0_0x568e0b(0x1c7)]();
var len = s['length'];
var abc = a0_0x568e0b(0x1cd)[a0_0x568e0b(0x1d3)]('');
var sum = 0x0;
while (!![]) {
    if (s == '')
        break;
    var cnt = 0x0;
    var flag = ![];
    abc['forEach'](v => {
        var _0x3455df = a0_0x568e0b;
        var re = new RegExp(v);
        if (re[_0x3455df(0x1cf)](s)) {
            if (flag)
                cnt++;
            flag = !![];
            s = s[_0x3455df(0x1d5)](re, '');
        } else {
            if (cnt >= 0x3)
                sum += cnt - 0x2;
            cnt = 0x0;
            flag = ![];
        }
    });
}
console[a0_0x568e0b(0x1cc)](len - sum);
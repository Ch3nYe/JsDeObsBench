var a0_0x154098 = a0_0x28a5;
(function (stringArrayFunction, comparisonValue) {
    var _0x33c043 = a0_0x28a5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x33c043(0x179)) / 0x1 * (parseInt(_0x33c043(0x17e)) / 0x2) + parseInt(_0x33c043(0x175)) / 0x3 * (-parseInt(_0x33c043(0x187)) / 0x4) + -parseInt(_0x33c043(0x17b)) / 0x5 * (parseInt(_0x33c043(0x176)) / 0x6) + parseInt(_0x33c043(0x181)) / 0x7 + -parseInt(_0x33c043(0x177)) / 0x8 + -parseInt(_0x33c043(0x17f)) / 0x9 * (parseInt(_0x33c043(0x18a)) / 0xa) + parseInt(_0x33c043(0x178)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4f0a, 0x683cf));
var input = require('fs')[a0_0x154098(0x188)](a0_0x154098(0x184), a0_0x154098(0x189));
var arr = input['trim']()[a0_0x154098(0x183)]('\x0a');
function a0_0x28a5(vdDHiL, key) {
    var stringArray = a0_0x4f0a();
    a0_0x28a5 = function (index, key) {
        index = index - 0x175;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28a5(vdDHiL, key);
}
var q = arr[a0_0x154098(0x17c)]() - 0x0;
var str = '';
function a0_0x4f0a() {
    var _0x3cb9be = [
        'get',
        '1432684yMwxzG',
        '1251nCJZEd',
        'delete',
        '104650wXmYmR',
        'trim',
        'split',
        '/dev/stdin',
        'has',
        'set',
        '924676kbwxaX',
        'readFileSync',
        'utf8',
        '54830oUzHau',
        '3zLsaBh',
        '42LdTchf',
        '5615336gZEFHk',
        '18105131SOoLOb',
        '1fwJkPX',
        'log',
        '182165hCOKlt',
        'shift'
    ];
    a0_0x4f0a = function () {
        return _0x3cb9be;
    };
    return a0_0x4f0a();
}
var map = new Map();
for (var i = 0x0; i < q; i++) {
    var [a, b, c] = arr[i]['split']('\x20');
    if (a == '0')
        map[a0_0x154098(0x186)](b, c);
    else if (a == '1')
        str += (map[a0_0x154098(0x185)](b) ? map[a0_0x154098(0x17d)](b) : '0') + '\x0a';
    else
        map[a0_0x154098(0x180)](b);
}
console[a0_0x154098(0x17a)](str[a0_0x154098(0x182)]());
var a0_0x1d5530 = a0_0x37c6;
(function (stringArrayFunction, comparisonValue) {
    var _0x109b2b = a0_0x37c6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x109b2b(0x9e)) / 0x1 * (-parseInt(_0x109b2b(0xa0)) / 0x2) + -parseInt(_0x109b2b(0x99)) / 0x3 + -parseInt(_0x109b2b(0x9b)) / 0x4 * (-parseInt(_0x109b2b(0xa1)) / 0x5) + parseInt(_0x109b2b(0x9d)) / 0x6 * (parseInt(_0x109b2b(0x96)) / 0x7) + parseInt(_0x109b2b(0xa6)) / 0x8 + -parseInt(_0x109b2b(0xa3)) / 0x9 * (parseInt(_0x109b2b(0x9f)) / 0xa) + -parseInt(_0x109b2b(0xa2)) / 0xb * (parseInt(_0x109b2b(0x9c)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42dd, 0xe45d9));
var input = require('fs')['readFileSync'](a0_0x1d5530(0xa5), 'utf8');
function a0_0x42dd() {
    var _0x12ba15 = [
        'map',
        '0\x200',
        '3052PJmcLX',
        'split',
        'sqrt',
        '5576280YplNZi',
        'shift',
        '8QepSUw',
        '544596msqVDi',
        '11874szYTWp',
        '129QZjVef',
        '2833080QAiKfA',
        '16662SgVbNg',
        '1743145xcfdxC',
        '22OsiefO',
        '45JOUbfE',
        'join',
        '/dev/stdin',
        '13333200OWUWPQ'
    ];
    a0_0x42dd = function () {
        return _0x12ba15;
    };
    return a0_0x42dd();
}
function a0_0x37c6(eIfjeO, key) {
    var stringArray = a0_0x42dd();
    a0_0x37c6 = function (index, key) {
        index = index - 0x94;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37c6(eIfjeO, key);
}
var arr = input['trim']()[a0_0x1d5530(0x97)]('\x0a');
while (!![]) {
    var pn = arr[a0_0x1d5530(0x9a)]()['split']('\x20')[a0_0x1d5530(0x94)](Number);
    if (pn[a0_0x1d5530(0xa4)]('\x20') == a0_0x1d5530(0x95))
        break;
    var p = Math[a0_0x1d5530(0x98)](pn[0x0]);
    var n = pn[0x1];
    var max = 0x0;
    var min = Infinity;
    var ans = [];
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x1; j <= n; j++) {
            var v = i / j;
            if (p > v && max < v) {
                max = v;
                ans[0x1] = i + '/' + j;
            } else if (p < v && min > v) {
                min = v;
                ans[0x0] = i + '/' + j;
            }
        }
    }
    console['log'](ans[a0_0x1d5530(0xa4)]('\x20'));
}
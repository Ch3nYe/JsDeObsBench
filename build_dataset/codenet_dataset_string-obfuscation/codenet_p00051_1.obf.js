function a0_0x5587(dPgMIx, key) {
    var stringArray = a0_0x2f57();
    a0_0x5587 = function (index, key) {
        index = index - 0x167;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5587(dPgMIx, key);
}
var a0_0x14ba10 = a0_0x5587;
function a0_0x2f57() {
    var _0x4d3295 = [
        '110BDvalK',
        '65952yWeOKG',
        '153616TMQWjE',
        '1GzJfJJ',
        '42cuCjyV',
        '90JwseRu',
        'readFileSync',
        'trim',
        'utf8',
        'join',
        'map',
        'split',
        '61494aWIuRh',
        '70eNpYdw',
        'shift',
        '4121623gPYUdi',
        'sort',
        '37070pgljDE',
        '34968RmOoCX',
        '13nMFiWr',
        '7944564ayGQkq'
    ];
    a0_0x2f57 = function () {
        return _0x4d3295;
    };
    return a0_0x2f57();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x13636b = a0_0x5587;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x13636b(0x16d)) / 0x1 * (parseInt(_0x13636b(0x176)) / 0x2) + parseInt(_0x13636b(0x16e)) / 0x3 * (parseInt(_0x13636b(0x167)) / 0x4) + parseInt(_0x13636b(0x17b)) / 0x5 * (parseInt(_0x13636b(0x16f)) / 0x6) + -parseInt(_0x13636b(0x177)) / 0x7 * (-parseInt(_0x13636b(0x16c)) / 0x8) + parseInt(_0x13636b(0x16b)) / 0x9 * (parseInt(_0x13636b(0x16a)) / 0xa) + parseInt(_0x13636b(0x179)) / 0xb + parseInt(_0x13636b(0x169)) / 0xc * (-parseInt(_0x13636b(0x168)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f57, 0x2dedd));
var input = require('fs')[a0_0x14ba10(0x170)]('/dev/stdin', a0_0x14ba10(0x172));
var Arr = input[a0_0x14ba10(0x171)]()[a0_0x14ba10(0x175)]('\x0a');
var AL = Arr[a0_0x14ba10(0x178)]();
for (var i = 0x0; i < AL; i++) {
    var arr = Arr[i]['split']('')[a0_0x14ba10(0x174)](Number);
    arr['sort'](function (a, b) {
        return b - a;
    });
    var a = arr[a0_0x14ba10(0x173)]('');
    arr[a0_0x14ba10(0x17a)](function (a, b) {
        return a - b;
    });
    var b = arr['join']('');
    console['log'](parseInt(a) - parseInt(b));
}
function a0_0x8e8d() {
    var _0x13821b = [
        '30149406QjDzAf',
        'trim',
        'utf8',
        'split',
        '/dev/stdin',
        '5537337NhkVpG',
        '6oQTMhg',
        '4546dOcuKM',
        'shift',
        '6136490EBjvQS',
        '820MZwPkA',
        '902951qFwJDD',
        'log',
        '10310200ZVEIjQ',
        'readFileSync',
        '22752rQseDQ'
    ];
    a0_0x8e8d = function () {
        return _0x13821b;
    };
    return a0_0x8e8d();
}
var a0_0x523ceb = a0_0x1265;
function a0_0x1265(rMBCsz, key) {
    var stringArray = a0_0x8e8d();
    a0_0x1265 = function (index, key) {
        index = index - 0x81;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1265(rMBCsz, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x24d440 = a0_0x1265;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x24d440(0x87)) / 0x1 * (parseInt(_0x24d440(0x8a)) / 0x2) + -parseInt(_0x24d440(0x85)) / 0x3 + -parseInt(_0x24d440(0x8f)) / 0x4 + -parseInt(_0x24d440(0x89)) / 0x5 + parseInt(_0x24d440(0x86)) / 0x6 * (parseInt(_0x24d440(0x8b)) / 0x7) + -parseInt(_0x24d440(0x8d)) / 0x8 + parseInt(_0x24d440(0x90)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8e8d, 0xee18f));
var input = require('fs')[a0_0x523ceb(0x8e)](a0_0x523ceb(0x84), a0_0x523ceb(0x82));
var Arr = input[a0_0x523ceb(0x81)]()[a0_0x523ceb(0x83)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x523ceb(0x88)]() - 0x0;
    if (n == 0x0)
        break;
    var cnt = 0x0;
    while (n != 0x1) {
        cnt++;
        if (n % 0x2 == 0x0)
            n = n / 0x2;
        else
            n = 0x3 * n + 0x1;
    }
    console[a0_0x523ceb(0x8c)](cnt);
}
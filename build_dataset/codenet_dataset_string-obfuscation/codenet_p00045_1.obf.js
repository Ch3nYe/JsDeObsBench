var a0_0x1994ba = a0_0x362a;
(function (stringArrayFunction, comparisonValue) {
    var _0x1a2891 = a0_0x362a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1a2891(0x16c)) / 0x1 + parseInt(_0x1a2891(0x16b)) / 0x2 + parseInt(_0x1a2891(0x15b)) / 0x3 * (parseInt(_0x1a2891(0x15f)) / 0x4) + -parseInt(_0x1a2891(0x15e)) / 0x5 * (-parseInt(_0x1a2891(0x168)) / 0x6) + parseInt(_0x1a2891(0x165)) / 0x7 * (parseInt(_0x1a2891(0x15a)) / 0x8) + -parseInt(_0x1a2891(0x161)) / 0x9 * (-parseInt(_0x1a2891(0x164)) / 0xa) + -parseInt(_0x1a2891(0x15d)) / 0xb * (parseInt(_0x1a2891(0x163)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4990, 0xca49d));
var input = require('fs')[a0_0x1994ba(0x166)](a0_0x1994ba(0x160), a0_0x1994ba(0x159));
function a0_0x362a(bjcVIj, key) {
    var stringArray = a0_0x4990();
    a0_0x362a = function (index, key) {
        index = index - 0x158;
        var value = stringArray[index];
        return value;
    };
    return a0_0x362a(bjcVIj, key);
}
var Arr = input[a0_0x1994ba(0x167)]()[a0_0x1994ba(0x15c)]('\x0a');
function a0_0x4990() {
    var _0x1e5d4d = [
        '8469vCLQXX',
        'forEach',
        '72iawHgS',
        '5150lNifnZ',
        '2699690CfFCFH',
        'readFileSync',
        'trim',
        '4487070OCzUHb',
        'round',
        'length',
        '2230174DjeFoj',
        '763904jVFdkU',
        'log',
        'map',
        'utf8',
        '32ZHatOf',
        '143103fxSRlv',
        'split',
        '7538234XiMKiz',
        '5tQXlUM',
        '24pEbvJf',
        '/dev/stdin'
    ];
    a0_0x4990 = function () {
        return _0x1e5d4d;
    };
    return a0_0x4990();
}
var sum = 0x0;
var cnt = 0x0;
Arr[a0_0x1994ba(0x162)](function (v) {
    var _0x38be7b = a0_0x1994ba;
    var arr = v['split'](',')[_0x38be7b(0x158)](Number);
    sum += arr[0x0] * arr[0x1];
    cnt += arr[0x1];
});
console[a0_0x1994ba(0x16d)](sum);
console['log'](Math[a0_0x1994ba(0x169)](cnt / Arr[a0_0x1994ba(0x16a)]));
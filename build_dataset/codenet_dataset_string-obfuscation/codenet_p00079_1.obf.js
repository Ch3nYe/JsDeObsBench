var a0_0x43b05e = a0_0x19d7;
(function (stringArrayFunction, comparisonValue) {
    var _0x4e8d99 = a0_0x19d7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4e8d99(0x194)) / 0x1 + -parseInt(_0x4e8d99(0x18b)) / 0x2 * (parseInt(_0x4e8d99(0x188)) / 0x3) + parseInt(_0x4e8d99(0x18e)) / 0x4 * (-parseInt(_0x4e8d99(0x18a)) / 0x5) + parseInt(_0x4e8d99(0x19a)) / 0x6 * (parseInt(_0x4e8d99(0x192)) / 0x7) + -parseInt(_0x4e8d99(0x18d)) / 0x8 * (-parseInt(_0x4e8d99(0x195)) / 0x9) + -parseInt(_0x4e8d99(0x19b)) / 0xa * (parseInt(_0x4e8d99(0x193)) / 0xb) + parseInt(_0x4e8d99(0x18c)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x598e, 0x456fe));
function a0_0x598e() {
    var _0x33eb56 = [
        'pow',
        '262326ihAHIS',
        '10OtBpgw',
        'toFixed',
        'map',
        '6uFCBWU',
        'split',
        '255tJcptV',
        '343294vEIhOJ',
        '14599308HchYFG',
        '173064ZQYEJX',
        '23884tyTIWN',
        '/dev/stdin',
        'sqrt',
        'length',
        '7tbkHQY',
        '2407559ITigYp',
        '260663aonjHp',
        '63aBcVlQ',
        'utf8',
        'shift',
        'log'
    ];
    a0_0x598e = function () {
        return _0x33eb56;
    };
    return a0_0x598e();
}
function heron(a, b, c) {
    var _0xcf5b8c = a0_0x19d7;
    var s = (a + b + c) / 0x2;
    var S = Math[_0xcf5b8c(0x190)](s * (s - a) * (s - b) * (s - c));
    return S;
}
var input = require('fs')['readFileSync'](a0_0x43b05e(0x18f), a0_0x43b05e(0x196));
var Arr = input['trim']()[a0_0x43b05e(0x189)]('\x0a');
var xy1 = Arr[a0_0x43b05e(0x197)]()[a0_0x43b05e(0x189)](',')[a0_0x43b05e(0x19d)](Number);
var xy2 = Arr['shift']()[a0_0x43b05e(0x189)](',')['map'](Number);
var x1 = xy1[0x0];
function a0_0x19d7(yMGwVy, key) {
    var stringArray = a0_0x598e();
    a0_0x19d7 = function (index, key) {
        index = index - 0x188;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19d7(yMGwVy, key);
}
var y1 = xy1[0x1];
var x2 = xy2[0x0];
var y2 = xy2[0x1];
var sum = 0x0;
for (var I = 0x0; I < Arr[a0_0x43b05e(0x191)]; I++) {
    var xy3 = Arr[I][a0_0x43b05e(0x189)](',')[a0_0x43b05e(0x19d)](Number);
    var x3 = xy3[0x0];
    var y3 = xy3[0x1];
    var d12 = Math[a0_0x43b05e(0x190)](Math[a0_0x43b05e(0x199)](x1 - x2, 0x2) + Math[a0_0x43b05e(0x199)](y1 - y2, 0x2));
    var d13 = Math[a0_0x43b05e(0x190)](Math[a0_0x43b05e(0x199)](x1 - x3, 0x2) + Math[a0_0x43b05e(0x199)](y1 - y3, 0x2));
    var d23 = Math[a0_0x43b05e(0x190)](Math[a0_0x43b05e(0x199)](x2 - x3, 0x2) + Math[a0_0x43b05e(0x199)](y2 - y3, 0x2));
    sum += heron(d12, d13, d23);
    x2 = xy3[0x0];
    y2 = xy3[0x1];
}
console[a0_0x43b05e(0x198)](sum[a0_0x43b05e(0x19c)](0x6));
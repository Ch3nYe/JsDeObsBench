function a0_0x4d2f(dRIXKI, key) {
    var stringArray = a0_0x13bb();
    a0_0x4d2f = function (index, key) {
        index = index - 0x191;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4d2f(dRIXKI, key);
}
var a0_0x181118 = a0_0x4d2f;
function a0_0x13bb() {
    var _0x253bf8 = [
        'log',
        '487408uEodUv',
        '6SFyezU',
        'utf8',
        '738896elGxmb',
        '10yjkLwk',
        'readFileSync',
        '/dev/stdin',
        '3980943lLQaeo',
        '2630136rPYUMl',
        'every',
        'forEach',
        '0\x200',
        '3PxrJsY',
        'map',
        '3635995uqcMVd',
        '167748UiSwPD',
        'split',
        'Yes',
        '1948552hkiwEa',
        'shift'
    ];
    a0_0x13bb = function () {
        return _0x253bf8;
    };
    return a0_0x13bb();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x7f8a24 = a0_0x4d2f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x7f8a24(0x191)) / 0x1 * (parseInt(_0x7f8a24(0x19a)) / 0x2) + parseInt(_0x7f8a24(0x1a2)) / 0x3 + -parseInt(_0x7f8a24(0x19d)) / 0x4 + -parseInt(_0x7f8a24(0x193)) / 0x5 * (-parseInt(_0x7f8a24(0x19b)) / 0x6) + -parseInt(_0x7f8a24(0x194)) / 0x7 + parseInt(_0x7f8a24(0x197)) / 0x8 + parseInt(_0x7f8a24(0x1a1)) / 0x9 * (-parseInt(_0x7f8a24(0x19e)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x13bb, 0x719c9));
var input = require('fs')[a0_0x181118(0x19f)](a0_0x181118(0x1a0), a0_0x181118(0x19c));
var Arr = input['replace'](/\n$/, '')[a0_0x181118(0x195)]('\x0a');
while (!![]) {
    var NK = Arr[a0_0x181118(0x198)]();
    if (NK == a0_0x181118(0x1a5))
        break;
    var nk = NK['split']('\x20')[a0_0x181118(0x192)](Number);
    var S = Arr[a0_0x181118(0x198)]()[a0_0x181118(0x195)]('\x20')['map'](Number);
    for (var i = 0x0; i < nk[0x0]; i++) {
        var B = Arr['shift']()[a0_0x181118(0x195)]('\x20')[a0_0x181118(0x192)](Number);
        B[a0_0x181118(0x1a4)](function (v, index) {
            S[index] -= v;
        });
    }
    var flag = S[a0_0x181118(0x1a3)](function (v) {
        return v >= 0x0;
    });
    console[a0_0x181118(0x199)](flag ? a0_0x181118(0x196) : 'No');
}
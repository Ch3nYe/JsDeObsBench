var a0_0x15b75f = a0_0x3129;
function a0_0xbe09() {
    var _0xe092c6 = [
        '2IGpwBs',
        '/dev/stdin',
        '2373909wSDGhS',
        '93359HQEicD',
        'forEach',
        '9pTxgRs',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '3283844cLdClc',
        'log',
        'readFileSync',
        'split',
        '14738170mFacIp',
        'indexOf',
        '249459XaxOzf',
        '1285765UWLZGT',
        '138zIBElw',
        '3082904WLynqB',
        'map'
    ];
    a0_0xbe09 = function () {
        return _0xe092c6;
    };
    return a0_0xbe09();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x36b929 = a0_0x3129;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x36b929(0x9d)) / 0x1 + -parseInt(_0x36b929(0x90)) / 0x2 * (parseInt(_0x36b929(0x92)) / 0x3) + -parseInt(_0x36b929(0x97)) / 0x4 + parseInt(_0x36b929(0x9e)) / 0x5 + parseInt(_0x36b929(0x8d)) / 0x6 * (-parseInt(_0x36b929(0x93)) / 0x7) + parseInt(_0x36b929(0x8e)) / 0x8 * (parseInt(_0x36b929(0x95)) / 0x9) + parseInt(_0x36b929(0x9b)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xbe09, 0x6d139));
var input = require('fs')[a0_0x15b75f(0x99)](a0_0x15b75f(0x91), 'utf8');
var s = input['trim']()['split']('');
var abc = a0_0x15b75f(0x96)[a0_0x15b75f(0x9a)]('');
s = s[a0_0x15b75f(0x8f)](v => abc[a0_0x15b75f(0x9c)](v));
var cnt = 0x0;
var memo = 0x0;
function a0_0x3129(TJBITH, key) {
    var stringArray = a0_0xbe09();
    a0_0x3129 = function (index, key) {
        index = index - 0x8d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3129(TJBITH, key);
}
s[a0_0x15b75f(0x94)](v => {
    if (memo >= v)
        cnt++;
    memo = v;
});
console[a0_0x15b75f(0x98)](cnt);
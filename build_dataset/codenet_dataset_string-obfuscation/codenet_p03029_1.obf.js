function a0_0x36f2() {
    var _0x500d3c = [
        '1933757kAPugq',
        'trim',
        'shift',
        '3965550cDsTLO',
        'log',
        'map',
        '/dev/stdin',
        '3956832eUEZnx',
        '1465990oUVgHi',
        '2481OfUtSM',
        'utf8',
        '1145454CHKFWH',
        'floor',
        '938692FiCAqW',
        '4376ntLmrp',
        'split'
    ];
    a0_0x36f2 = function () {
        return _0x500d3c;
    };
    return a0_0x36f2();
}
function a0_0x55b3(PmNSFO, key) {
    var stringArray = a0_0x36f2();
    a0_0x55b3 = function (index, key) {
        index = index - 0x10f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x55b3(PmNSFO, key);
}
var a0_0x229624 = a0_0x55b3;
(function (stringArrayFunction, comparisonValue) {
    var _0x3dccd5 = a0_0x55b3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3dccd5(0x115)) / 0x1 + -parseInt(_0x3dccd5(0x113)) / 0x2 + parseInt(_0x3dccd5(0x111)) / 0x3 * (parseInt(_0x3dccd5(0x116)) / 0x4) + parseInt(_0x3dccd5(0x110)) / 0x5 + parseInt(_0x3dccd5(0x11b)) / 0x6 + -parseInt(_0x3dccd5(0x118)) / 0x7 + parseInt(_0x3dccd5(0x10f)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x36f2, 0x8a223));
(stdin => {
    var _0x5b328a = a0_0x55b3;
    var lines = stdin[_0x5b328a(0x119)]()['split']('\x0a');
    var inputs = lines[_0x5b328a(0x11a)]()[_0x5b328a(0x117)]('\x20')[_0x5b328a(0x11d)](Number);
    console[_0x5b328a(0x11c)](Math[_0x5b328a(0x114)]((inputs[0x0] * 0x3 + inputs[0x1]) / 0x2));
})(require('fs')['readFileSync'](a0_0x229624(0x11e), a0_0x229624(0x112)));
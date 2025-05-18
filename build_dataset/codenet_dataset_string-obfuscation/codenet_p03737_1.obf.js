function a0_0x34ca() {
    var _0x3468c9 = [
        '2820282qqgMZe',
        '/dev/stdin',
        'map',
        '6480404rFYYRr',
        'join',
        '780675rTLCcp',
        'split',
        '10140NsHnCN',
        'readFileSync',
        '2764194HFocVC',
        '787600pEPWVb',
        'toUpperCase',
        '1860868EcKLAI',
        'log'
    ];
    a0_0x34ca = function () {
        return _0x3468c9;
    };
    return a0_0x34ca();
}
function a0_0x6ad5(fOvIlM, key) {
    var stringArray = a0_0x34ca();
    a0_0x6ad5 = function (index, key) {
        index = index - 0xd9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6ad5(fOvIlM, key);
}
var a0_0x129e80 = a0_0x6ad5;
(function (stringArrayFunction, comparisonValue) {
    var _0x1d6587 = a0_0x6ad5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1d6587(0xe0)) / 0x1 + -parseInt(_0x1d6587(0xd9)) / 0x2 + -parseInt(_0x1d6587(0xe4)) / 0x3 + -parseInt(_0x1d6587(0xe2)) / 0x4 + parseInt(_0x1d6587(0xe5)) / 0x5 + parseInt(_0x1d6587(0xdb)) / 0x6 + parseInt(_0x1d6587(0xde)) / 0x7;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x34ca, 0x7519f));
function Main(input) {
    var _0x572dc2 = a0_0x6ad5;
    console[_0x572dc2(0xda)]((input || '')[_0x572dc2(0xe1)](/\s+/)[_0x572dc2(0xdd)](function (entry) {
        var _0x22a98f = _0x572dc2;
        return entry[0x0][_0x22a98f(0xe6)]();
    })[_0x572dc2(0xdf)](''));
}
Main(require('fs')[a0_0x129e80(0xe3)](a0_0x129e80(0xdc), 'utf8'));
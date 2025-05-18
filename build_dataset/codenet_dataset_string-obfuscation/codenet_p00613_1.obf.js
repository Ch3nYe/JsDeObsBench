function a0_0x3e45() {
    var _0x2fbfab = [
        '718530aXaMYq',
        'readFileSync',
        '845920WkVzkc',
        'shift',
        '5850290VkqQmt',
        '127xsAmPp',
        '6nRmosu',
        'utf8',
        '2052837Jfnams',
        'reduce',
        'trim',
        '2064kUUtYR',
        '2986tbbOeI',
        'split',
        'map',
        '70EvfMuk',
        '347247AIGZyc'
    ];
    a0_0x3e45 = function () {
        return _0x2fbfab;
    };
    return a0_0x3e45();
}
var a0_0x25fa95 = a0_0x4272;
(function (stringArrayFunction, comparisonValue) {
    var _0xdc1682 = a0_0x4272;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xdc1682(0x183)) / 0x1 * (parseInt(_0xdc1682(0x179)) / 0x2) + -parseInt(_0xdc1682(0x17d)) / 0x3 + parseInt(_0xdc1682(0x180)) / 0x4 + -parseInt(_0xdc1682(0x17e)) / 0x5 * (parseInt(_0xdc1682(0x184)) / 0x6) + -parseInt(_0xdc1682(0x17c)) / 0x7 * (parseInt(_0xdc1682(0x178)) / 0x8) + -parseInt(_0xdc1682(0x175)) / 0x9 + parseInt(_0xdc1682(0x182)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3e45, 0x1c822));
var input = require('fs')[a0_0x25fa95(0x17f)]('/dev/stdin', a0_0x25fa95(0x185));
var Arr = input[a0_0x25fa95(0x177)]()['split']('\x0a');
function a0_0x4272(ueuyDY, key) {
    var stringArray = a0_0x3e45();
    a0_0x4272 = function (index, key) {
        index = index - 0x175;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4272(ueuyDY, key);
}
while (!![]) {
    var K = Arr[a0_0x25fa95(0x181)]() - 0x0;
    if (K == 0x0)
        break;
    var arr = Arr[a0_0x25fa95(0x181)]()[a0_0x25fa95(0x17a)]('\x20')[a0_0x25fa95(0x17b)](Number);
    var sum = arr[a0_0x25fa95(0x176)](function (a, b) {
        return a + b;
    });
    console['log'](sum / (K - 0x1));
}
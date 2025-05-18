function a0_0x188b(UjonRX, key) {
    var stringArray = a0_0x1281();
    a0_0x188b = function (index, key) {
        index = index - 0x184;
        var value = stringArray[index];
        return value;
    };
    return a0_0x188b(UjonRX, key);
}
var a0_0x3fa963 = a0_0x188b;
(function (stringArrayFunction, comparisonValue) {
    var _0xd6d4aa = a0_0x188b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xd6d4aa(0x189)) / 0x1 + parseInt(_0xd6d4aa(0x191)) / 0x2 + -parseInt(_0xd6d4aa(0x18f)) / 0x3 + parseInt(_0xd6d4aa(0x18d)) / 0x4 * (parseInt(_0xd6d4aa(0x184)) / 0x5) + -parseInt(_0xd6d4aa(0x18e)) / 0x6 + parseInt(_0xd6d4aa(0x187)) / 0x7 * (-parseInt(_0xd6d4aa(0x18c)) / 0x8) + parseInt(_0xd6d4aa(0x185)) / 0x9 * (parseInt(_0xd6d4aa(0x192)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1281, 0xf04f9));
function main(input) {
    var _0x24fff1 = a0_0x188b;
    var nums = input[_0x24fff1(0x190)]('\x0a')[0x1][_0x24fff1(0x190)]('\x20')[_0x24fff1(0x186)](n => parseInt(n, 0xa));
    var count = 0x0;
    while (nums[_0x24fff1(0x18a)](n => n % 0x2 === 0x0)) {
        count++;
        nums = nums['map'](n => n / 0x2);
    }
    console[_0x24fff1(0x18b)](count);
}
main(require('fs')[a0_0x3fa963(0x193)](a0_0x3fa963(0x188), 'utf8'));
function a0_0x1281() {
    var _0xe4893d = [
        'log',
        '16irIETy',
        '38188qHDRDg',
        '10869558LAtlIO',
        '4663884tWgIKr',
        'split',
        '1998736btDIKF',
        '5790940CdPuwx',
        'readFileSync',
        '425FiYCzC',
        '72xQGMHk',
        'map',
        '1493681vFtWgw',
        '/dev/stdin',
        '1666315SpLVrQ',
        'every'
    ];
    a0_0x1281 = function () {
        return _0xe4893d;
    };
    return a0_0x1281();
}
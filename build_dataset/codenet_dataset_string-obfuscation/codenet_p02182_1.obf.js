var a0_0x5ec2ba = a0_0x5736;
(function (stringArrayFunction, comparisonValue) {
    var _0x32faf0 = a0_0x5736;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x32faf0(0xd1)) / 0x1 * (parseInt(_0x32faf0(0xcb)) / 0x2) + -parseInt(_0x32faf0(0xcf)) / 0x3 + -parseInt(_0x32faf0(0xc8)) / 0x4 + -parseInt(_0x32faf0(0xce)) / 0x5 + -parseInt(_0x32faf0(0xc6)) / 0x6 * (-parseInt(_0x32faf0(0xcd)) / 0x7) + parseInt(_0x32faf0(0xc2)) / 0x8 * (parseInt(_0x32faf0(0xc9)) / 0x9) + -parseInt(_0x32faf0(0xc4)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3aed, 0xefd71));
var input = require('fs')[a0_0x5ec2ba(0xc5)](a0_0x5ec2ba(0xc3), a0_0x5ec2ba(0xca));
var arr = input[a0_0x5ec2ba(0xcc)]()[a0_0x5ec2ba(0xd0)]('\x0a');
function a0_0x3aed() {
    var _0x3eb495 = [
        'readFileSync',
        '219900Czhrjn',
        'shift',
        '977536XieIXG',
        '674397CVVRGi',
        'utf8',
        '126cGSPsl',
        'trim',
        '140FKOjlf',
        '2804010WtMksx',
        '4931379mwjeJx',
        'split',
        '24379iWCptX',
        'map',
        'log',
        '152MNZICz',
        '/dev/stdin',
        '2612400ADfAgZ'
    ];
    a0_0x3aed = function () {
        return _0x3eb495;
    };
    return a0_0x3aed();
}
var [n, m] = arr[a0_0x5ec2ba(0xc7)]()[a0_0x5ec2ba(0xd0)]('\x20')[a0_0x5ec2ba(0xc0)](Number);
var cnt = 0x0;
function a0_0x5736(SwfIRC, key) {
    var stringArray = a0_0x3aed();
    a0_0x5736 = function (index, key) {
        index = index - 0xc0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5736(SwfIRC, key);
}
for (var i = 0x0; i < n; i++) {
    var s = arr[i];
    var t = arr[i + n];
    for (var j = 0x0; j < m; j++) {
        if (s[j] != t[j])
            cnt++;
    }
}
console[a0_0x5ec2ba(0xc1)](cnt);
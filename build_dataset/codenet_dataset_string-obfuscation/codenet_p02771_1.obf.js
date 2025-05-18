function a0_0x2232() {
    var _0x165643 = [
        'utf8',
        '482335WZIeQH',
        'split',
        '138156iLQuIR',
        '1207704ZbSuvU',
        '8WMPgrE',
        'log',
        '26276XvPRHL',
        '/dev/stdin',
        '299201kEBPrS',
        '2825595fIkXoc',
        '175350vHkjuH',
        '18sMEYRz'
    ];
    a0_0x2232 = function () {
        return _0x165643;
    };
    return a0_0x2232();
}
function a0_0x587f(cvVRJU, key) {
    var stringArray = a0_0x2232();
    a0_0x587f = function (index, key) {
        index = index - 0xc5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x587f(cvVRJU, key);
}
var a0_0x426b54 = a0_0x587f;
(function (stringArrayFunction, comparisonValue) {
    var _0x7047c8 = a0_0x587f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x7047c8(0xcc)) / 0x1 + parseInt(_0x7047c8(0xc8)) / 0x2 + -parseInt(_0x7047c8(0xd1)) / 0x3 * (parseInt(_0x7047c8(0xc6)) / 0x4) + parseInt(_0x7047c8(0xcf)) / 0x5 + -parseInt(_0x7047c8(0xcd)) / 0x6 * (-parseInt(_0x7047c8(0xca)) / 0x7) + -parseInt(_0x7047c8(0xc5)) / 0x8 + parseInt(_0x7047c8(0xcb)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2232, 0x208fc));
const Main = input => {
    var _0x4963bc = a0_0x587f;
    const tmp = input[_0x4963bc(0xd0)]('\x20');
    var a = parseInt(tmp[0x0]);
    var b = parseInt(tmp[0x1]);
    var c = parseInt(tmp[0x2]);
    if (a === b && b !== c || b === c && c !== a || c === a && b !== c) {
        console[_0x4963bc(0xc7)]('Yes');
    } else {
        console[_0x4963bc(0xc7)]('No');
    }
};
Main(require('fs')['readFileSync'](a0_0x426b54(0xc9), a0_0x426b54(0xce)));
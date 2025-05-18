var a0_0x51a693 = a0_0x52b0;
(function (stringArrayFunction, comparisonValue) {
    var _0x23b562 = a0_0x52b0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x23b562(0x1bd)) / 0x1 * (parseInt(_0x23b562(0x1b5)) / 0x2) + -parseInt(_0x23b562(0x1bc)) / 0x3 + parseInt(_0x23b562(0x1b7)) / 0x4 * (-parseInt(_0x23b562(0x1af)) / 0x5) + -parseInt(_0x23b562(0x1bf)) / 0x6 + -parseInt(_0x23b562(0x1b1)) / 0x7 * (-parseInt(_0x23b562(0x1bb)) / 0x8) + parseInt(_0x23b562(0x1c1)) / 0x9 + -parseInt(_0x23b562(0x1ba)) / 0xa * (-parseInt(_0x23b562(0x1b8)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5160, 0xba0f7));
var input = require('fs')[a0_0x51a693(0x1c0)]('/dev/stdin', a0_0x51a693(0x1be));
function a0_0x5160() {
    var _0x56b20a = [
        'map',
        '530wrEyyR',
        '8czDipA',
        '4068864zpnbDB',
        '1775CjddHp',
        'utf8',
        '8462130LVoYRh',
        'readFileSync',
        '2086191TtNsvK',
        'push',
        '4413275yjLtWk',
        'trim',
        '6749183JVOgWI',
        'split',
        'log',
        'pow',
        '1600OXQQfl',
        'apply',
        '4LEMPEC',
        '962071TbmCld'
    ];
    a0_0x5160 = function () {
        return _0x56b20a;
    };
    return a0_0x5160();
}
function a0_0x52b0(CwfRmi, key) {
    var stringArray = a0_0x5160();
    a0_0x52b0 = function (index, key) {
        index = index - 0x1ae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52b0(CwfRmi, key);
}
var Arr = input[a0_0x51a693(0x1b0)]()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var y = Arr['shift']() - 0x0;
    var S = [];
    var s = [];
    for (var i = 0x0; i < n; i++) {
        var brt = Arr['shift']()[a0_0x51a693(0x1b2)]('\x20')[a0_0x51a693(0x1b9)](Number);
        var r = brt[0x1];
        var t = brt[0x2];
        var result;
        if (t == 0x1)
            result = 0x2710 * (0x1 + y * (r / 0x64));
        if (t == 0x2)
            result = 0x2710 * Math[a0_0x51a693(0x1b4)](0x1 + r / 0x64, y);
        S['push'](brt[0x0]);
        s[a0_0x51a693(0x1ae)](result);
    }
    var max = Math['max'][a0_0x51a693(0x1b6)](null, s);
    console[a0_0x51a693(0x1b3)](S[s['indexOf'](max)]);
}
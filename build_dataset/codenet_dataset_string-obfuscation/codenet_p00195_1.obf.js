var a0_0x15c3bd = a0_0x5c5c;
function a0_0x5c5c(KBbUpf, key) {
    var stringArray = a0_0x3b25();
    a0_0x5c5c = function (index, key) {
        index = index - 0x1a8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c5c(KBbUpf, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5ee474 = a0_0x5c5c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5ee474(0x1b3)) / 0x1 + parseInt(_0x5ee474(0x1b2)) / 0x2 + -parseInt(_0x5ee474(0x1aa)) / 0x3 * (parseInt(_0x5ee474(0x1ab)) / 0x4) + -parseInt(_0x5ee474(0x1b9)) / 0x5 + parseInt(_0x5ee474(0x1b7)) / 0x6 + -parseInt(_0x5ee474(0x1a8)) / 0x7 + parseInt(_0x5ee474(0x1b4)) / 0x8 * (parseInt(_0x5ee474(0x1bb)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3b25, 0xb7539));
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x15c3bd(0x1ad));
var Arr = input[a0_0x15c3bd(0x1ac)]()['split']('\x0a');
var abc = [];
function a0_0x3b25() {
    var _0x448477 = [
        'length',
        '12492315RwoKij',
        '30730Qtwbyx',
        'reduce',
        '4059emyTEo',
        '32cbNZBi',
        'trim',
        'utf8',
        'ABCD',
        'log',
        '0\x200',
        'indexOf',
        '695514lNVBDB',
        '732257mMHabd',
        '8eacDWW',
        'map',
        'split',
        '2730858OyUqkw',
        'max',
        '3462795EgHLRP'
    ];
    a0_0x3b25 = function () {
        return _0x448477;
    };
    return a0_0x3b25();
}
for (var i = 0x0; i < Arr[a0_0x15c3bd(0x1ba)]; i++) {
    if (abc['length'] == 0x0 && Arr[i] == a0_0x15c3bd(0x1b0))
        break;
    if (abc[a0_0x15c3bd(0x1ba)] == 0x4) {
        var max = abc[a0_0x15c3bd(0x1a9)](function (a, b) {
            var _0x3a608f = a0_0x15c3bd;
            return Math[_0x3a608f(0x1b8)](a, b);
        });
        var ABC = a0_0x15c3bd(0x1ae)['split']('');
        var str = ABC[abc[a0_0x15c3bd(0x1b1)](max)];
        console[a0_0x15c3bd(0x1af)](str + '\x20' + max);
        abc = [];
    } else {
        var arr = Arr[i][a0_0x15c3bd(0x1b6)]('\x20')[a0_0x15c3bd(0x1b5)](Number);
        abc['push'](arr[0x0] + arr[0x1]);
    }
}
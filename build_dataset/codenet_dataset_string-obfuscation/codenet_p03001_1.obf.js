var a0_0xe1af2a = a0_0x2a83;
function a0_0x2ae3() {
    var _0x382231 = [
        '4325016mqEuQF',
        '6214180qoHnXl',
        '2758QzdRrG',
        '1016ZgONee',
        '5236686TFtXSy',
        'map',
        'split',
        '1745961UvgAAT',
        'readFileSync',
        'log',
        '/dev/stdin',
        '149238NwJjEs',
        'toFixed',
        '46HkyQls',
        '1310704aqDtyw',
        'slice'
    ];
    a0_0x2ae3 = function () {
        return _0x382231;
    };
    return a0_0x2ae3();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2be313 = a0_0x2a83;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2be313(0x17e)) / 0x1 * (-parseInt(_0x2be313(0x173)) / 0x2) + parseInt(_0x2be313(0x171)) / 0x3 + -parseInt(_0x2be313(0x16f)) / 0x4 + -parseInt(_0x2be313(0x172)) / 0x5 + -parseInt(_0x2be313(0x175)) / 0x6 + -parseInt(_0x2be313(0x178)) / 0x7 + -parseInt(_0x2be313(0x174)) / 0x8 * (-parseInt(_0x2be313(0x17c)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2ae3, 0xe0320));
function a0_0x2a83(GzwPAV, key) {
    var stringArray = a0_0x2ae3();
    a0_0x2a83 = function (index, key) {
        index = index - 0x16f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a83(GzwPAV, key);
}
function Main(input) {
    var _0x4ebd6b = a0_0x2a83;
    var input = input[_0x4ebd6b(0x177)]('\x0a');
    var arya = input[0x0]['split']('\x20')[_0x4ebd6b(0x176)](val => parseInt(val, 0xa))[_0x4ebd6b(0x170)](0x0, 0x4);
    var w = arya[0x0];
    var h = arya[0x1];
    var x = arya[0x2];
    var y = arya[0x3];
    if (x == 0x0 & y == 0x0 || x == w && y == h) {
        console['log']((w * h / 0x2)[_0x4ebd6b(0x17d)](0x6) + '\x200');
        return !![];
    }
    var a1 = x * h;
    var a2 = (w - x) * h;
    var b1 = y * w;
    var b2 = (h - y) * w;
    var a = a1;
    var b = b1;
    var counter = 0x0;
    if (a1 > a2) {
        a = a2;
    }
    if (b1 > b2) {
        b = b2;
    }
    var reault = a;
    if (a < b) {
        reault = b;
    }
    if (a == b) {
        var counter = 0x1;
    }
    console[_0x4ebd6b(0x17a)](reault[_0x4ebd6b(0x17d)](0x6) + '\x20' + counter);
}
Main(require('fs')[a0_0xe1af2a(0x179)](a0_0xe1af2a(0x17b), 'utf8'));
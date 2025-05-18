function a0_0x4be2() {
    var _0x26cc97 = [
        'split',
        'map',
        'slice',
        'log',
        'toFixed',
        'bNFnG',
        'SrxTf',
        'HrdUE',
        'jSOTn',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4be2 = function () {
        return _0x26cc97;
    };
    return a0_0x4be2();
}
function a0_0x51bd(ItHSuE, key) {
    var stringArray = a0_0x4be2();
    a0_0x51bd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x51bd(ItHSuE, key);
}
var a0_0x382b84 = a0_0x51bd;
function Main(input) {
    var _0x20de08 = a0_0x51bd;
    var input = input[_0x20de08(0x0)]('\x0a');
    var arya = input[0x0]['split']('\x20')[_0x20de08(0x1)](val => parseInt(val, 0xa))[_0x20de08(0x2)](0x0, 0x4);
    var w = arya[0x0];
    var h = arya[0x1];
    var x = arya[0x2];
    var y = arya[0x3];
    if (x == 0x0 & y == 0x0 || x == w && y == h) {
        console[_0x20de08(0x3)]((w * h / 0x2)[_0x20de08(0x4)](0x6) + '\x200');
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
        if (_0x20de08(0x5) !== _0x20de08(0x5)) {
            a = a2;
        } else {
            a = a2;
        }
    }
    if (b1 > b2) {
        if (_0x20de08(0x6) === _0x20de08(0x7)) {
            reault = b;
        } else {
            b = b2;
        }
    }
    var reault = a;
    if (a < b) {
        if (_0x20de08(0x8) !== 'QRuak') {
            reault = b;
        } else {
            var counter = 0x1;
        }
    }
    if (a == b) {
        var counter = 0x1;
    }
    console[_0x20de08(0x3)](reault['toFixed'](0x6) + '\x20' + counter);
}
Main(require('fs')['readFileSync'](a0_0x382b84(0x9), a0_0x382b84(0xa)));
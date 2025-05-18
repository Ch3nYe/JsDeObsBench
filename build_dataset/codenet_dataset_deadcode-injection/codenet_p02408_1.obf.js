'use strict';
var a0_0x250eb2 = a0_0x4985;
function a0_0x4985(leOyBz, key) {
    var stringArray = a0_0x2ecf();
    a0_0x4985 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4985(leOyBz, key);
}
function a0_0x2ecf() {
    var _0x519504 = [
        'toString',
        'split',
        'join',
        'forEach',
        'shift',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2ecf = function () {
        return _0x519504;
    };
    return a0_0x2ecf();
}
(function (stdin) {
    var _0x1872e8 = a0_0x4985;
    var lines = stdin[_0x1872e8(0x0)]()[_0x1872e8(0x1)]('\x0a');
    var result = function (data) {
        var _0x1136a5 = a0_0x4985;
        return new Deck()['filter'](function (v) {
            return this['indexOf'](v) === -0x1;
        }, data)[_0x1136a5(0x2)]('\x0a');
        function Deck() {
            var _0x1801e8 = a0_0x4985;
            var deck = [];
            [
                'S',
                'H',
                'C',
                'D'
            ][_0x1801e8(0x3)](function (v) {
                for (var i = 0x0; i < 0xd; i++)
                    deck['push']([
                        v,
                        i + 0x1
                    ]['join']('\x20'));
            });
            return deck;
        }
    }(lines['slice'](0x0, lines[_0x1872e8(0x4)]()));
    if (result[_0x1872e8(0x5)] !== 0x0)
        console[_0x1872e8(0x6)](result);
}(require('fs')[a0_0x250eb2(0x7)](a0_0x250eb2(0x8), 'utf8')));
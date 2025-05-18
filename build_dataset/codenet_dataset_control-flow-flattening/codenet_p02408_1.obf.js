'use strict';
(function (stdin) {
    var YLssHr = {
        'lPpHg': function (x, y) {
            return x === y;
        },
        'iKWOr': function (x, y) {
            return x < y;
        },
        'eXXPe': function (x, y) {
            return x + y;
        },
        'hjIwz': function (x, y) {
            return x !== y;
        }
    };
    var lines = stdin['toString']()['split']('\x0a');
    var result = function (data) {
        var zwfDZY = {
            'mXPZn': function (x, y) {
                return YLssHr['lPpHg'](x, y);
            },
            'SXIMN': function (x, y) {
                return YLssHr['iKWOr'](x, y);
            },
            'VLkAp': function (x, y) {
                return YLssHr['eXXPe'](x, y);
            }
        };
        return new Deck()['filter'](function (v) {
            return zwfDZY['mXPZn'](this['indexOf'](v), -0x1);
        }, data)['join']('\x0a');
        function Deck() {
            var deck = [];
            [
                'S',
                'H',
                'C',
                'D'
            ]['forEach'](function (v) {
                for (var i = 0x0; zwfDZY['SXIMN'](i, 0xd); i++)
                    deck['push']([
                        v,
                        zwfDZY['VLkAp'](i, 0x1)
                    ]['join']('\x20'));
            });
            return deck;
        }
    }(lines['slice'](0x0, lines['shift']()));
    if (YLssHr['hjIwz'](result['length'], 0x0))
        console['log'](result);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
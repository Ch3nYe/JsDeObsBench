'use strict';
function I(s, f) {
    var Ilkaus = {
        'GZlhz': function (x, y) {
            return x || y;
        }
    };
    this['_s'] = s['split']('\x0a');
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = Ilkaus['GZlhz'](f, Number);
}
I['prototype']['a'] = function () {
    var euyZIa = {
        'IxanH': function (x, y) {
            return x === y;
        }
    };
    var iVUNyg = '0|2|3|6|4|5|1'['split']('|');
    var mmTDmO = 0x0;
    while (!![]) {
        switch (iVUNyg[mmTDmO++]) {
        case '0':
            var l = this['_s'][this['_l']];
            continue;
        case '1':
            return this['_f'](a);
        case '2':
            if (!l)
                return;
            continue;
        case '3':
            var t = l['trim']()['split']('\x20');
            continue;
        case '4':
            this['_c']++;
            continue;
        case '5':
            if (euyZIa['IxanH'](t['length'], this['_c'])) {
                this['_c'] = 0x0;
                this['_l']++;
            }
            continue;
        case '6':
            var a = t[this['_c']];
            continue;
        }
        break;
    }
};
I['prototype']['l'] = function () {
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    this['_c'] = 0x0;
    this['_l']++;
    return l['split']('\x20')['map'](this['_f']);
};
function main(input) {
    var sjORJi = {
        'YcUMC': function (x, y) {
            return x === y;
        },
        'puYNF': function (x, y) {
            return x < y;
        }
    };
    var o = new I(input, String);
    var n = Number(o['a']());
    var s = o['a']();
    var white = 0x0;
    var black = 0x0;
    for (var i = 0x0; i < s['length']; i++) {
        if (s[i] === '.')
            white += 0x1;
    }
    let min = white;
    for (var i = 0x0; i < s['length']; i++) {
        if (sjORJi['YcUMC'](s[i], '#')) {
            black += 0x1;
        } else {
            white -= 0x1;
        }
        if (sjORJi['puYNF'](black + white, min)) {
            min = black + white;
        }
    }
    console['log'](min);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
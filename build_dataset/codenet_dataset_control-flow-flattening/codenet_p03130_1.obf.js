'use strict';
function I(s, f) {
    this['_s'] = s;
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = f || Number;
}
I['prototype']['a'] = function () {
    var HJHuVJ = { 'SyTvZ': '6|1|5|2|0|3|4' };
    var bOXdcI = HJHuVJ['SyTvZ']['split']('|');
    var JTFWyE = 0x0;
    while (!![]) {
        switch (bOXdcI[JTFWyE++]) {
        case '0':
            this['_c']++;
            continue;
        case '1':
            if (!l)
                return;
            continue;
        case '2':
            var a = t[this['_c']];
            continue;
        case '3':
            if (t['length'] === this['_c']) {
                this['_c'] = 0x0;
                this['_l']++;
            }
            continue;
        case '4':
            return this['_f'](a);
        case '5':
            var t = l['trim']()['split']('\x20');
            continue;
        case '6':
            var l = this['_s']['split']('\x0a')[this['_l']];
            continue;
        }
        break;
    }
};
I['prototype']['l'] = function () {
    var l = this['_s']['split']('\x0a')[this['_l']];
    this['_c'] = 0x0;
    this['_l']++;
    return l['split']('\x20')['map'](this['_f']);
};
function main(input) {
    var RcQfWv = {
        'BTcjF': function (x, y) {
            return x < y;
        },
        'aeWVG': function (x, y) {
            return x === y;
        }
    };
    const o = new I(input);
    const arr = Array(0x4)['fill'](0x0);
    for (let i = 0x0; RcQfWv['BTcjF'](i, 0x3); i++) {
        let a = o['a']();
        let b = o['a']();
        arr[a - 0x1]++;
        arr[b - 0x1]++;
    }
    if (RcQfWv['aeWVG'](arr['sort']((a, b) => a - b)['join']('\x20'), '1\x201\x202\x202')) {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
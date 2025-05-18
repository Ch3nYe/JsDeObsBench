var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nq = arr['shift']()['split']('\x20')['map'](Number);
var player = [];
var maxValue = 0x0;
var maxId = 0x0;
for (var i = 0x0; i < nq[0x0]; i++)
    player[i] = 0x0;
arr['forEach'](function (V) {
    var aQxhWT = {
        'yWHoR': function (x, y) {
            return x == y;
        },
        'nhmFG': function (x, y) {
            return x >= y;
        },
        'paGKN': function (x, y) {
            return x > y;
        },
        'Gvlmr': function (x, y) {
            return x < y;
        },
        'BNjCy': function (x, y) {
            return x < y;
        },
        'SUASH': function (x, y) {
            return x + y;
        }
    };
    var Zqbzqb = '3|4|5|6|2|0|1'['split']('|');
    var Hxpvoh = 0x0;
    while (!![]) {
        switch (Zqbzqb[Hxpvoh++]) {
        case '0':
            if (aQxhWT['yWHoR'](a, maxId) && aQxhWT['nhmFG'](v, 0x0))
                maxValue += v;
            else if (aQxhWT['yWHoR'](maxValue, player[a]) && aQxhWT['paGKN'](maxId, a))
                maxId = a;
            else if (aQxhWT['Gvlmr'](maxValue, player[a])) {
                maxValue = player[a];
                maxId = a;
            } else if (aQxhWT['yWHoR'](a, maxId) && aQxhWT['BNjCy'](v, 0x0)) {
                var max = -0x1 * Infinity;
                player['forEach'](function (value, index) {
                    if (RbPqRm['yMpge'](max, value)) {
                        max = value;
                        maxValue = value;
                        maxId = index;
                    }
                });
            }
            continue;
        case '1':
            console['log'](aQxhWT['SUASH'](aQxhWT['SUASH'](maxId, 0x1), '\x20') + maxValue);
            continue;
        case '2':
            player[a] += v;
            continue;
        case '3':
            var RbPqRm = {
                'yMpge': function (x, y) {
                    return aQxhWT['Gvlmr'](x, y);
                }
            };
            continue;
        case '4':
            var av = V['split']('\x20')['map'](Number);
            continue;
        case '5':
            var a = av[0x0] - 0x1;
            continue;
        case '6':
            var v = av[0x1];
            continue;
        }
        break;
    }
});
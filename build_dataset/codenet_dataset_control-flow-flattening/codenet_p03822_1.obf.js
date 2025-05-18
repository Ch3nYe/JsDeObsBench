var tmp = {};
function main(chunk) {
    var iyTQbz = {
        'vpwJS': '1|4|0|3|2',
        'bJdUb': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'RyWHQ': function (x, y) {
            return x < y;
        },
        'Aoerf': function (x, y) {
            return x + y;
        },
        'beQKs': function (callee, param1) {
            return callee(param1);
        },
        'xhbML': function (x, y) {
            return x - y;
        }
    };
    var cjggMP = iyTQbz['vpwJS']['split']('|');
    var hPzWBI = 0x0;
    while (!![]) {
        switch (cjggMP[hPzWBI++]) {
        case '0':
            var map = {};
            continue;
        case '1':
            var lines = chunk['split']('\x0a');
            continue;
        case '2':
            console['log'](iyTQbz['bJdUb'](calc, map, 0x1) + 0x1);
            continue;
        case '3':
            for (var i = 0x2; iyTQbz['RyWHQ'](i, iyTQbz['Aoerf'](n, 0x1)); i++) {
                var a = iyTQbz['beQKs'](Number, lines[iyTQbz['xhbML'](i, 0x1)]);
                if (map[a]) {
                    map[a]['t']++;
                    map[a]['p']['push'](i);
                } else {
                    map[a] = {};
                    map[a]['t'] = 0x1;
                    map[a]['p'] = [i];
                }
            }
            continue;
        case '4':
            var n = Number(lines[0x0]);
            continue;
        }
        break;
    }
}
function calc(map, n) {
    var TuuNLw = {
        'SreKV': '0|2|3|1|4',
        'GxpNH': function (x, y) {
            return x + y;
        },
        'pPNqe': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var nArlwP = TuuNLw['SreKV']['split']('|');
    var EeDmhU = 0x0;
    while (!![]) {
        switch (nArlwP[EeDmhU++]) {
        case '0':
            if (tmp[n]) {
                return tmp[n];
            }
            continue;
        case '1':
            tmp[n] = ans;
            continue;
        case '2':
            var ans = 0x0;
            continue;
        case '3':
            for (var i in map[n]['p']) {
                var p = map[n]['p'][i];
                if (map[p]) {
                    ans = Math['max'](ans, TuuNLw['GxpNH'](map[p]['t'], TuuNLw['pPNqe'](calc, map, p)));
                }
            }
            continue;
        case '4':
            return ans;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
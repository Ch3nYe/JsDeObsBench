function gcd(arr) {
    var zZBMnD = {
        'dSOgv': function (x, y) {
            return x < y;
        }
    };
    var f = (a, b) => b ? f(b, a % b) : a;
    var ans = arr[0x0];
    for (var i = 0x1; zZBMnD['dSOgv'](i, arr['length']); i++) {
        ans = f(ans, arr[i]);
    }
    return ans;
}
function getExcep(c) {
    var jAdUcp = {
        'SSPww': function (x, y) {
            return x < y;
        },
        'bVOFi': function (x, y) {
            return x === y;
        }
    };
    var QTmYtA = '5|4|0|1|2|7|6|3'['split']('|');
    var SgoVyf = 0x0;
    while (!![]) {
        switch (QTmYtA[SgoVyf++]) {
        case '0':
            var mincount = 0x0;
            continue;
        case '1':
            var maxcount = 0x0;
            continue;
        case '2':
            var findValue = 0x0;
            continue;
        case '3':
            for (var i = 0x0; i < c['length']; i++) {
                if (c[i] === findValue) {
                    return i;
                }
            }
            continue;
        case '4':
            var max = Math['max'](...c);
            continue;
        case '5':
            var min = Math['min'](...c);
            continue;
        case '6':
            if (mincount === 0x1) {
                findValue = min;
            } else {
                findValue = max;
            }
            continue;
        case '7':
            for (var i = 0x0; jAdUcp['SSPww'](i, c['length']); i++) {
                if (jAdUcp['bVOFi'](c[i], min)) {
                    mincount++;
                }
            }
            continue;
        }
        break;
    }
}
function main(arg) {
    var tUHWJw = {
        'IewyR': function (x, y) {
            return x + y;
        },
        'cgrkW': function (callee, param1) {
            return callee(param1);
        },
        'pcZxh': function (x, y) {
            return x < y;
        },
        'vcdpM': function (callee, param1) {
            return callee(param1);
        }
    };
    var SPmWOf = '2|8|1|7|0|5|6|3|4'['split']('|');
    var ShIcyW = 0x0;
    while (!![]) {
        switch (SPmWOf[ShIcyW++]) {
        case '0':
            var result = 0x0;
            continue;
        case '1':
            var A = arg[0x1]['split']('\x20')['map'](Number);
            continue;
        case '2':
            arg = arg['trim']()['split']('\x0a');
            continue;
        case '3':
            A[idx] = A[tUHWJw['IewyR'](idx, 0x1)];
            continue;
        case '4':
            console['log'](tUHWJw['cgrkW'](gcd, A));
            continue;
        case '5':
            for (var i = 0x0; tUHWJw['pcZxh'](i, A['length']); i++) {
                var _A = A['slice']();
                _A['splice'](i, 0x1);
                var n = tUHWJw['vcdpM'](gcd, _A);
                c[i] = n;
            }
            continue;
        case '6':
            var idx = getExcep(c);
            continue;
        case '7':
            var c = new Array(A['length'])['fill'](0x0);
            continue;
        case '8':
            var N = Number(arg[0x0]);
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
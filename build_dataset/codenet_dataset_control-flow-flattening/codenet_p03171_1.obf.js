'use strict';
function solve(N, A) {
    var aXkjQD = {
        'eCHbL': function (x, y) {
            return x + y;
        },
        'UWVBh': function (x, y) {
            return x <= y;
        },
        'XPIYB': function (x, y) {
            return x > y;
        },
        'gERQv': function (x, y) {
            return x === y;
        },
        'eCHRB': function (x, y) {
            return x - y;
        },
        'vOgLd': function (x, y) {
            return x + y;
        },
        'aydkU': function (x, y) {
            return x - y;
        },
        'aRHuw': function (x, y) {
            return x + y;
        },
        'xlGPm': function (x, y) {
            return x - y;
        },
        'xwsWn': function (x, y) {
            return x + y;
        },
        'sWrwN': function (x, y) {
            return x + y;
        },
        'knTqi': function (x, y) {
            return x + y;
        },
        'PuUvf': function (x, y) {
            return x - y;
        },
        'IBHLd': function (x, y) {
            return x - y;
        }
    };
    var dp = new Array(aXkjQD['eCHbL'](N, 0x1))['fill'](0x0)['map'](e => new Array(N + 0x1)['fill'](0x0));
    var row = 0x1;
    var col = 0x1;
    while (aXkjQD['UWVBh'](col, N)) {
        var c = col;
        for (var r = row; aXkjQD['UWVBh'](r, N); r++) {
            if (aXkjQD['XPIYB'](c, N)) {
                break;
            }
            if (aXkjQD['gERQv'](c, r)) {
                dp[r][c] = A[aXkjQD['eCHRB'](r, 0x1)];
            } else if (aXkjQD['gERQv'](c, aXkjQD['vOgLd'](r, 0x1))) {
                dp[r][c] = Math['max'](A[aXkjQD['aydkU'](r, 0x1)], A[aXkjQD['eCHRB'](c, 0x1)]);
            } else {
                dp[r][c] = Math['max'](aXkjQD['aRHuw'](A[aXkjQD['xlGPm'](r, 0x1)], Math['min'](dp[aXkjQD['aRHuw'](r, 0x1)][aXkjQD['eCHRB'](c, 0x1)], dp[aXkjQD['xwsWn'](r, 0x2)][c])), aXkjQD['sWrwN'](A[c - 0x1], Math['min'](dp[aXkjQD['knTqi'](r, 0x1)][aXkjQD['PuUvf'](c, 0x1)], dp[r][aXkjQD['eCHRB'](c, 0x2)])));
            }
            c++;
        }
        col++;
    }
    var taro = dp[0x1][N];
    var sum = A['reduce']((acc, current) => acc + current);
    return aXkjQD['IBHLd'](taro, sum - taro);
}
function main(input) {
    var uRsCxS = {
        'Slzgt': '4|1|2|0|3',
        'RdFSo': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var ouqrAl = uRsCxS['Slzgt']['split']('|');
    var wdXvnR = 0x0;
    while (!![]) {
        switch (ouqrAl[wdXvnR++]) {
        case '0':
            var ans = uRsCxS['RdFSo'](solve, N, A);
            continue;
        case '1':
            var N = parseInt(lines[0x0]);
            continue;
        case '2':
            var A = lines[0x1]['split']('\x20')['map'](l => parseInt(l));
            continue;
        case '3':
            console['log'](ans);
            continue;
        case '4':
            var lines = input['split']('\x0a');
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
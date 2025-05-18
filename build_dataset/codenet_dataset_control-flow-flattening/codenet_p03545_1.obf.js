'use strict';
var lines = require('fs')['readFileSync'](0x0, 'utf8')['split']('\x0a');
var str = lines[0x0];
var n = str['length'] - 0x1;
var dfs = (i, sum, order) => {
    var ETezij = {
        'BQgEE': function (x, y) {
            return x === y;
        },
        'BjGqj': function (x, y) {
            return x == y;
        },
        'wmHiq': function (callee, param1) {
            return callee(param1);
        },
        'GsXIt': function (x, y) {
            return x + y;
        },
        'izacy': function (x, y) {
            return x + y;
        },
        'PaMgQ': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    if (ETezij['BQgEE'](i, n))
        return ETezij['BjGqj'](ETezij['wmHiq'](eval, ETezij['GsXIt'](order, str[n])), 0x7) ? ETezij['izacy'](order, str[n]) : '';
    var temp = dfs(ETezij['GsXIt'](i, 0x1), sum, ETezij['GsXIt'](order, str[i]) + '+');
    return temp ? temp : ETezij['PaMgQ'](dfs, i + 0x1, sum, order + str[i] + '-');
};
var ans = dfs(0x0, 0x0, '');
console['log'](ans ? ans + '=7' : '');
'use strict';
function main(input) {
    const dvIEJO = {
        'DugiY': function (x, y) {
            return x > y;
        },
        'WuMZd': function (x, y) {
            return x - y;
        },
        'PGbgb': function (x, y) {
            return x + y;
        },
        'HhWTa': function (x, y) {
            return x - y;
        },
        'cGxQC': function (x, y) {
            return x + y;
        },
        'JyplO': function (x, y) {
            return x + y;
        },
        'NanQJ': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'JUBsZ': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        }
    };
    input = input['trim']()['split']('\x0a');
    let ABC = input['shift']()['split']('\x20')['map'](v => Number(v));
    const N = ABC['shift']();
    input = input['map'](v => Number(v))['sort']((a, b) => b - a);
    const INF = Math['pow'](0xa, 0x9);
    const dfs = (cur, a, b, c) => {
        if (cur === N) {
            if (dvIEJO['DugiY'](Math['min'](a, b, c), 0x0)) {
                return dvIEJO['WuMZd'](dvIEJO['PGbgb'](dvIEJO['PGbgb'](Math['abs'](a - ABC[0x0]), Math['abs'](dvIEJO['HhWTa'](b, ABC[0x1]))), Math['abs'](c - ABC[0x2])), 0x1e);
            }
            return INF;
        }
        return Math['min'](dfs(dvIEJO['cGxQC'](cur, 0x1), a, b, c), dvIEJO['PGbgb'](dfs(cur + 0x1, dvIEJO['PGbgb'](a, input[cur]), b, c), 0xa), dfs(dvIEJO['PGbgb'](cur, 0x1), a, dvIEJO['JyplO'](b, input[cur]), c) + 0xa, dvIEJO['JyplO'](dvIEJO['NanQJ'](dfs, cur + 0x1, a, b, c + input[cur]), 0xa));
    };
    console['log'](dvIEJO['JUBsZ'](dfs, 0x0, 0x0, 0x0, 0x0));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
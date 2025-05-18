'use strict';
function main(input) {
    const VkRhBD = {
        'WFBub': function (x, y) {
            return x < y;
        },
        'bRUaq': function (x, y) {
            return x == y;
        },
        'DiJwE': function (callee, param1) {
            return callee(param1);
        },
        'Eqfgs': function (x, y) {
            return x + y;
        },
        'IGAdt': function (x, y) {
            return x < y;
        },
        'yHXYu': function (x, y) {
            return x + y;
        },
        'hdOcU': function (x, y) {
            return x * y;
        },
        'CLabv': function (callee, param1) {
            return callee(param1);
        },
        'GZxVb': function (x, y) {
            return x % y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const N = Number(input[0x0]);
    const line2_arr = input[0x1]['split']('\x20');
    let ans = 0x0;
    for (let i = 0x0; VkRhBD['WFBub'](i, N); i++) {
        if (VkRhBD['bRUaq'](VkRhBD['DiJwE'](Number, line2_arr[i]), 0x0))
            continue;
        for (let j = VkRhBD['Eqfgs'](i, 0x1); VkRhBD['IGAdt'](j, N); j++) {
            ans = VkRhBD['yHXYu'](ans, VkRhBD['hdOcU'](VkRhBD['DiJwE'](Number, line2_arr[i]), VkRhBD['CLabv'](Number, line2_arr[j])));
        }
    }
    console['log'](VkRhBD['GZxVb'](ans, 0x3b9aca07));
}
function numberSort(array) {
    array['sort'](f);
    return array;
}
var f = function (a, b) {
    return a - b;
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
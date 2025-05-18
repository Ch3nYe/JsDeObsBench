'use strict';
var a0_0x23d83c = a0_0x5c4b;
function a0_0x70d6() {
    var _0x2b0c5a = [
        'readFileSync',
        'split',
        'length'
    ];
    a0_0x70d6 = function () {
        return _0x2b0c5a;
    };
    return a0_0x70d6();
}
var lines = require('fs')[a0_0x23d83c(0x0)](0x0, 'utf8')[a0_0x23d83c(0x1)]('\x0a');
var str = lines[0x0];
var n = str[a0_0x23d83c(0x2)] - 0x1;
var dfs = (i, sum, order) => {
    if (i === n)
        return eval(order + str[n]) == 0x7 ? order + str[n] : '';
    var temp = dfs(i + 0x1, sum, order + str[i] + '+');
    return temp ? temp : dfs(i + 0x1, sum, order + str[i] + '-');
};
function a0_0x5c4b(jGzrMa, key) {
    var stringArray = a0_0x70d6();
    a0_0x5c4b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c4b(jGzrMa, key);
}
var ans = dfs(0x0, 0x0, '');
console['log'](ans ? ans + '=7' : '');
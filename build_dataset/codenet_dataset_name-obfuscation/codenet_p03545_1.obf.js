'use strict';
var lines = require('fs')['readFileSync'](0x0, 'utf8')['split']('\x0a');
var str = lines[0x0];
var n = str['length'] - 0x1;
var dfs = (_0x33651a, _0x549042, _0x1fe61c) => {
    if (_0x33651a === n)
        return eval(_0x1fe61c + str[n]) == 0x7 ? _0x1fe61c + str[n] : '';
    var _0x494734 = dfs(_0x33651a + 0x1, _0x549042, _0x1fe61c + str[_0x33651a] + '+');
    return _0x494734 ? _0x494734 : dfs(_0x33651a + 0x1, _0x549042, _0x1fe61c + str[_0x33651a] + '-');
};
var ans = dfs(0x0, 0x0, '');
console['log'](ans ? ans + '=7' : '');
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var str = input['replace'](/egg/g, 'E')['replace'](/chicken/g, 'C');
var ary = str['replace'](/EE/g, 'EAE')['replace'](/CC/g, 'CAC')['split']('A');
var ans = '';
ary['forEach'](function (_0x50c060) {
    if (ans['length'] < _0x50c060['length'])
        ans = _0x50c060;
});
console['log'](ans['slice'](-0x1) == 'E' ? 'egg' : 'chicken');
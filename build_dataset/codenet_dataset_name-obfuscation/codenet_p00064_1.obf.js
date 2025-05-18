var ans = 0x0;
require('fs')['readFileSync']('/dev/stdin', 'utf8')['match'](/\d+/g)['forEach'](function (_0x4545b8) {
    ans += parseInt(_0x4545b8, 0xa);
});
console['log'](ans);
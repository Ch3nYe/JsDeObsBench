require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/\s/)['map'](function (_0x51f3b8) {
    j = _0x51f3b8['split'](',');
    for (s = 0x0, m = n = 0xa; m--;)
        j[m] = s -= j[m];
    for (s *= j[0xb] / (-j[0xb] - j[n]); j[--n] >= -s;);
    console['log'](++n);
});
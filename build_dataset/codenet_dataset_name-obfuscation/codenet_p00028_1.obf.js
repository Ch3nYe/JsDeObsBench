for (a = [], b = 0x64; b--;)
    c = a[b] = 0x0;
require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a')['some'](function (_0x1ae685) {
    if (+_0x1ae685)
        a[+_0x1ae685]++, c = a[+_0x1ae685] > c ? a[+_0x1ae685] : c;
});
a['some'](function (_0x29eaf9, _0x2f49dd) {
    if (_0x29eaf9 == c)
        console['log'](_0x2f49dd);
});
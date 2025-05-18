function Main(_0x59ab4b) {
    _0x59ab4b = _0x59ab4b['split']('\x0a');
    t = _0x59ab4b[0x0]['split']('');
    s = _0x59ab4b[0x1]['split']('');
    var _0x17d948 = 0x0;
    for (var _0x358cd9 = 0x0; _0x358cd9 < s['length']; _0x358cd9++) {
        if (s[_0x358cd9] != t[_0x358cd9]) {
            _0x17d948 = _0x17d948 + 0x1;
        } else {
        }
    }
    console['log'](_0x17d948);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
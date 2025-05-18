require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](function (_0x50dc83) {
    f = function (_0xb08b05, _0x515ef5) {
        return _0x515ef5 - _0xb08b05;
    };
    a = [], c = _0x50dc83['split'](',')['sort'](f);
    c['map'](function (_0x5a2548) {
        a[_0x5a2548] ? a[_0x5a2548]++ : a[_0x5a2548] = 0x1;
    });
    a['sort'](f);
    l = a[0x0], n = a[0x1];
    console['log'](l == 0x4 ? 'four\x20card' : l == 0x3 ? n == 0x2 ? 'full\x20house' : 'three\x20card' : l == 0x2 ? n == 0x2 ? 'two\x20pair' : 'one\x20pair' : 0x4 == c[0x0] - c[0x4] || c[0x0] - c[0x3] == 0x3 && +c[0x4] == 0x1 ? 'straight' : 'null');
});
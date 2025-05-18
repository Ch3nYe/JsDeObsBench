'use strict';
let a = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
a['shift']();
let d = a['map'](_0x15ccae => {
    let _0x3f1cfd = _0x15ccae['split']('\x20')['map'](Number);
    return [
        _0x3f1cfd[0x0] - _0x3f1cfd[0x1],
        _0x3f1cfd[0x1] + _0x3f1cfd[0x0]
    ];
})['sort']((_0x2c2a7d, _0x2633a4) => {
    return _0x2c2a7d[0x1] - _0x2633a4[0x1];
});
let s = 0x0;
let P = Number['MIN_SAFE_INTEGER'];
for (let i = 0x0; i < d['length']; i++) {
    if (P <= d[i][0x0]) {
        s++;
        P = d[i][0x1];
    }
}
console['log'](s);
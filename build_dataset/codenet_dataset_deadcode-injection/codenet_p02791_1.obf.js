'use strict';
const a0_0x50f484 = a0_0x50c7;
function a0_0x50c7(hTfsBA, key) {
    const stringArray = a0_0x429f();
    a0_0x50c7 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x50c7(hTfsBA, key);
}
function a0_0x429f() {
    const _0x16a7d4 = [
        'trim',
        'split',
        'map',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x429f = function () {
        return _0x16a7d4;
    };
    return a0_0x429f();
}
function Main(s) {
    const _0x591c92 = a0_0x50c7;
    s = s[_0x591c92(0x0)]()[_0x591c92(0x1)]('\x0a');
    const n = Number(s[0x0]);
    const p = s[0x1][_0x591c92(0x0)]()[_0x591c92(0x1)]('\x20')[_0x591c92(0x2)](Number);
    let cnt = 0x0;
    for (let i = 0x1; i <= n; i++) {
        let flg = !![];
        let t = p['slice'](0x0, i);
        let x = 0x0;
        while (x < t[_0x591c92(0x3)] - 0x1) {
            if (t[x] < p[i - 0x1])
                flg = ![];
            x++;
        }
        if (flg)
            cnt++;
    }
    console[_0x591c92(0x4)](cnt);
}
Main(require('fs')[a0_0x50f484(0x5)](a0_0x50f484(0x6), a0_0x50f484(0x7)));
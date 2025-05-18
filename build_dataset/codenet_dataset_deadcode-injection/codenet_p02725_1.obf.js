'use strict';
const a0_0x192ed6 = a0_0x1cae;
function a0_0x1cae(hDBShd, key) {
    const stringArray = a0_0x548c();
    a0_0x1cae = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1cae(hDBShd, key);
}
function main(input) {
    const _0x371601 = a0_0x1cae;
    const args = input[_0x371601(0x0)]('\x0a')[0x0];
    const a = input['split']('\x0a')[0x1];
    let as = a[_0x371601(0x0)]('\x20');
    const K = Number(args[_0x371601(0x0)]('\x20')[0x0]);
    const N = Number(args[_0x371601(0x0)]('\x20')[0x1]);
    let ans = 0x0;
    const kh = Math[_0x371601(0x1)](K / 0x2);
    for (let i = 0x0; i < N; i++) {
        ans += Math[_0x371601(0x2)](0x0 - as[i]) > Math[_0x371601(0x2)](kh - as[i]) ? Math[_0x371601(0x2)](kh - as[i]) : Math[_0x371601(0x2)](0x0 - as[i]);
    }
    console[_0x371601(0x3)](ans);
}
main(require('fs')['readFileSync'](a0_0x192ed6(0x4), a0_0x192ed6(0x5)));
function a0_0x548c() {
    const _0x36fb32 = [
        'split',
        'floor',
        'abs',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x548c = function () {
        return _0x36fb32;
    };
    return a0_0x548c();
}
'use strict';
function main(s) {
    const hREQOm = {
        'CWTaa': function (callee, param1) {
            return callee(param1);
        },
        'DnDIH': function (x, y) {
            return x + y;
        },
        'OcHKF': function (x, y) {
            return x - y;
        }
    };
    s = s['split']('\x0a');
    const r = Number(s[0x0]);
    const g = hREQOm['CWTaa'](Number, s[0x1]);
    let ans = hREQOm['DnDIH'](g, hREQOm['OcHKF'](g, r));
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
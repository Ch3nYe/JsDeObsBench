'use strict';
function main(input) {
    const GlPiXN = {
        'NNHuG': function (callee, param1) {
            return callee(param1);
        },
        'WThEY': function (x, y) {
            return x < y;
        },
        'QoDKO': function (x, y) {
            return x - y;
        },
        'AvAkm': function (x, y) {
            return x - y;
        }
    };
    const args = input['split']('\x0a')[0x0];
    const a = input['split']('\x0a')[0x1];
    let as = a['split']('\x20');
    const K = GlPiXN['NNHuG'](Number, args['split']('\x20')[0x0]);
    const N = Number(args['split']('\x20')[0x1]);
    let ans = 0x0;
    const kh = Math['floor'](K / 0x2);
    for (let i = 0x0; GlPiXN['WThEY'](i, N); i++) {
        ans += Math['abs'](GlPiXN['QoDKO'](0x0, as[i])) > Math['abs'](GlPiXN['AvAkm'](kh, as[i])) ? Math['abs'](GlPiXN['AvAkm'](kh, as[i])) : Math['abs'](GlPiXN['QoDKO'](0x0, as[i]));
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
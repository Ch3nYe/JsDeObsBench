'use strict';
function main(input) {
    const SXAKJT = {
        'xLFjM': function (callee, param1) {
            return callee(param1);
        },
        'IcsOw': function (callee, param1) {
            return callee(param1);
        },
        'cwfEf': function (x, y) {
            return x + y;
        },
        'MwaUJ': function (x, y) {
            return x / y;
        }
    };
    const args = input['split']('\x0a');
    const N = SXAKJT['xLFjM'](parseInt, args[0x0]);
    const A = SXAKJT['IcsOw'](parseInt, args[0x1]);
    const B = SXAKJT['IcsOw'](parseInt, args[0x2]);
    const C = SXAKJT['xLFjM'](parseInt, args[0x3]);
    const D = parseInt(args[0x4]);
    const E = SXAKJT['xLFjM'](parseInt, args[0x5]);
    const station = [
        A,
        B,
        C,
        D,
        E
    ];
    let max_traf = Math['min'](...station);
    console['log'](SXAKJT['cwfEf'](Math['ceil'](SXAKJT['MwaUJ'](N, max_traf)), 0x4));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
'use strict';
function main(s) {
    const UhAXdt = {
        'WrJNw': function (callee, param1) {
            return callee(param1);
        }
    };
    const x = UhAXdt['WrJNw'](Number, s);
    const ans = x >= 0x4b0 ? 'ARC' : 'ABC';
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
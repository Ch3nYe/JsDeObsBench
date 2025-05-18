'use strict';
function Main(input) {
    const sEYutY = {
        'wJsJN': function (callee, param1) {
            return callee(param1);
        },
        'ofAsR': function (x, y) {
            return x <= y;
        }
    };
    const N = sEYutY['wJsJN'](Number, input);
    if (sEYutY['ofAsR'](N, 0x3e7)) {
        console['log']('ABC');
    } else {
        console['log']('ABD');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
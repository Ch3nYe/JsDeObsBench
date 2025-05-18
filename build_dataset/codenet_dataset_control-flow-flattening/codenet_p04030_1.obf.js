'use strict';
function Main(input) {
    const dljWdm = {
        'kMwNY': function (x, y) {
            return x === y;
        }
    };
    const tape = input['split']('\x0a')[0x0]['split']('');
    const result = [];
    for (const v of tape) {
        if (dljWdm['kMwNY'](v, 'B')) {
            result['pop']();
        } else {
            result['push'](v);
        }
    }
    console['log'](result['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
'use strict';
const main = arg => {
    const kLMLSm = {
        'NryNg': function (x, y) {
            return x - y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const K = parseInt(arg[0x0]['split']('\x20')[0x1]);
    console['log'](K === 0x1 ? 0x0 : kLMLSm['NryNg'](N, K));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
'use strict';
const main = arg => {
    const bakMTe = {
        'SAdJR': function (x, y) {
            return x - y;
        }
    };
    const input = arg['trim']()['split']('\x0a');
    const setItems = new Set(input);
    console['log'](bakMTe['SAdJR'](setItems['size'], 0x1));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
'use strict';
function main(input) {
    const mHQHER = {
        'RhJpp': function (x, y) {
            return x * y;
        },
        'IblQG': function (x, y) {
            return x - y;
        },
        'VhAJn': function (x, y) {
            return x * y;
        }
    };
    const lines = input['split']('\x0a');
    const N = lines[0x0]['split']('\x20')['map'](x => parseInt(x))[0x0];
    const M = lines[0x0]['split']('\x20')['map'](x => parseInt(x))[0x1];
    let result = (mHQHER['RhJpp'](mHQHER['IblQG'](N, M), 0x64) + mHQHER['VhAJn'](M, 0x76c)) * Math['pow'](0x2, M);
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
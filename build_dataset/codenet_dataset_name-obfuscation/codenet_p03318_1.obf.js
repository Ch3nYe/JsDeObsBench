'use strict';
function main(_0x5e2782) {
    const _0x143d69 = Number(_0x5e2782['split']('\x0a')[0x0]);
    const _0x564d44 = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '19',
        '29',
        '39',
        '49',
        '59',
        '69',
        '79',
        '89',
        '99',
        '199'
    ];
    const _0x25d58c = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19'
    ];
    let _0x40e30 = '99';
    for (let _0x422fc3 = 0x0; _0x422fc3 <= 0x14; _0x422fc3++) {
        for (let _0x18f54b = 0x0; _0x18f54b < _0x25d58c['length']; _0x18f54b++) {
            _0x564d44['push'](_0x25d58c[_0x18f54b] + _0x40e30);
        }
        _0x40e30 += '9';
    }
    const _0x1a51e7 = _0x564d44['slice'](0x0, _0x143d69)['join']('\x0a');
    console['log'](_0x1a51e7);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
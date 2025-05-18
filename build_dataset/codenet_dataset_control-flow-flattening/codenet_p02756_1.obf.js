function Main(input) {
    'use strict';
    const uAOIRi = {
        'xcrgS': function (callee, param1) {
            return callee(param1);
        },
        'bkCdg': function (x, y) {
            return x < y;
        },
        'VDbQW': function (x, y) {
            return x == y;
        },
        'cSvDj': function (x, y) {
            return x + y;
        },
        'aFayg': function (x, y) {
            return x == y;
        }
    };
    const temp = input['split']('\x0a');
    const s = temp['shift']()['split']();
    const q = uAOIRi['xcrgS'](parseInt, temp['shift']());
    const queries = temp['map'](query => query['split']('\x20'));
    let reverse_flag = 0x0;
    for (let i = 0x0; uAOIRi['bkCdg'](i, q); i++) {
        const query = queries[i];
        if (uAOIRi['VDbQW'](query['length'], 0x1))
            reverse_flag = uAOIRi['cSvDj'](reverse_flag, 0x1) % 0x2;
        else if (uAOIRi['VDbQW'](query['length'], 0x3)) {
            if (uAOIRi['aFayg'](reverse_flag + parseInt(query[0x1]) % 0x2, 0x0))
                s['push'](query[0x2]);
            else
                s['unshift'](query[0x2]);
        }
    }
    if (reverse_flag)
        console['log'](uAOIRi['cSvDj'](s['reverse']()['join'](''), '\x0a'));
    else
        console['log'](uAOIRi['cSvDj'](s['join'](''), '\x0a'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
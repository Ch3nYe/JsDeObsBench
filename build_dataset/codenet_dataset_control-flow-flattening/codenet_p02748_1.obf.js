'use strict';
const main = arg => {
    const rGELtD = {
        'fabNZ': function (callee, param1) {
            return callee(param1);
        },
        'MWSmR': function (callee, param1) {
            return callee(param1);
        },
        'WGzEU': function (x, y) {
            return x + y;
        },
        'GFoBv': function (x, y) {
            return x + y;
        },
        'qgURO': function (x, y) {
            return x + y;
        },
        'NJYOd': function (x, y) {
            return x - y;
        },
        'MiNYM': function (x, y) {
            return x <= y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const A = rGELtD['fabNZ'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const B = rGELtD['MWSmR'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const M = rGELtD['MWSmR'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const freezer = arg[0x1]['split']('\x20')['map'](n => parseInt(n));
    const renzi = arg[0x2]['split']('\x20')['map'](n => parseInt(n));
    const xyc = arg['slice'](0x3, rGELtD['WGzEU'](M, 0x4));
    const minFreeze = Math['min'](...freezer);
    const minRenzi = Math['min'](...renzi);
    let temp = rGELtD['GFoBv'](minFreeze, minRenzi);
    for (let i in xyc) {
        let x = rGELtD['MWSmR'](parseInt, xyc[i]['split']('\x20')[0x0]);
        let y = rGELtD['MWSmR'](parseInt, xyc[i]['split']('\x20')[0x1]);
        let c = rGELtD['fabNZ'](parseInt, xyc[i]['split']('\x20')[0x2]);
        let cost = rGELtD['qgURO'](freezer[rGELtD['NJYOd'](x, 0x1)], renzi[y - 0x1]) - c;
        if (rGELtD['MiNYM'](cost, temp)) {
            temp = cost;
        }
    }
    console['log'](temp);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
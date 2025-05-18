'use strict';
const a0_0x1c0003 = a0_0x59a5;
function a0_0x59a5(fjCZSd, key) {
    const stringArray = a0_0x19f8();
    a0_0x59a5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x59a5(fjCZSd, key);
}
const main = arg => {
    const _0x3ca89e = a0_0x59a5;
    arg = arg[_0x3ca89e(0x0)]()[_0x3ca89e(0x1)]('\x0a');
    const A = parseInt(arg[0x0][_0x3ca89e(0x1)]('\x20')[0x0]);
    const B = parseInt(arg[0x0][_0x3ca89e(0x1)]('\x20')[0x0]);
    const M = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const freezer = arg[0x1]['split']('\x20')[_0x3ca89e(0x2)](n => parseInt(n));
    const renzi = arg[0x2]['split']('\x20')[_0x3ca89e(0x2)](n => parseInt(n));
    const xyc = arg['slice'](0x3, M + 0x4);
    const minFreeze = Math['min'](...freezer);
    const minRenzi = Math['min'](...renzi);
    let temp = minFreeze + minRenzi;
    for (let i in xyc) {
        let x = parseInt(xyc[i][_0x3ca89e(0x1)]('\x20')[0x0]);
        let y = parseInt(xyc[i]['split']('\x20')[0x1]);
        let c = parseInt(xyc[i][_0x3ca89e(0x1)]('\x20')[0x2]);
        let cost = freezer[x - 0x1] + renzi[y - 0x1] - c;
        if (cost <= temp) {
            temp = cost;
        }
    }
    console[_0x3ca89e(0x3)](temp);
};
main(require('fs')[a0_0x1c0003(0x4)](a0_0x1c0003(0x5), a0_0x1c0003(0x6)));
function a0_0x19f8() {
    const _0x92b386 = [
        'trim',
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x19f8 = function () {
        return _0x92b386;
    };
    return a0_0x19f8();
}
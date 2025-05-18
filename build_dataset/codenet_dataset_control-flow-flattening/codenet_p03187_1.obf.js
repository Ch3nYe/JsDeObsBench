function main(input) {
    'use strict';
    const cqNelV = {
        'AVIqz': function (x, y) {
            return x === y;
        },
        'gBZcS': function (x, y) {
            return x >= y;
        },
        'GWvfw': function (x, y) {
            return x - y;
        },
        'QiGFZ': function (x, y) {
            return x + y;
        },
        'ponxc': function (x, y) {
            return x - y;
        },
        'sRGan': function (x, y) {
            return x <= y;
        },
        'iCkbv': function (x, y) {
            return x - y;
        },
        'VoiFd': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'GaaGk': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    const lines = input['split']('\x0a');
    const firstLine = lines[0x0]['split']('\x20')['map'](value => +value);
    const L = firstLine[0x0];
    const N = firstLine[0x1];
    let xn = lines['slice'](0x1)['filter'](value => value)['map'](value => +value);
    let costs = [];
    const search = (x, xn, sum) => {
        if (cqNelV['AVIqz'](xn['length'], 0x0)) {
            costs['push'](sum);
            return;
        }
        const leftDistance = cqNelV['gBZcS'](xn[0x0], x) ? cqNelV['GWvfw'](xn[0x0], x) : cqNelV['QiGFZ'](cqNelV['ponxc'](L, x), xn[0x0]);
        const rightDistance = cqNelV['sRGan'](xn[xn['length'] - 0x1], x) ? x - xn[cqNelV['ponxc'](xn['length'], 0x1)] : cqNelV['QiGFZ'](x, cqNelV['iCkbv'](L, xn[cqNelV['GWvfw'](xn['length'], 0x1)]));
        const left = xn['concat']();
        const leftX = left['shift']();
        const right = xn['concat']();
        const rightX = right['pop']();
        cqNelV['VoiFd'](search, leftX, left, cqNelV['QiGFZ'](sum, leftDistance));
        cqNelV['GaaGk'](search, rightX, right, cqNelV['QiGFZ'](sum, rightDistance));
    };
    cqNelV['VoiFd'](search, 0x0, xn, 0x0);
    console['log'](Math['max']['apply'](null, costs));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
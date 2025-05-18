'use strict';
function a0_0x4099() {
    const _0x30f0aa = [
        '6094110iKAphk',
        '13610sWONId',
        'push',
        '1020355BVvCcE',
        'map',
        'split',
        'slice',
        '/dev/stdin',
        '8hHfTsr',
        '179036HymGGn',
        'utf-8',
        'log',
        '16138PcvDap',
        'forEach',
        '14NmzMFT',
        '138975Rjnkmq',
        '390vmntVC',
        '549540ZmGwbz'
    ];
    a0_0x4099 = function () {
        return _0x30f0aa;
    };
    return a0_0x4099();
}
const a0_0x9b8229 = a0_0x3bbe;
(function (stringArrayFunction, comparisonValue) {
    const _0x48983c = a0_0x3bbe;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x48983c(0x10d)) / 0x1 * (-parseInt(_0x48983c(0x10f)) / 0x2) + parseInt(_0x48983c(0x110)) / 0x3 + -parseInt(_0x48983c(0x10a)) / 0x4 + parseInt(_0x48983c(0x114)) / 0x5 * (-parseInt(_0x48983c(0x111)) / 0x6) + -parseInt(_0x48983c(0x116)) / 0x7 + -parseInt(_0x48983c(0x109)) / 0x8 * (parseInt(_0x48983c(0x112)) / 0x9) + parseInt(_0x48983c(0x113)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4099, 0x1be50));
function a0_0x3bbe(djqJRp, key) {
    const stringArray = a0_0x4099();
    a0_0x3bbe = function (index, key) {
        index = index - 0x109;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3bbe(djqJRp, key);
}
const main = input => {
    const _0x14ffba = a0_0x3bbe;
    input = input[_0x14ffba(0x118)]('\x0a');
    const N = parseInt(input[0x0][_0x14ffba(0x118)]('\x20')[0x0]);
    const M = parseInt(input[0x0]['split']('\x20')[0x1]);
    let arr = input[_0x14ffba(0x119)](0x1, N + 0x1);
    let points = input['slice'](N + 0x1, M + N + 0x1);
    const parse = v => {
        const _0x2173d6 = _0x14ffba;
        let temp = v[_0x2173d6(0x118)]('\x20')[_0x2173d6(0x117)](vv => parseInt(vv));
        return {
            'x': temp[0x0],
            'y': temp[0x1]
        };
    };
    arr = arr['map'](parse);
    points = points[_0x14ffba(0x117)](parse);
    let indexArr = [];
    arr[_0x14ffba(0x10e)]((v, i) => {
        const _0x428096 = _0x14ffba;
        let minDist = 0x3b9aca00;
        let index = 0x0;
        points[_0x428096(0x10e)]((w, j) => {
            let dist = Math['abs'](v['x'] - w['x']) + Math['abs'](v['y'] - w['y']);
            if (dist < minDist) {
                minDist = dist;
                index = j;
            }
        });
        indexArr[_0x428096(0x115)](index);
    });
    indexArr[_0x14ffba(0x10e)](v => console[_0x14ffba(0x10c)](v + 0x1));
};
main(require('fs')['readFileSync'](a0_0x9b8229(0x11a), a0_0x9b8229(0x10b)));
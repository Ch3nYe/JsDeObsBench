'use strict';
const a0_0x32cf7a = a0_0x4ebe;
function a0_0x4ebe(XwKJGd, key) {
    const stringArray = a0_0x3ac7();
    a0_0x4ebe = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4ebe(XwKJGd, key);
}
const main = input => {
    const _0x26b8d8 = a0_0x4ebe;
    input = input[_0x26b8d8(0x0)]('\x0a');
    const N = parseInt(input[0x0][_0x26b8d8(0x0)]('\x20')[0x0]);
    const M = parseInt(input[0x0]['split']('\x20')[0x1]);
    let arr = input[_0x26b8d8(0x1)](0x1, N + 0x1);
    let points = input[_0x26b8d8(0x1)](N + 0x1, M + N + 0x1);
    const parse = v => {
        const _0xc2832d = a0_0x4ebe;
        let temp = v['split']('\x20')[_0xc2832d(0x2)](vv => parseInt(vv));
        return {
            'x': temp[0x0],
            'y': temp[0x1]
        };
    };
    arr = arr[_0x26b8d8(0x2)](parse);
    points = points[_0x26b8d8(0x2)](parse);
    let indexArr = [];
    arr['forEach']((v, i) => {
        const _0x57cab1 = a0_0x4ebe;
        let minDist = 0x3b9aca00;
        let index = 0x0;
        points[_0x57cab1(0x3)]((w, j) => {
            const _0x3a1ed6 = a0_0x4ebe;
            let dist = Math[_0x3a1ed6(0x4)](v['x'] - w['x']) + Math['abs'](v['y'] - w['y']);
            if (dist < minDist) {
                minDist = dist;
                index = j;
            }
        });
        indexArr[_0x57cab1(0x5)](index);
    });
    indexArr[_0x26b8d8(0x3)](v => console['log'](v + 0x1));
};
function a0_0x3ac7() {
    const _0x434fe6 = [
        'split',
        'slice',
        'map',
        'forEach',
        'abs',
        'push',
        '/dev/stdin',
        'utf-8'
    ];
    a0_0x3ac7 = function () {
        return _0x434fe6;
    };
    return a0_0x3ac7();
}
main(require('fs')['readFileSync'](a0_0x32cf7a(0x6), a0_0x32cf7a(0x7)));
'use strict';
function a0_0x5eb1(HepPln, key) {
    const stringArray = a0_0x1de3();
    a0_0x5eb1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5eb1(HepPln, key);
}
const a0_0xa7b62 = a0_0x5eb1;
const main = arg => {
    const _0x94962b = a0_0x5eb1;
    arg = arg[_0x94962b(0x0)]()[_0x94962b(0x1)]('\x0a');
    const N = parseInt(arg[0x0][_0x94962b(0x1)]('\x20')[0x0]);
    let H = parseInt(arg[0x0][_0x94962b(0x1)]('\x20')[0x1]);
    let ab = arg['slice'](0x1, N + 0x1)[_0x94962b(0x2)](n => n[_0x94962b(0x1)]('\x20')[_0x94962b(0x2)](l => parseInt(l)));
    ab[_0x94962b(0x3)]((a, b) => b[0x0] - a[0x0]);
    const aMax = ab[0x0][0x0];
    ab = ab[_0x94962b(0x3)]((a, b) => b[0x1] - a[0x1])[_0x94962b(0x4)](n => n[0x1] > aMax);
    let damage = 0x0;
    let throwAttack = 0x0;
    for (let i in ab) {
        H -= ab[i][0x1];
        throwAttack++;
        if (H <= 0x0) {
            console['log'](throwAttack);
            return;
        }
    }
    const directAttack = Math['ceil'](H / aMax);
    console['log'](throwAttack + directAttack);
};
main(require('fs')[a0_0xa7b62(0x5)](a0_0xa7b62(0x6), a0_0xa7b62(0x7)));
function a0_0x1de3() {
    const _0x2b4c4b = [
        'trim',
        'split',
        'map',
        'sort',
        'filter',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1de3 = function () {
        return _0x2b4c4b;
    };
    return a0_0x1de3();
}
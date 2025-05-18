'use strict';
const a0_0x229f6b = a0_0x469a;
function a0_0x469a(yDYIdK, key) {
    const stringArray = a0_0x32f9();
    a0_0x469a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x469a(yDYIdK, key);
}
function a0_0x32f9() {
    const _0x10326c = [
        'trim',
        'split',
        'map',
        'MqQAe',
        'keys',
        'length',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x32f9 = function () {
        return _0x10326c;
    };
    return a0_0x32f9();
}
const combi = function (n) {
    return n * (n - 0x1) / 0x2;
};
const main = arg => {
    const _0x265124 = a0_0x469a;
    const input = arg[_0x265124(0x0)]()[_0x265124(0x1)]('\x0a');
    const N = parseInt(input[0x0][_0x265124(0x1)]('\x20')[0x0]);
    const A = input[0x1][_0x265124(0x1)]('\x20')[_0x265124(0x2)](n => parseInt(n));
    let m = {};
    for (let i = 0x0; i < A['length']; i++) {
        if ('MqQAe' !== _0x265124(0x3)) {
            if (!m[A[i]])
                m[A[i]] = 0x1;
            else
                m[A[i]]++;
        } else {
            if (!m[A[i]])
                m[A[i]] = 0x1;
            else
                m[A[i]]++;
        }
    }
    let orgCnt = 0x0;
    let keys = Object[_0x265124(0x4)](m);
    for (let i = 0x0; i < keys[_0x265124(0x5)]; i++) {
        orgCnt = orgCnt + combi(m[keys[i]]);
    }
    for (let i = 0x0; i < A[_0x265124(0x5)]; i++) {
        let num = m[A[i]];
        const diff = combi(num) - combi(num - 0x1);
        console[_0x265124(0x6)](orgCnt - diff);
    }
};
main(require('fs')[a0_0x229f6b(0x7)]('/dev/stdin', a0_0x229f6b(0x8)));
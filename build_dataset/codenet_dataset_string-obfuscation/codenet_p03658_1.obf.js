'use strict';
const a0_0x1e475c = a0_0x4053;
(function (stringArrayFunction, comparisonValue) {
    const _0x25d28b = a0_0x4053;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x25d28b(0x1b9)) / 0x1 * (-parseInt(_0x25d28b(0x1af)) / 0x2) + parseInt(_0x25d28b(0x1b3)) / 0x3 + parseInt(_0x25d28b(0x1b5)) / 0x4 * (-parseInt(_0x25d28b(0x1ba)) / 0x5) + -parseInt(_0x25d28b(0x1a9)) / 0x6 * (parseInt(_0x25d28b(0x1b0)) / 0x7) + -parseInt(_0x25d28b(0x1ad)) / 0x8 * (parseInt(_0x25d28b(0x1ac)) / 0x9) + -parseInt(_0x25d28b(0x1b8)) / 0xa + parseInt(_0x25d28b(0x1ae)) / 0xb * (parseInt(_0x25d28b(0x1ab)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x592e, 0x49df2));
function a0_0x592e() {
    const _0x5a5ed2 = [
        '/dev/stdin',
        'readFileSync',
        '1259380kupotI',
        '539797kbqQLc',
        '115NdcYBK',
        'log',
        '18QSiTol',
        'utf8',
        '22848jPlvFc',
        '1706769OpINyl',
        '8oYBPtx',
        '5962uVdjTK',
        '2TzTHUM',
        '1302546cOxIPO',
        'sort',
        'split',
        '368241rDPxAE',
        'push',
        '90108gEdHSG'
    ];
    a0_0x592e = function () {
        return _0x5a5ed2;
    };
    return a0_0x592e();
}
function a0_0x4053(NxajBc, key) {
    const stringArray = a0_0x592e();
    a0_0x4053 = function (index, key) {
        index = index - 0x1a9;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4053(NxajBc, key);
}
const Main = input => {
    const _0x45f9db = a0_0x4053;
    let xs = input['trim']()['split']('\x0a');
    let N = Number(xs[0x0][_0x45f9db(0x1b2)]('\x20')[0x0]);
    let K = Number(xs[0x0][_0x45f9db(0x1b2)]('\x20')[0x1]);
    let l = [];
    for (let i = 0x0; i < N; i++) {
        l[_0x45f9db(0x1b4)](xs[0x1][_0x45f9db(0x1b2)]('\x20')[i]);
    }
    const compare = (b, a) => {
        return a - b;
    };
    l[_0x45f9db(0x1b1)](compare);
    let ans = 0x0;
    for (let i = 0x0; i < K; i++) {
        ans += Number(l[i]);
    }
    console[_0x45f9db(0x1bb)](ans);
};
Main(require('fs')[a0_0x1e475c(0x1b7)](a0_0x1e475c(0x1b6), a0_0x1e475c(0x1aa)));
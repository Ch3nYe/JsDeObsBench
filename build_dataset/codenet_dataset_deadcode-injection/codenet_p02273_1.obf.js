class Point {
    constructor(x, y) {
        this['x'] = x;
        this['y'] = y;
    }
    ['print']() {
        const _0x1cf884 = a0_0x7c53;
        console[_0x1cf884(0x0)](this['x'][_0x1cf884(0x1)](0x8) + '\x20' + this['y']['toFixed'](0x8));
    }
}
function a0_0xb643() {
    const _0x3266a4 = [
        'log',
        'toFixed',
        '/dev/stdin',
        'utf8',
        'trim',
        'print',
        'sin',
        'cos'
    ];
    a0_0xb643 = function () {
        return _0x3266a4;
    };
    return a0_0xb643();
}
(function main() {
    const _0x257360 = a0_0x7c53;
    const n = Number(require('fs')['readFileSync'](_0x257360(0x2), _0x257360(0x3))[_0x257360(0x4)]());
    let p1 = new Point(0x0, 0x0);
    let p2 = new Point(0x64, 0x0);
    p1['print']();
    kock(n, p1, p2);
    p2[_0x257360(0x5)]();
}());
function a0_0x7c53(aIKdUi, key) {
    const stringArray = a0_0xb643();
    a0_0x7c53 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x7c53(aIKdUi, key);
}
function kock(n, p1, p2) {
    const _0x57c3aa = a0_0x7c53;
    const sin60 = Math[_0x57c3aa(0x6)](0x3c * Math['PI'] / 0xb4);
    const cos60 = Math[_0x57c3aa(0x7)](0x3c * Math['PI'] / 0xb4);
    function innerFunc(n, p1, p2) {
        const _0x59aa18 = a0_0x7c53;
        if (!n)
            return;
        xDiff = p2['x'] - p1['x'];
        yDiff = p2['y'] - p1['y'];
        let s = new Point(p1['x'] + xDiff / 0x3, p1['y'] + yDiff / 0x3);
        let t = new Point(s['x'] + xDiff / 0x3, s['y'] + yDiff / 0x3);
        let u = new Point((t['x'] - s['x']) * cos60 - (t['y'] - s['y']) * sin60 + s['x'], (t['x'] - s['x']) * sin60 + (t['y'] - s['y']) * cos60 + s['y']);
        kock(n - 0x1, p1, s);
        s[_0x59aa18(0x5)]();
        kock(n - 0x1, s, u);
        u[_0x59aa18(0x5)]();
        kock(n - 0x1, u, t);
        t[_0x59aa18(0x5)]();
        kock(n - 0x1, t, p2);
    }
    kock = innerFunc;
    innerFunc(n, p1, p2);
}
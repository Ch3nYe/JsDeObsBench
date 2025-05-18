const a0_0x4fe342 = a0_0xeb9b;
(function (stringArrayFunction, comparisonValue) {
    const _0x384704 = a0_0xeb9b;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x384704(0x8b)) / 0x1 * (-parseInt(_0x384704(0x88)) / 0x2) + parseInt(_0x384704(0x90)) / 0x3 * (parseInt(_0x384704(0x85)) / 0x4) + parseInt(_0x384704(0x89)) / 0x5 * (parseInt(_0x384704(0x8d)) / 0x6) + -parseInt(_0x384704(0x81)) / 0x7 + -parseInt(_0x384704(0x83)) / 0x8 + parseInt(_0x384704(0x86)) / 0x9 + -parseInt(_0x384704(0x8a)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39db, 0x37dd7));
function main(input) {
    const _0x2d19bb = a0_0xeb9b;
    const lines = input[_0x2d19bb(0x87)]('\x0a');
    const K = 0x0 | lines[0x0]['split']('\x20')[0x1];
    let arr = new Int32Array(lines[0x1][_0x2d19bb(0x87)]('\x20'));
    let isOk = (t = 0x0, k = 0x0) => {
        const _0x10abf5 = _0x2d19bb;
        arr[_0x10abf5(0x82)](v => {
            let d = 0x0 | v / t;
            if (v === d * t) {
                d--;
            }
            k -= d;
        });
        return k >= 0x0;
    };
    let l = 0x0;
    let r = Math['max'](...arr);
    let mid = 0x0 | (r + l) * 0.5;
    let res = r;
    while (l < r) {
        if (isOk(mid, K)) {
            res = mid;
            r = mid - 0x1;
        } else {
            l = mid + 0x1;
        }
        mid = 0x0 | (r + l) * 0.5;
    }
    return res;
}
function a0_0xeb9b(Ctxyqk, key) {
    const stringArray = a0_0x39db();
    a0_0xeb9b = function (index, key) {
        index = index - 0x7f;
        let value = stringArray[index];
        return value;
    };
    return a0_0xeb9b(Ctxyqk, key);
}
exports[a0_0x4fe342(0x8c)] = main;
function Main(input) {
    const _0x550c05 = a0_0x4fe342;
    console[_0x550c05(0x80)](main(input[_0x550c05(0x7f)]()));
}
if (process['argv'][0x2] !== a0_0x4fe342(0x8f)) {
    Main(require('fs')[a0_0x4fe342(0x8e)](a0_0x4fe342(0x84), 'utf8'));
}
function a0_0x39db() {
    const _0x3be7de = [
        'trim',
        'log',
        '1105384HYkcjc',
        'forEach',
        '3294136AsEPvr',
        '/dev/stdin',
        '249608ULqDWs',
        '511938qHiDYc',
        'split',
        '66fFgzWh',
        '1630195YoioOy',
        '1669960VtpDUc',
        '8199tRddhJ',
        'main',
        '6bvWMYl',
        'readFileSync',
        'test',
        '15YjJAXX'
    ];
    a0_0x39db = function () {
        return _0x3be7de;
    };
    return a0_0x39db();
}
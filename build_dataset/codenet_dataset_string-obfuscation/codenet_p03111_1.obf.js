'use strict';
const a0_0x2a9862 = a0_0x3dfd;
(function (stringArrayFunction, comparisonValue) {
    const _0x10c7e8 = a0_0x3dfd;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x10c7e8(0x149)) / 0x1 + -parseInt(_0x10c7e8(0x157)) / 0x2 * (parseInt(_0x10c7e8(0x14d)) / 0x3) + -parseInt(_0x10c7e8(0x14f)) / 0x4 + -parseInt(_0x10c7e8(0x14c)) / 0x5 + parseInt(_0x10c7e8(0x159)) / 0x6 + -parseInt(_0x10c7e8(0x151)) / 0x7 * (parseInt(_0x10c7e8(0x154)) / 0x8) + -parseInt(_0x10c7e8(0x146)) / 0x9 * (-parseInt(_0x10c7e8(0x147)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x297f, 0xbb490));
function a0_0x297f() {
    const _0x867c61 = [
        '63aZOLXK',
        'split',
        'abs',
        '1254256YUAKTL',
        'log',
        'readFileSync',
        '195326JVjSlW',
        'trim',
        '8437494ZXisTM',
        'shift',
        'sort',
        '9nhkzKV',
        '38034040wnGgzx',
        'map',
        '729600HmWVvK',
        'utf8',
        'min',
        '2881530UBrbiU',
        '24AGfwZg',
        '/dev/stdin',
        '3777140mJEaAo',
        'pow'
    ];
    a0_0x297f = function () {
        return _0x867c61;
    };
    return a0_0x297f();
}
function a0_0x3dfd(RPWssH, key) {
    const stringArray = a0_0x297f();
    a0_0x3dfd = function (index, key) {
        index = index - 0x146;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3dfd(RPWssH, key);
}
function main(input) {
    const _0x1b21bf = a0_0x3dfd;
    input = input[_0x1b21bf(0x158)]()[_0x1b21bf(0x152)]('\x0a');
    let ABC = input[_0x1b21bf(0x15a)]()[_0x1b21bf(0x152)]('\x20')[_0x1b21bf(0x148)](v => Number(v));
    const N = ABC[_0x1b21bf(0x15a)]();
    input = input[_0x1b21bf(0x148)](v => Number(v))[_0x1b21bf(0x15b)]((a, b) => b - a);
    const INF = Math[_0x1b21bf(0x150)](0xa, 0x9);
    const dfs = (cur, a, b, c) => {
        const _0x266a8f = _0x1b21bf;
        if (cur === N) {
            if (Math[_0x266a8f(0x14b)](a, b, c) > 0x0) {
                return Math['abs'](a - ABC[0x0]) + Math[_0x266a8f(0x153)](b - ABC[0x1]) + Math[_0x266a8f(0x153)](c - ABC[0x2]) - 0x1e;
            }
            return INF;
        }
        return Math[_0x266a8f(0x14b)](dfs(cur + 0x1, a, b, c), dfs(cur + 0x1, a + input[cur], b, c) + 0xa, dfs(cur + 0x1, a, b + input[cur], c) + 0xa, dfs(cur + 0x1, a, b, c + input[cur]) + 0xa);
    };
    console[_0x1b21bf(0x155)](dfs(0x0, 0x0, 0x0, 0x0));
}
main(require('fs')[a0_0x2a9862(0x156)](a0_0x2a9862(0x14e), a0_0x2a9862(0x14a)));
'use strict';
const a0_0x383f7a = a0_0x4a6c;
function a0_0x3f5c() {
    const _0x5a7f21 = [
        'has',
        '6519887PIEJMJ',
        '3gCMhTE',
        '488976DupRff',
        '1281544DrHYmD',
        'log',
        '4232980vbNSJo',
        'delete',
        '/dev/stdin',
        '2003283AQWYMh',
        '296HdnKlO',
        '30lkOEbw',
        '52738DMuWdi',
        'readFileSync',
        '5GNHuhP',
        'add',
        '6829638IudaaM',
        'utf8'
    ];
    a0_0x3f5c = function () {
        return _0x5a7f21;
    };
    return a0_0x3f5c();
}
function a0_0x4a6c(lkHKBs, key) {
    const stringArray = a0_0x3f5c();
    a0_0x4a6c = function (index, key) {
        index = index - 0x19b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4a6c(lkHKBs, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5f42db = a0_0x4a6c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5f42db(0x1a6)) / 0x1 + -parseInt(_0x5f42db(0x1a7)) / 0x2 + parseInt(_0x5f42db(0x1a5)) / 0x3 * (-parseInt(_0x5f42db(0x1a9)) / 0x4) + parseInt(_0x5f42db(0x19f)) / 0x5 * (parseInt(_0x5f42db(0x1a1)) / 0x6) + parseInt(_0x5f42db(0x19d)) / 0x7 * (-parseInt(_0x5f42db(0x19b)) / 0x8) + parseInt(_0x5f42db(0x1ac)) / 0x9 + parseInt(_0x5f42db(0x19c)) / 0xa * (parseInt(_0x5f42db(0x1a4)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f5c, 0xa4204));
function main(input) {
    const _0x48dcc6 = a0_0x4a6c;
    input = input['split'](/\n/)['map'](v => ~~v);
    let set = new Set();
    for (let i = 0x1; i < input['length']; i++) {
        if (set[_0x48dcc6(0x1a3)](input[i])) {
            set[_0x48dcc6(0x1aa)](input[i]);
        } else {
            set[_0x48dcc6(0x1a0)](input[i]);
        }
    }
    console[_0x48dcc6(0x1a8)](set['size']);
}
main(require('fs')[a0_0x383f7a(0x19e)](a0_0x383f7a(0x1ab), a0_0x383f7a(0x1a2)));
'use strict';
const a0_0x4e9ed4 = a0_0x1aaa;
(function (stringArrayFunction, comparisonValue) {
    const _0x2e96d3 = a0_0x1aaa;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2e96d3(0x10e)) / 0x1 + -parseInt(_0x2e96d3(0x107)) / 0x2 + parseInt(_0x2e96d3(0x10f)) / 0x3 * (parseInt(_0x2e96d3(0x114)) / 0x4) + parseInt(_0x2e96d3(0x115)) / 0x5 + parseInt(_0x2e96d3(0x10c)) / 0x6 + parseInt(_0x2e96d3(0x110)) / 0x7 + parseInt(_0x2e96d3(0x116)) / 0x8 * (-parseInt(_0x2e96d3(0x10a)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4df3, 0xeae6d));
function a0_0x4df3() {
    const _0x27d62f = [
        '846995wiJdSn',
        '21gUtrZe',
        '3873051YGnslR',
        'join',
        'log',
        'eraser',
        '890684QQCYpl',
        '5427755xiCvYy',
        '8kUZvnC',
        'dreamer',
        'YES',
        '/dev/stdin',
        'utf-8',
        'readFileSync',
        'length',
        '2109126nbflUy',
        'dream',
        'erase',
        '23993757ZmsBkD',
        'slice',
        '3828942mbWQzX',
        'split'
    ];
    a0_0x4df3 = function () {
        return _0x27d62f;
    };
    return a0_0x4df3();
}
function Main(input) {
    const _0x4915b4 = a0_0x1aaa;
    const arr = [
        _0x4915b4(0x108),
        _0x4915b4(0x117),
        _0x4915b4(0x109),
        _0x4915b4(0x113)
    ];
    for (let i in arr) {
        arr[i] = reverse(arr[i]);
    }
    input = reverse(input);
    while (input['length'] > 0x0) {
        let flag = ![];
        for (let s of arr) {
            if (input[_0x4915b4(0x10b)](0x0, s[_0x4915b4(0x106)]) == s) {
                input = input['substr'](s[_0x4915b4(0x106)]);
                flag = !![];
            }
        }
        if (flag == ![])
            break;
    }
    if (input[_0x4915b4(0x106)] <= 0x0) {
        console[_0x4915b4(0x112)](_0x4915b4(0x118));
    } else {
        console[_0x4915b4(0x112)]('NO');
    }
}
function reverse(str) {
    const _0x6dbc33 = a0_0x1aaa;
    return str[_0x6dbc33(0x10d)]('')['reverse']()[_0x6dbc33(0x111)]('');
}
function a0_0x1aaa(NLbOLF, key) {
    const stringArray = a0_0x4df3();
    a0_0x1aaa = function (index, key) {
        index = index - 0x103;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1aaa(NLbOLF, key);
}
Main(require('fs')[a0_0x4e9ed4(0x105)](a0_0x4e9ed4(0x103), a0_0x4e9ed4(0x104)));
'use strict';
function a0_0x2059(HgGrAc, key) {
    var stringArray = a0_0x2b7e();
    a0_0x2059 = function (index, key) {
        index = index - 0x16d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2059(HgGrAc, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3fd5a4 = a0_0x2059;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3fd5a4(0x179)) / 0x1 + -parseInt(_0x3fd5a4(0x171)) / 0x2 + -parseInt(_0x3fd5a4(0x16e)) / 0x3 * (-parseInt(_0x3fd5a4(0x17a)) / 0x4) + -parseInt(_0x3fd5a4(0x173)) / 0x5 * (-parseInt(_0x3fd5a4(0x17b)) / 0x6) + -parseInt(_0x3fd5a4(0x17c)) / 0x7 + parseInt(_0x3fd5a4(0x176)) / 0x8 * (parseInt(_0x3fd5a4(0x175)) / 0x9) + -parseInt(_0x3fd5a4(0x16d)) / 0xa * (parseInt(_0x3fd5a4(0x17d)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2b7e, 0x29d6f));
function a0_0x2b7e() {
    var _0x195d34 = [
        '258XaUGRT',
        '1532818gnxnzA',
        '1287JGPdVk',
        '2780qJoFpZ',
        '106257CgqRGM',
        '/dev/stdin',
        'map',
        '237694OHAOzU',
        'split',
        '27355OELwzd',
        'utf8',
        '1818fiyPnK',
        '2512VBbXKV',
        'log',
        'readFileSync',
        '75730aGkBaO',
        '36leVuem'
    ];
    a0_0x2b7e = function () {
        return _0x195d34;
    };
    return a0_0x2b7e();
}
function myin() {
    var _0x5b4b66 = a0_0x2059;
    return require('fs')[_0x5b4b66(0x178)](_0x5b4b66(0x16f), _0x5b4b66(0x174))['trim']();
}
function myout(t) {
    var _0x3d62d3 = a0_0x2059;
    console[_0x3d62d3(0x177)](t);
}
function myconv(i, no) {
    var _0x102a72 = a0_0x2059;
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i[_0x102a72(0x172)]('\x20');
    case 0x3:
        return i['split']('\x0a');
    case 0x4:
        return i[_0x102a72(0x172)]('\x20')[_0x102a72(0x170)](a => Number(a));
    case 0x5:
        return i['split']('\x0a')[_0x102a72(0x170)](a => Number(a));
    case 0x6:
        return i['split']('');
    case 0x7:
        return i[_0x102a72(0x172)]('')[_0x102a72(0x170)](a => Number(a));
    }
}
function Main(input) {
    input = myconv(input, 0x3);
    var N = myconv(input[0x0], 0x1);
    var list = myconv(input[0x1], 0x4);
    var output = 0x0;
    for (var i = 0x0; i < N - 0x1; i++) {
        var mae = list[i];
        var ato = list[i + 0x1];
        if (mae == ato) {
            output++;
            list[i + 0x1] = -0x1;
        }
    }
    myout(output);
}
Main(myin());
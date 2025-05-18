var a0_0x35ce67 = a0_0x543b;
function a0_0x543b(aJHMTM, key) {
    var stringArray = a0_0x4156();
    a0_0x543b = function (index, key) {
        index = index - 0x10d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x543b(aJHMTM, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4e58ec = a0_0x543b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4e58ec(0x116)) / 0x1 + -parseInt(_0x4e58ec(0x119)) / 0x2 + -parseInt(_0x4e58ec(0x114)) / 0x3 + -parseInt(_0x4e58ec(0x11f)) / 0x4 + parseInt(_0x4e58ec(0x113)) / 0x5 * (parseInt(_0x4e58ec(0x115)) / 0x6) + parseInt(_0x4e58ec(0x10d)) / 0x7 * (parseInt(_0x4e58ec(0x117)) / 0x8) + parseInt(_0x4e58ec(0x11e)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4156, 0xd39eb));
var input = require('fs')[a0_0x35ce67(0x11b)](a0_0x35ce67(0x110), a0_0x35ce67(0x112));
function a0_0x4156() {
    var _0x3b2e30 = [
        '6381704RNifwi',
        '102137RvOBap',
        'reduce',
        'map',
        '/dev/stdin',
        'split',
        'utf8',
        '60BmhRZH',
        '5175441TLacbP',
        '321534kWhENY',
        '1217037nhRNWD',
        '280yBJslf',
        'sort',
        '305542iVAdej',
        'log',
        'readFileSync',
        'slice',
        'length',
        '39630807ApBrTc'
    ];
    a0_0x4156 = function () {
        return _0x3b2e30;
    };
    return a0_0x4156();
}
var lines = input[a0_0x35ce67(0x111)]('\x0a');
const parse = (s, sep) => {
    var _0x3fe020 = a0_0x35ce67;
    return s[_0x3fe020(0x111)](sep)[_0x3fe020(0x10f)](v => parseInt(v));
};
const split = (s, sep, result, keys) => {
    var _0x11688f = a0_0x35ce67;
    var arr = parse(s, sep);
    for (var i = 0x0; i < arr[_0x11688f(0x11d)]; i++) {
        result[keys[i]] = arr[i];
    }
};
var inp = {};
split(lines[0x0], '\x20', inp, [
    'x',
    'y',
    'a',
    'b',
    'c'
]);
var p = parse(lines[0x1], '\x20')[a0_0x35ce67(0x118)]((a, b) => b - a);
var q = parse(lines[0x2], '\x20')[a0_0x35ce67(0x118)]((a, b) => b - a);
var r = parse(lines[0x3], '\x20')[a0_0x35ce67(0x118)]((a, b) => b - a);
p = p['slice'](0x0, inp['x']);
q = q[a0_0x35ce67(0x11c)](0x0, inp['y']);
console[a0_0x35ce67(0x11a)](p['concat'](q, r)['sort']((a, b) => b - a)[a0_0x35ce67(0x11c)](0x0, inp['x'] + inp['y'])[a0_0x35ce67(0x10e)]((a, b) => a + b, 0x0));
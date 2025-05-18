function a0_0x17f1(iETTWi, key) {
    var stringArray = a0_0x27cf();
    a0_0x17f1 = function (index, key) {
        index = index - 0x1d1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x17f1(iETTWi, key);
}
var a0_0x2acd24 = a0_0x17f1;
(function (stringArrayFunction, comparisonValue) {
    var _0x7331c1 = a0_0x17f1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x7331c1(0x1d6)) / 0x1 * (-parseInt(_0x7331c1(0x1e1)) / 0x2) + -parseInt(_0x7331c1(0x1d9)) / 0x3 * (-parseInt(_0x7331c1(0x1e3)) / 0x4) + -parseInt(_0x7331c1(0x1de)) / 0x5 + -parseInt(_0x7331c1(0x1d7)) / 0x6 * (-parseInt(_0x7331c1(0x1d3)) / 0x7) + -parseInt(_0x7331c1(0x1e0)) / 0x8 + parseInt(_0x7331c1(0x1d8)) / 0x9 * (-parseInt(_0x7331c1(0x1dc)) / 0xa) + parseInt(_0x7331c1(0x1da)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x27cf, 0xefba7));
const main = input => {
    var _0x5b902a = a0_0x17f1;
    var K = input['trim']()['split']('\x0a')[0x0][_0x5b902a(0x1e5)]('\x20')[0x3];
    var x = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x0];
    var y = input[_0x5b902a(0x1d4)]()['split']('\x0a')[0x0][_0x5b902a(0x1e5)]('\x20')[0x1];
    var z = input[_0x5b902a(0x1d4)]()[_0x5b902a(0x1e5)]('\x0a')[0x0][_0x5b902a(0x1e5)]('\x20')[0x2];
    var a = input['trim']()[_0x5b902a(0x1e5)]('\x0a')[0x1][_0x5b902a(0x1e5)]('\x20')[_0x5b902a(0x1d2)]((a, b) => b - a)['map'](v => v - 0x0);
    var b = input[_0x5b902a(0x1d4)]()[_0x5b902a(0x1e5)]('\x0a')[0x2]['split']('\x20')[_0x5b902a(0x1d2)]((a, b) => b - a)[_0x5b902a(0x1e4)](v => v - 0x0);
    var c = input[_0x5b902a(0x1d4)]()[_0x5b902a(0x1e5)]('\x0a')[0x3]['split']('\x20')[_0x5b902a(0x1d2)]((a, b) => b - a)[_0x5b902a(0x1e4)](v => v - 0x0);
    var anss = [];
    var idxa = 0x0, idxb = 0x0, idxc = 0x0;
    var min = 0x0;
    for (var i = 0x0; i < x; i++) {
        for (var j = 0x0; j < y; j++) {
            for (var k = 0x0; k < z; k++) {
                if (i * j * k > K)
                    break;
                var sum = a[i] + b[j] + c[k];
                anss[_0x5b902a(0x1df)](sum);
            }
        }
    }
    console[_0x5b902a(0x1e2)](anss[_0x5b902a(0x1d2)]((a, b) => b - a)['filter']((v, i) => i < K)[_0x5b902a(0x1d5)]('\x0a'));
};
function a0_0x27cf() {
    var _0x408be7 = [
        '/dev/stdin',
        'sort',
        '36799tRcBQg',
        'trim',
        'join',
        '1zVwNHO',
        '1680AfwVnN',
        '7416405jYjGgM',
        '111DfFRhV',
        '28437596rgeflL',
        'readFileSync',
        '10WztQGV',
        'UTF-8',
        '7013275rfmKaq',
        'push',
        '2805112lttitJ',
        '1358756cIgPgK',
        'log',
        '19616ymtDoi',
        'map',
        'split'
    ];
    a0_0x27cf = function () {
        return _0x408be7;
    };
    return a0_0x27cf();
}
main(require('fs')[a0_0x2acd24(0x1db)](a0_0x2acd24(0x1d1), a0_0x2acd24(0x1dd)));
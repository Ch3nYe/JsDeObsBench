var a0_0x3a439b = a0_0x2252;
(function (stringArrayFunction, comparisonValue) {
    var _0x1bc190 = a0_0x2252;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1bc190(0x7f)) / 0x1 * (-parseInt(_0x1bc190(0x74)) / 0x2) + -parseInt(_0x1bc190(0x75)) / 0x3 + parseInt(_0x1bc190(0x80)) / 0x4 + parseInt(_0x1bc190(0x76)) / 0x5 + -parseInt(_0x1bc190(0x7b)) / 0x6 * (-parseInt(_0x1bc190(0x79)) / 0x7) + -parseInt(_0x1bc190(0x72)) / 0x8 + -parseInt(_0x1bc190(0x70)) / 0x9 * (-parseInt(_0x1bc190(0x7d)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3efc, 0x44ab8));
function main(input) {
    var _0x413b22 = a0_0x2252;
    var N = input[0x0][_0x413b22(0x71)]('\x20')[0x0] - 0x0;
    var M = input[0x0][_0x413b22(0x71)]('\x20')[0x1] - 0x0;
    var list = input[0x1]['split']('\x20')[_0x413b22(0x78)](v => v / 0x2);
    var l = lcm(list);
    console[_0x413b22(0x81)](Math['trunc'](M / l) - Math[_0x413b22(0x7e)](M / (l * 0x2)));
}
function a0_0x2252(YJWwGt, key) {
    var stringArray = a0_0x3efc();
    a0_0x2252 = function (index, key) {
        index = index - 0x70;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2252(YJWwGt, key);
}
function lcm(args) {
    var _0x248c59 = a0_0x2252;
    var a = args;
    var g = (n, m) => m ? g(m, n % m) : n;
    var l = (n, m) => n * m / g(n, m);
    var ans = a[0x0];
    for (var i = 0x1; i < a[_0x248c59(0x73)]; i++) {
        ans = l(ans, a[i]);
    }
    return ans;
}
main(require('fs')['readFileSync'](a0_0x3a439b(0x77), a0_0x3a439b(0x7a))[a0_0x3a439b(0x7c)]()[a0_0x3a439b(0x71)]('\x0a'));
function a0_0x3efc() {
    var _0x573696 = [
        'map',
        '20048JJXhPV',
        'utf8',
        '576vvrfRp',
        'trim',
        '242300EkgXrr',
        'trunc',
        '132140QjAxBu',
        '191748PlkMgF',
        'log',
        '63nudiaq',
        'split',
        '733024oQUeRH',
        'length',
        '6dgDUMw',
        '387423GhtOIj',
        '2029850qEmmas',
        '/dev/stdin'
    ];
    a0_0x3efc = function () {
        return _0x573696;
    };
    return a0_0x3efc();
}
var a0_0x53a68f = a0_0x3763;
function a0_0x3763(HDJUTj, key) {
    var stringArray = a0_0x126e();
    a0_0x3763 = function (index, key) {
        index = index - 0x78;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3763(HDJUTj, key);
}
function a0_0x126e() {
    var _0x5cb310 = [
        '/dev/stdin',
        '583ZQAPes',
        '6yQfisT',
        '3rLIhKW',
        '1834126GcqKpm',
        '249596NNnfLZ',
        '23470BgUbwD',
        '25AFxMGP',
        'push',
        '9rQtUzP',
        '1598155dTYHwK',
        'readFileSync',
        'join',
        'log',
        'map',
        'split',
        '133872YTVQvd',
        'length',
        '1831540KBzuXM',
        '1852200YHQeKi'
    ];
    a0_0x126e = function () {
        return _0x5cb310;
    };
    return a0_0x126e();
}
(function (stringArrayFunction, comparisonValue) {
    var _0xb4ae78 = a0_0x3763;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xb4ae78(0x80)) / 0x1 * (-parseInt(_0xb4ae78(0x7f)) / 0x2) + parseInt(_0xb4ae78(0x7c)) / 0x3 * (parseInt(_0xb4ae78(0x7e)) / 0x4) + -parseInt(_0xb4ae78(0x83)) / 0x5 + -parseInt(_0xb4ae78(0x7b)) / 0x6 * (parseInt(_0xb4ae78(0x7d)) / 0x7) + parseInt(_0xb4ae78(0x78)) / 0x8 + parseInt(_0xb4ae78(0x82)) / 0x9 * (parseInt(_0xb4ae78(0x8b)) / 0xa) + parseInt(_0xb4ae78(0x7a)) / 0xb * (parseInt(_0xb4ae78(0x89)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x126e, 0x2f32a));
function Main(input) {
    var _0x124faa = a0_0x3763;
    a = input['split']('\x0a');
    b = a[0x0]['split']('\x20')['map'](Number);
    c = a[0x1][_0x124faa(0x88)]('\x20')[_0x124faa(0x87)](Number);
    N = b[0x0], K = b[0x1], r = 0x0;
    while (c[_0x124faa(0x8a)] > 0x1) {
        r++;
        d = [];
        for (i = 0x0; i < K; i++) {
            d[_0x124faa(0x81)](c[i]);
        }
        for (i = 0x0; i < K; i++) {
            if (d['sort']()[0x0] !== c[i]) {
                c[i] = '';
            }
        }
        c = c[_0x124faa(0x85)]('')[_0x124faa(0x88)]('')[_0x124faa(0x87)](Number);
    }
    console[_0x124faa(0x86)](r);
}
Main(require('fs')[a0_0x53a68f(0x84)](a0_0x53a68f(0x79), 'utf8'));
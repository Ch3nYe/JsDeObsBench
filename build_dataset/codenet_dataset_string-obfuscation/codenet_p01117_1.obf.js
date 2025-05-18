var a0_0x3bcb42 = a0_0x7aeb;
function a0_0x7aeb(MgzacI, key) {
    var stringArray = a0_0x1e1c();
    a0_0x7aeb = function (index, key) {
        index = index - 0x72;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7aeb(MgzacI, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x53a6c2 = a0_0x7aeb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x53a6c2(0x7a)) / 0x1 * (parseInt(_0x53a6c2(0x7e)) / 0x2) + -parseInt(_0x53a6c2(0x79)) / 0x3 * (-parseInt(_0x53a6c2(0x7d)) / 0x4) + parseInt(_0x53a6c2(0x76)) / 0x5 + -parseInt(_0x53a6c2(0x81)) / 0x6 + parseInt(_0x53a6c2(0x77)) / 0x7 + parseInt(_0x53a6c2(0x73)) / 0x8 + parseInt(_0x53a6c2(0x7b)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e1c, 0xeba9f));
var input = require('fs')[a0_0x3bcb42(0x7f)](a0_0x3bcb42(0x82), a0_0x3bcb42(0x78));
var arr = input[a0_0x3bcb42(0x80)]()['split']('\x0a');
while (!![]) {
    var [n, m] = arr[a0_0x3bcb42(0x7c)]()[a0_0x3bcb42(0x72)]('\x20')['map'](Number);
    if (n == 0x0 && m == 0x0)
        break;
    var h = [];
    for (var i = 0x0; i < n; i++)
        h[i] = 0x0;
    for (var i = 0x0; i < m; i++) {
        var p = arr['shift']()[a0_0x3bcb42(0x72)]('\x20')[a0_0x3bcb42(0x75)](Number);
        h = p[a0_0x3bcb42(0x75)]((v, i) => h[i] + v);
    }
    console['log'](Math[a0_0x3bcb42(0x74)](...h));
}
function a0_0x1e1c() {
    var _0x25e055 = [
        'shift',
        '244kfdymK',
        '2PczJmY',
        'readFileSync',
        'trim',
        '5115600nXVTiW',
        '/dev/stdin',
        'split',
        '1759000TibRqY',
        'max',
        'map',
        '300860TrMODH',
        '3366993PEXIZy',
        'utf8',
        '26526wnjzWp',
        '646394YpsNOH',
        '10474785IxJLJu'
    ];
    a0_0x1e1c = function () {
        return _0x25e055;
    };
    return a0_0x1e1c();
}
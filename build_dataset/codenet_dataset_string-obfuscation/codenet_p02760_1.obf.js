var a0_0x5e4f39 = a0_0x483c;
(function (stringArrayFunction, comparisonValue) {
    var _0x4d9f01 = a0_0x483c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4d9f01(0x7b)) / 0x1 + -parseInt(_0x4d9f01(0x7a)) / 0x2 + -parseInt(_0x4d9f01(0x81)) / 0x3 * (-parseInt(_0x4d9f01(0x82)) / 0x4) + -parseInt(_0x4d9f01(0x7e)) / 0x5 * (parseInt(_0x4d9f01(0x7c)) / 0x6) + parseInt(_0x4d9f01(0x86)) / 0x7 * (parseInt(_0x4d9f01(0x88)) / 0x8) + -parseInt(_0x4d9f01(0x85)) / 0x9 + parseInt(_0x4d9f01(0x83)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4a54, 0x534ff));
function a0_0x483c(gmSoWi, key) {
    var stringArray = a0_0x4a54();
    a0_0x483c = function (index, key) {
        index = index - 0x78;
        var value = stringArray[index];
        return value;
    };
    return a0_0x483c(gmSoWi, key);
}
function Main(input) {
    var _0x26ff1f = a0_0x483c;
    var n = input[0x3];
    var ansmap = [
        [
            ![],
            ![],
            ![]
        ],
        [
            ![],
            ![],
            ![]
        ],
        [
            ![],
            ![],
            ![]
        ]
    ];
    var chk = [];
    for (var i = 0x4; i < n + 0x4; i++) {
        chk[_0x26ff1f(0x7f)](input[i] - 0x0);
    }
    var map = [
        input[0x0][_0x26ff1f(0x79)]('\x20')[_0x26ff1f(0x80)](v => chk[_0x26ff1f(0x84)](v - 0x0) >= 0x0),
        input[0x1][_0x26ff1f(0x79)]('\x20')[_0x26ff1f(0x80)](v => chk['indexOf'](v - 0x0) >= 0x0),
        input[0x2][_0x26ff1f(0x79)]('\x20')[_0x26ff1f(0x80)](v => chk[_0x26ff1f(0x84)](v - 0x0) >= 0x0)
    ];
    var flg = ![];
    if (map[0x0][0x0] && map[0x0][0x1] && map[0x0][0x2])
        flg = !![];
    if (map[0x1][0x0] && map[0x1][0x1] && map[0x1][0x2])
        flg = !![];
    if (map[0x2][0x0] && map[0x2][0x1] && map[0x2][0x2])
        flg = !![];
    if (map[0x0][0x0] && map[0x1][0x0] && map[0x2][0x0])
        flg = !![];
    if (map[0x0][0x1] && map[0x1][0x1] && map[0x2][0x1])
        flg = !![];
    if (map[0x0][0x2] && map[0x1][0x2] && map[0x2][0x2])
        flg = !![];
    if (map[0x0][0x0] && map[0x1][0x1] && map[0x2][0x2])
        flg = !![];
    if (map[0x0][0x2] && map[0x1][0x1] && map[0x2][0x0])
        flg = !![];
    console[_0x26ff1f(0x7d)](flg ? _0x26ff1f(0x87) : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')[a0_0x5e4f39(0x78)]()[a0_0x5e4f39(0x79)]('\x0a'));
function a0_0x4a54() {
    var _0x436a41 = [
        '599924DGiTfV',
        '3787870NPeptl',
        'indexOf',
        '2788659DSVoee',
        '70Yenqhg',
        'Yes',
        '71080qEqeJY',
        'trim',
        'split',
        '639094tFohWS',
        '204627HzAOfn',
        '9486JtIVMY',
        'log',
        '5fkqAHg',
        'push',
        'map',
        '6oqkIgc'
    ];
    a0_0x4a54 = function () {
        return _0x436a41;
    };
    return a0_0x4a54();
}
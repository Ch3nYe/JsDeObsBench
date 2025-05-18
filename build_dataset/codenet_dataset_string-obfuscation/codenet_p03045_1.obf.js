var a0_0x4030ca = a0_0x5380;
(function (stringArrayFunction, comparisonValue) {
    var _0x303287 = a0_0x5380;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x303287(0xc8)) / 0x1 * (parseInt(_0x303287(0xc9)) / 0x2) + parseInt(_0x303287(0xcb)) / 0x3 + -parseInt(_0x303287(0xc7)) / 0x4 + parseInt(_0x303287(0xbf)) / 0x5 * (parseInt(_0x303287(0xc4)) / 0x6) + -parseInt(_0x303287(0xbc)) / 0x7 + -parseInt(_0x303287(0xc0)) / 0x8 + -parseInt(_0x303287(0xc1)) / 0x9 * (-parseInt(_0x303287(0xcc)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1893, 0x20567));
function Main(input) {
    var _0x487ae4 = a0_0x5380;
    input = input['split']('\x0a');
    if (input[input[_0x487ae4(0xca)] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const M = input[0x0][_0x487ae4(0xc6)]('\x20')[0x1] - 0x0;
    var parent = new Array(N + 0x1)[_0x487ae4(0xbe)](0x0);
    for (var i = 0x1; i <= M; i++) {
        if (root(input[i]['split']('\x20')[0x0] - 0x0) !== root(input[i][_0x487ae4(0xc6)]('\x20')[0x1] - 0x0)) {
            parent[root(input[i][_0x487ae4(0xc6)]('\x20')[0x1] - 0x0)] = root(input[i][_0x487ae4(0xc6)]('\x20')[0x0]) - 0x0;
        }
    }
    console[_0x487ae4(0xc2)](parent['reduce']((acc, cur) => {
        return acc + (cur === 0x0 ? 0x1 : 0x0);
    }, 0x0) - 0x1);
    function root(node) {
        var _0x5026b8 = _0x487ae4;
        var array = [];
        var point = node;
        while (parent[point] !== 0x0) {
            array[_0x5026b8(0xbd)](point);
            point = parent[point];
        }
        array[_0x5026b8(0xc3)](e => {
            parent[e] = point;
        });
        return point;
    }
}
function a0_0x1893() {
    var _0x303608 = [
        '317940UPoBhS',
        'readFileSync',
        'split',
        '533908mFjNfY',
        '1CBRAyg',
        '411296qzazzg',
        'length',
        '687279IhLaiI',
        '2418710ddtsiH',
        '813631xiqmuh',
        'push',
        'fill',
        '15gIlhHr',
        '336968VeWTcd',
        '9BQypPS',
        'log',
        'forEach'
    ];
    a0_0x1893 = function () {
        return _0x303608;
    };
    return a0_0x1893();
}
function a0_0x5380(bagKqu, key) {
    var stringArray = a0_0x1893();
    a0_0x5380 = function (index, key) {
        index = index - 0xbc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5380(bagKqu, key);
}
Main(require('fs')[a0_0x4030ca(0xc5)]('/dev/stdin', 'utf8'));
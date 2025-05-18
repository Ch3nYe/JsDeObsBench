function a0_0x2f80(hKEFCw, key) {
    var stringArray = a0_0x19a8();
    a0_0x2f80 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f80(hKEFCw, key);
}
var a0_0x3ab46a = a0_0x2f80;
function a0_0x19a8() {
    var _0x35c2f4 = [
        'split',
        'black',
        'blue',
        'yellow',
        'white',
        'length',
        'substr',
        'pow',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x19a8 = function () {
        return _0x35c2f4;
    };
    return a0_0x19a8();
}
(function (input) {
    var _0x463350 = a0_0x2f80;
    var lines = input[_0x463350(0x0)]('\x0a');
    var colors = [
        [
            _0x463350(0x1),
            0x0,
            0x0,
            0x0
        ],
        [
            _0x463350(0x2),
            0x0,
            0x0,
            0xff
        ],
        [
            'lime',
            0x0,
            0xff,
            0x0
        ],
        [
            'aqua',
            0x0,
            0xff,
            0x0
        ],
        [
            'red',
            0xff,
            0x0,
            0x0
        ],
        [
            'fuchsia',
            0xff,
            0x0,
            0xff
        ],
        [
            _0x463350(0x3),
            0xff,
            0xff,
            0x0
        ],
        [
            _0x463350(0x4),
            0xff,
            0xff,
            0xff
        ]
    ];
    for (var i = 0x0; i < lines[_0x463350(0x5)]; ++i) {
        if (lines[i][0x0] === '#') {
            var best_color;
            var min_d = 0x3 * 0x100 * 0x100 + 0x1;
            var r = parseInt(lines[i][_0x463350(0x6)](0x1, 0x2), 0x10);
            var g = parseInt(lines[i]['substr'](0x3, 0x2), 0x10);
            var b = parseInt(lines[i][_0x463350(0x6)](0x5, 0x2), 0x10);
            for (var j = 0x0; j < colors[_0x463350(0x5)]; ++j) {
                var d = Math[_0x463350(0x7)](r - colors[j][0x1], 0x2) + Math['pow'](g - colors[j][0x2], 0x2) + Math[_0x463350(0x7)](b - colors[j][0x3], 0x2);
                if (d < min_d) {
                    min_d = d;
                    best_color = colors[j][0x0];
                }
            }
            console[_0x463350(0x8)](best_color);
        }
    }
}(require('fs')['readFileSync'](a0_0x3ab46a(0x9), a0_0x3ab46a(0xa))['trim']()));
(function (input) {
    var _0x48c0d3 = (function () {
        var firstCall = !![];
        return function (context, fn) {
            var rfn = firstCall ? function () {
                if (fn) {
                    var res = fn['apply'](context, arguments);
                    fn = null;
                    return res;
                }
            } : function () {
            };
            firstCall = ![];
            return rfn;
        };
    }());
    (function () {
        _0x48c0d3(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x55a857('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x55a857();
            }
        })();
    }());
    var lines = input['split']('\x0a');
    var colors = [
        [
            'black',
            0x0,
            0x0,
            0x0
        ],
        [
            'blue',
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
            'yellow',
            0xff,
            0xff,
            0x0
        ],
        [
            'white',
            0xff,
            0xff,
            0xff
        ]
    ];
    for (var i = 0x0; i < lines['length']; ++i) {
        if (lines[i][0x0] === '#') {
            var best_color;
            var min_d = 0x3 * 0x100 * 0x100 + 0x1;
            var r = parseInt(lines[i]['substr'](0x1, 0x2), 0x10);
            var g = parseInt(lines[i]['substr'](0x3, 0x2), 0x10);
            var b = parseInt(lines[i]['substr'](0x5, 0x2), 0x10);
            for (var j = 0x0; j < colors['length']; ++j) {
                var d = Math['pow'](r - colors[j][0x1], 0x2) + Math['pow'](g - colors[j][0x2], 0x2) + Math['pow'](b - colors[j][0x3], 0x2);
                if (d < min_d) {
                    min_d = d;
                    best_color = colors[j][0x0];
                }
            }
            console['log'](best_color);
        }
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()));
function _0x55a857(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}
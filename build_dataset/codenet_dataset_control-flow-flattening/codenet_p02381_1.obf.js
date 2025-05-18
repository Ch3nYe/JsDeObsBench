'use strict';
(function (stdin) {
    var uaioJh = {
        'SEhPG': function (x, y) {
            return x / y;
        },
        'vzPhw': function (x, y) {
            return x - y;
        }
    };
    var lines = stdin['toString']();
    var re = /\w+\n[\w\s]*?\n/g;
    var result = function (data) {
        var AXRlFC = {
            'XDcrX': function (x, y) {
                return uaioJh['vzPhw'](x, y);
            }
        };
        return data['map'](stdev)['join']('\x0a');
        function stdev(scores) {
            var count = scores['length'];
            var mean = uaioJh['SEhPG'](scores['reduce'](sum), count);
            return Math['sqrt'](uaioJh['SEhPG'](scores['map'](function (v) {
                return Math['pow'](AXRlFC['XDcrX'](v, mean), 0x2);
            })['reduce'](sum), count))['toFixed'](0x8);
        }
        function sum(a, b) {
            return a + b;
        }
    }(lines['match'](re)['map'](function (v) {
        return v['split']('\x0a')[0x1]['split']('\x20')['slice'](0x0, v['split']('\x0a')[0x0])['map'](Number);
    }));
    console['log'](result);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
q = [];
require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['some'](function (i) {
    var MziHON = {
        'mIBpc': function (x, y) {
            return x != y;
        }
    };
    MziHON['mIBpc'](i, 0x0) ? q['push'](i) : console['log'](q['pop']());
});
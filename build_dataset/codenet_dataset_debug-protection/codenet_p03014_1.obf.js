var a0_0x3d5590 = (function () {
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
    a0_0x3d5590(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x22703b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x22703b();
        }
    })();
}());
const main = inputs => {
    var H = inputs[0x0]['split']('\x20')[0x0] - 0x0;
    var W = inputs[0x0]['split']('\x20')[0x1] - 0x0;
    var map = {};
    var ymap = {};
    var tmap = {};
    var keys = [];
    for (var h = 0x0; h < H; h++) {
        map[h] = inputs[h + 0x1];
        for (var w = 0x0; w < W; w++) {
            var ukey = h - 0x1 + '_' + w;
            var lkey = h + '_' + (w - 0x1);
            var key = h + '_' + w;
            if (map[h][w] == '#') {
            } else {
                keys['push'](key);
                if (ymap[lkey]) {
                    ymap[key] = ymap[lkey];
                    ymap[key]['n']++;
                } else {
                    ymap[key] = { 'n': 0x1 };
                }
                if (tmap[ukey]) {
                    tmap[key] = tmap[ukey];
                    tmap[key]['n']++;
                } else {
                    tmap[key] = { 'n': 0x1 };
                }
            }
        }
    }
    var ans = 0x0;
    var key;
    for (var i = keys['length'] - 0x1; i >= 0x0; i--) {
        key = keys[i];
        ans = Math['max'](ans, tmap[key]['n'] + ymap[key]['n'] - 0x1);
        if (ans == H + W - 0x1)
            break;
    }
    console['log'](ans);
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));
function a0_0x22703b(ret) {
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
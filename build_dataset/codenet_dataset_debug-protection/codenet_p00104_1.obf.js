var a0_0x29d750 = (function () {
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
    a0_0x29d750(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x49447b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x49447b();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    main(chunk['trim']());
});
function main(chunk) {
    var lines = chunk['split']('\x0a');
    for (var n = 0x0; n < lines['length'] - 0x1;) {
        var H = Number(lines[n]['split']('\x20')[0x0]);
        var W = Number(lines[n]['split']('\x20')[0x1]);
        var map = [];
        n++;
        for (var i = 0x0; i < H; i++) {
            map[i] = lines[n]['split']('');
            n++;
        }
        console['log'](calc(map, 0x0, 0x0));
    }
}
function calc(map, h, w) {
    if (map[h][w] == '.') {
        return w + '\x20' + h;
    }
    if (map[h][w] == '1') {
        return 'LOOP';
    }
    switch (map[h][w]) {
    case '>':
        map[h][w] = '1';
        return calc(map, h, w + 0x1);
    case '<':
        map[h][w] = '1';
        return calc(map, h, w - 0x1);
    case 'v':
        map[h][w] = '1';
        return calc(map, h + 0x1, w);
    case '^':
        map[h][w] = '1';
        return calc(map, h - 0x1, w);
    }
}
function a0_0x49447b(ret) {
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
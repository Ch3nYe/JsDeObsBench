var a0_0x28c414 = (function () {
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
    a0_0x28c414(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4d9378('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4d9378();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var g_input = '';
process['stdin']['on']('data', function (chunk) {
    g_input += chunk;
});
process['stdin']['on']('end', function () {
    main(g_input['split'](/\r?\n/));
});
function main(inputs) {
    var N = parseInt(inputs[0x0]);
    var rs = inputs[0x1]['split']('\x20')['map'](function (a) {
        return parseInt(a);
    });
    var a = new Array(0x7)['fill'](![]);
    var a8 = 0x0;
    var count = 0x0;
    for (var i = 0x0; i < N; i++) {
        for (var j = 0x0; j < 0x9; j++) {
            if (j != 0x8) {
                if (rs[i] < (j + 0x1) * 0x190) {
                    if (!a[j]) {
                        a[j] = !![];
                        count += 0x1;
                    }
                    break;
                }
            } else {
                a8 += 0x1;
            }
        }
    }
    var min = count;
    if (min == 0x0 && N > 0x0) {
        min = 0x1;
        if (a8 > 0x0) {
            a8 -= 0x1;
        }
    }
    var max = Math['min'](0x8, min + a8);
    console['log']('' + min + '\x20' + max);
}
function a0_0x4d9378(ret) {
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
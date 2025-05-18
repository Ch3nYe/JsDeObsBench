var a0_0x1f9fde = (function () {
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
    a0_0x1f9fde(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x32d047('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x32d047();
        }
    })();
}());
function main() {
    var hands, pattern, swap, i = 0x0, j;
    for (;;) {
        if (input[i] == 0x0)
            break;
        hands = [];
        for (j = 0x0; j < 0x5; j++) {
            hands['push'](Number(input[i++]));
        }
        pattern = hands['reduce'](function (pat, h) {
            return pat[h] = !![], pat;
        }, {});
        keys = Object['keys'](pattern)['map'](Number)['sort'](function (x, y) {
            return x - y;
        });
        if (keys['length'] === 0x2) {
            if (keys[0x1] - keys[0x0] == 0x2) {
                swap = keys[0x0];
                keys[0x0] = keys[0x1];
                keys[0x1] = swap;
            }
            hands['forEach'](function (h) {
                console['log'](keys['indexOf'](h) + 0x1);
            });
        } else {
            hands['forEach'](function () {
                console['log'](0x3);
            });
        }
    }
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});
function a0_0x32d047(ret) {
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
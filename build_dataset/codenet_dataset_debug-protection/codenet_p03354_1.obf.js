'use strict';
function Main(input) {
    var _0x2aecb8 = (function () {
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
        _0x2aecb8(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xc2f349('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xc2f349();
            }
        })();
    }());
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    var N = input['shift'](), M = input['shift']();
    var p = input['splice'](0x0, N);
    var nodes = [];
    for (let k = 0x0; k < N; k++)
        nodes[k] = new Node(k);
    for (let k = 0x0; k < M; k++)
        nodes[input[0x2 * k] - 0x1]['merge'](nodes[input[0x2 * k + 0x1] - 0x1]);
    var counter = 0x0;
    for (let k = 0x0; k < N; k++)
        if (nodes[k]['top']() === nodes[p[k] - 0x1]['top']())
            counter++;
    console['log'](counter);
}
function Node(v) {
    var t = this;
    t['value'] = v;
    t['parent'] = null;
    t['weight'] = 0x1;
}
Node['prototype']['top'] = function () {
    var t = this;
    var p = t['parent'];
    if (!p)
        return t;
    else
        return p['top']();
};
Node['prototype']['adopt'] = function (progeny) {
    var t = this['top']();
    var c = progeny['top']();
    c['parent'] = t;
    t['weight'] += c['weight'];
};
Node['prototype']['merge'] = function (b) {
    var a = this['top']();
    b = b['top']();
    if (a === b)
        return;
    if (a['weight'] < b['weight'])
        b['adopt'](a);
    else
        a['adopt'](b);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xc2f349(ret) {
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
'use strict';
console['log'](function (args) {
    const _0x4f2209 = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
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
        _0x4f2209(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x30c0a8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x30c0a8();
            }
        })();
    }());
    const tmp = args['trim']()['split']('\x0a');
    const HW = tmp[0x0]['split']('\x20')['map'](v => v | 0x0);
    const H = HW[0x0], W = HW[0x1];
    const map = [Array(W + 0x2)['fill'](Infinity)];
    let s = 0x0;
    for (let y = 0x1; y <= H; y++) {
        map['push']([Infinity]);
        for (let x = 0x0; x < W; x++) {
            if (tmp[y][x] === '.') {
                s++;
                map[y]['push'](0x0);
            } else
                map[y]['push'](Infinity);
        }
        map[y]['push'](Infinity);
    }
    map['push'](Array(W + 0x2)['fill'](Infinity));
    const dir = [
        [
            -0x1,
            0x0
        ],
        [
            0x0,
            -0x1
        ],
        [
            0x1,
            0x0
        ],
        [
            0x0,
            0x1
        ]
    ];
    const queue = [[
            0x1,
            0x1,
            0x2
        ]];
    do {
        const q = queue['shift']();
        for (const d of dir) {
            const x = q[0x0] + d[0x0], y = q[0x1] + d[0x1];
            if (x === W && y === H)
                return s - q[0x2];
            if (map[y][x] === 0x0) {
                map[y][x] = q[0x2] + 0x1;
                queue['push']([
                    x,
                    y,
                    q[0x2] + 0x1
                ]);
            }
        }
    } while (queue[0x0]);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x30c0a8(ret) {
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
class Point {
    constructor(x, y) {
        this['x'] = x;
        this['y'] = y;
    }
    ['print']() {
        console['log'](this['x']['toFixed'](0x8) + '\x20' + this['y']['toFixed'](0x8));
    }
}
(function main() {
    const _0x41045e = (function () {
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
        _0x41045e(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x348a22('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x348a22();
            }
        })();
    }());
    const n = Number(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
    let p1 = new Point(0x0, 0x0);
    let p2 = new Point(0x64, 0x0);
    p1['print']();
    kock(n, p1, p2);
    p2['print']();
}());
function kock(n, p1, p2) {
    const sin60 = Math['sin'](0x3c * Math['PI'] / 0xb4);
    const cos60 = Math['cos'](0x3c * Math['PI'] / 0xb4);
    function innerFunc(n, p1, p2) {
        if (!n)
            return;
        xDiff = p2['x'] - p1['x'];
        yDiff = p2['y'] - p1['y'];
        let s = new Point(p1['x'] + xDiff / 0x3, p1['y'] + yDiff / 0x3);
        let t = new Point(s['x'] + xDiff / 0x3, s['y'] + yDiff / 0x3);
        let u = new Point((t['x'] - s['x']) * cos60 - (t['y'] - s['y']) * sin60 + s['x'], (t['x'] - s['x']) * sin60 + (t['y'] - s['y']) * cos60 + s['y']);
        kock(n - 0x1, p1, s);
        s['print']();
        kock(n - 0x1, s, u);
        u['print']();
        kock(n - 0x1, u, t);
        t['print']();
        kock(n - 0x1, t, p2);
    }
    kock = innerFunc;
    innerFunc(n, p1, p2);
}
function _0x348a22(ret) {
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
function main(input) {
    const _0x15b09b = (function () {
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
    input = input['split'](/\s/);
    let h = parseInt(input[0x0]);
    let w = parseInt(input[0x1]);
    let mp = [];
    for (let i = 0x2; i < 0x2 + h; i++)
        mp['push'](input[i]);
    function check(x, y) {
        (function () {
            _0x15b09b(this, function () {
                const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                const result = _0x283c2a('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x283c2a();
                }
            })();
        }());
        let res = 0x0;
        for (let i = 0x0; i < h; i++)
            if (mp[i][x] == '#') {
                res++;
                break;
            }
        for (let j = 0x0; j < w; j++)
            if (mp[y][j] == '#') {
                res++;
                break;
            }
        return res == 0x2;
    }
    for (let i = 0x0; i < h; i++) {
        ans = '';
        for (let j = 0x0; j < w; j++)
            if (check(j, i))
                ans = ans + mp[i][j];
        if (ans != '')
            console['log'](ans);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x283c2a(ret) {
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
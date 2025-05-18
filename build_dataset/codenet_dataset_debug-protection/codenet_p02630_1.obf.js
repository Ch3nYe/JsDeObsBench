function main(lines) {
    const _0x22b63a = (function () {
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
        _0x22b63a(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3f464f('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f464f();
            }
        })();
    }());
    const [N] = parseNumberLine(lines[0x0]);
    const numbers = parseNumberLine(lines[0x1]);
    const [Q] = parseNumberLine(lines[0x2]);
    const operationLines = lines['slice'](0x3);
    let result = numbers['reduce']((t, v) => t + v, 0x0);
    for (let i = 0x0; i < Q; ++i) {
        const [B, C] = parseNumberLine(operationLines[i]);
        while (!![]) {
            const index = numbers['indexOf'](B);
            if (index < 0x0)
                break;
            numbers[index] = C;
            result += C - B;
        }
        console['log'](result);
    }
}
function parseNumberLine(line, radix = 0xa) {
    return line['split'](/\s+/)['map'](_ => parseInt(_, radix));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));
function _0x3f464f(ret) {
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
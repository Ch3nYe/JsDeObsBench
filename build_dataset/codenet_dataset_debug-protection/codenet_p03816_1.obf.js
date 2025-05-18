'use strict';
function main(n, array) {
    let counter = {};
    for (let a of array) {
        counter[a] = counter[a] || 0x0;
        counter[a]++;
    }
    let nums = Object['keys'](counter);
    let evenCount = nums['reduce']((count, num) => {
        if (counter[num] % 0x2 === 0x0) {
            return count + 0x1;
        } else {
            return count;
        }
    }, 0x0);
    let answer;
    if (evenCount % 0x2 === 0x0) {
        answer = nums['length'];
    } else {
        answer = nums['length'] - 0x1;
    }
    console['log'](answer);
}
function doMain() {
    const _0x1e766d = (function () {
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
        _0x1e766d(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x428f3d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x428f3d();
            }
        })();
    }());
    let input = '';
    process['stdin']['resume']();
    process['stdin']['setEncoding']('utf8');
    process['stdin']['on']('data', chunk => {
        input += chunk;
    });
    process['stdin']['on']('end', () => {
        input = input['trim']()['split']('\x0a');
        let n = Number(input[0x0]);
        let array = input[0x1]['split']('\x20')['map'](a => Number(a));
        main(n, array);
    });
}
doMain();
function _0x428f3d(ret) {
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
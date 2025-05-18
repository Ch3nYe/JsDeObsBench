(function main() {
    const _0x1faac2 = (function () {
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
        _0x1faac2(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x279e5d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x279e5d();
            }
        })();
    }());
    const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    lines['shift']();
    const arr = lines['shift']()['split']('\x20')['map'](Number);
    buildMaxHeap(arr);
    console['log'](arr['reduce']((s, e) => s += '\x20' + e, ''));
}());
function buildMaxHeap(arr) {
    const n = arr['length'];
    const maxHeapify = i => {
        let left, right, largest;
        left = 0x2 * i + 0x1;
        right = 0x2 * i + 0x2;
        largest = left < n && arr[left] > arr[i] ? left : i;
        if (right < n && arr[right] > arr[largest])
            largest = right;
        if (largest != i) {
            arr[largest] = [
                arr[i],
                arr[i] = arr[largest]
            ][0x0];
            maxHeapify(largest);
        }
    };
    for (let i = Math['floor'](arr['length'] / 0x2); i >= 0x0; i--)
        maxHeapify(i);
}
function _0x279e5d(ret) {
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
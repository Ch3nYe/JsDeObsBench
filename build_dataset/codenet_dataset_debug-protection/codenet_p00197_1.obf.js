(function () {
    var _0xfaf0c3 = (function () {
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
        _0xfaf0c3(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x211046('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x211046();
            }
        })();
    }());
    var input = '', cnt = 0x0;
    function main() {
        var inputLen, nums, x, y, temp, ans;
        inputLen = input['length'];
        for (i = 0x0; i < inputLen; i += 0x1) {
            nums = input[i]['split']('\x20');
            x = parseInt(nums[0x0], 0xa);
            y = parseInt(nums[0x1], 0xa);
            if (x === 0x0 && y === 0x0) {
                break;
            } else if (x < y) {
                temp = x;
                x = y;
                y = temp;
            }
            ans = gcd(x, y);
            showResult(ans, cnt);
            cnt = 0x0;
        }
    }
    function gcd(x, y) {
        cnt += 0x1;
        return x % y === 0x0 ? y : gcd(y, x % y);
    }
    function showResult(result, cnt) {
        console['log'](result + '\x20' + cnt);
    }
    process['stdin']['resume']();
    process['stdin']['setEncoding']('utf8');
    process['stdin']['on']('data', function (chunk) {
        input += chunk;
    });
    process['stdin']['on']('end', function () {
        input = input['split']('\x0a');
        main();
    });
}());
function _0x211046(ret) {
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
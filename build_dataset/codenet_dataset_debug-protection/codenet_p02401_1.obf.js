var a0_0x509788 = (function () {
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
    a0_0x509788(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1eedca('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1eedca();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var input = chunk['split']('\x0a');
    var output = '';
    for (var i = 0x0; i < input['length']; i++) {
        var r = calc(input[i]);
        if (r !== ![]) {
            console['log'](r);
        }
    }
    function calc(input) {
        var nums = input['split']('\x20');
        nums[0x0] = Number(nums[0x0]);
        nums[0x2] = Number(nums[0x2]);
        if (nums[0x1] == '+') {
            return nums[0x0] + nums[0x2];
        } else if (nums[0x1] == '-') {
            return nums[0x0] - nums[0x2];
        } else if (nums[0x1] == '*') {
            return nums[0x0] * nums[0x2];
        } else if (nums[0x1] == '/') {
            return nums[0x0] / nums[0x2];
        } else if (nums[0x1] == '?') {
            return ![];
        }
    }
});
function a0_0x1eedca(ret) {
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
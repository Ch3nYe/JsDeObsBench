var a0_0x3daa8b = (function () {
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
    a0_0x3daa8b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5aac04('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5aac04();
        }
    })();
}());
var input = '';
var readable = process['stdin'];
readable['resume']();
readable['setEncoding']('utf-8');
readable['on']('data', function (chunk) {
    input += chunk;
});
readable['on']('end', function () {
    var data = input['split']('\x0a');
    var n = data[0x0];
    var tscore = 0x0;
    var hscore = 0x0;
    for (var i = 0x1; i < data['length']; i++) {
        var taha = data[i]['split']('\x20');
        if (taha[0x0] < taha[0x1]) {
            hscore += 0x3;
        } else if (taha[0x1] < taha[0x0]) {
            tscore += 0x3;
        } else {
            hscore += 0x1;
            tscore += 0x1;
        }
    }
    console['log'](tscore + '\x20' + hscore);
});
function a0_0x5aac04(ret) {
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
var a0_0x275313 = (function () {
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
    a0_0x275313(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xf216df('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xf216df();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('ascii');
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on']('data', function (data) {
    input_stdin += data;
});
process['stdin']['on']('end', function () {
    input_stdin_array = input_stdin['split']('\x0a');
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var s = readLine();
    s = s['split'](',');
    s = s['join']('\x20');
    process['stdout']['write'](s);
}
function a0_0xf216df(ret) {
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
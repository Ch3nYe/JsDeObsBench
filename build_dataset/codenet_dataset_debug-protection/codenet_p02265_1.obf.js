const a0_0xa194b9 = (function () {
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
    a0_0xa194b9(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x10ec91('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x10ec91();
        }
    })();
}());
const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
const insert = (arr, x) => arr['unshift'](x);
const del = (arr, x) => {
    for (var i = 0x0; i < arr['length']; i++) {
        if (x === arr[i])
            break;
    }
    if (i !== arr['length'])
        arr['splice'](i, 0x1);
};
const delFirst = arr => arr['shift']();
const delLast = arr => arr['pop']();
const cmds = line['slice'](0x1);
const ans = cmds['reduce']((acc, x) => {
    const cmd = x['split']('\x20');
    switch (cmd[0x0]) {
    case 'insert':
        insert(acc, parseInt(cmd[0x1]));
        break;
    case 'delete':
        del(acc, parseInt(cmd[0x1]));
        break;
    case 'deleteFirst':
        delFirst(acc);
        break;
    case 'deleteLast':
        delLast(acc);
        break;
    }
    return acc;
}, [])['map'](x => x['toString']())['join']('\x20');
console['log'](ans);
function a0_0x10ec91(ret) {
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
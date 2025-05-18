const a0_0x440d3a = (function () {
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
    a0_0x440d3a(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x7c97d0('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x7c97d0();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
const reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
const lines = [];
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    let [top, back, right, left, front, bottom] = lines[0x0]['split']('\x20')['map'](Number);
    const rs = lines[0x1];
    for (let i = 0x0; i < rs['length']; i++) {
        switch (rs[i]) {
        case 'N':
            [top, front, bottom, back] = [
                back,
                top,
                front,
                bottom
            ];
            break;
        case 'S':
            [top, front, bottom, back] = [
                front,
                bottom,
                back,
                top
            ];
            break;
        case 'W':
            [top, left, bottom, right] = [
                right,
                top,
                left,
                bottom
            ];
            break;
        case 'E':
            [top, left, bottom, right] = [
                left,
                bottom,
                right,
                top
            ];
            break;
        }
    }
    console['log'](top);
});
function a0_0x7c97d0(ret) {
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
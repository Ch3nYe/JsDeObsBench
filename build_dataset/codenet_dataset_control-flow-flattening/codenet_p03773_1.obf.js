process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var mPlXSN = {
        'UTexG': function (callee, param1) {
            return callee(param1);
        },
        'Arysq': function (x, y) {
            return x < y;
        }
    };
    var lines = chunk['toString']()['split']('\x20');
    var first = mPlXSN['UTexG'](Number, lines[0x0]);
    var second = mPlXSN['UTexG'](Number, lines[0x1]);
    var time = second + first;
    if (mPlXSN['Arysq'](time, 0x18)) {
        console['log'](time);
    } else {
        console['log'](time - 0x18);
    }
});
process['stdin']['resume']();
process['stdin']['setEncoding']('ascii');
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on']('data', function (data) {
    input_stdin += data;
});
process['on']('SIGINT', function () {
    input_stdin_array = input_stdin['split']('\x0a');
    main();
    process['exit']();
});
process['stdin']['on']('end', function () {
    var vzslKP = {
        'dkIbv': function (callee) {
            return callee();
        }
    };
    input_stdin_array = input_stdin['split']('\x0a');
    vzslKP['dkIbv'](main);
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var NZKLbO = {
        'cGtTv': '2|3|0|5|4|1|6',
        'XIngz': function (x, y) {
            return x == y;
        },
        'fVLrU': function (callee) {
            return callee();
        },
        'zKWpm': function (callee, param1) {
            return callee(param1);
        }
    };
    var vWXuZF = NZKLbO['cGtTv']['split']('|');
    var zhZOZG = 0x0;
    while (!![]) {
        switch (vWXuZF[zhZOZG++]) {
        case '0':
            var op = s[0x1];
            continue;
        case '1':
            if (NZKLbO['XIngz'](op, '+')) {
                c = a + b;
            } else {
                c = a - b;
            }
            continue;
        case '2':
            var s = NZKLbO['fVLrU'](readLine)['split']('\x20');
            continue;
        case '3':
            var a = NZKLbO['zKWpm'](parseInt, s[0x0]);
            continue;
        case '4':
            var c;
            continue;
        case '5':
            var b = NZKLbO['zKWpm'](parseInt, s[0x2]);
            continue;
        case '6':
            console['log'](c);
            continue;
        }
        break;
    }
}
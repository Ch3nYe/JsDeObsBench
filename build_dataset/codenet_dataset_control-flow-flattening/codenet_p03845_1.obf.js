process['stdin']['resume']();
process['stdin']['setEncoding']('ascii');
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on']('data', function (data) {
    input_stdin += data;
});
process['on']('SIGINT', function () {
    var FlbKWQ = {
        'ifIfE': function (callee) {
            return callee();
        }
    };
    input_stdin_array = input_stdin['split']('\x0a');
    FlbKWQ['ifIfE'](main);
    process['exit']();
});
process['stdin']['on']('end', function () {
    var pxJgfC = {
        'yzAJR': function (callee) {
            return callee();
        }
    };
    input_stdin_array = input_stdin['split']('\x0a');
    pxJgfC['yzAJR'](main);
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var PCPQQH = {
        'VjdLD': '4|3|6|2|1|5|0',
        'ocFYy': function (x, y) {
            return x < y;
        },
        'sRUuo': function (callee, param1) {
            return callee(param1);
        },
        'YLlic': function (x, y) {
            return x + y;
        },
        'SEPil': function (x, y) {
            return x - y;
        },
        'jIwhd': function (callee, param1) {
            return callee(param1);
        },
        'mAgHA': function (callee) {
            return callee();
        },
        'ubLtv': function (callee, param1) {
            return callee(param1);
        }
    };
    var muTBxG = PCPQQH['VjdLD']['split']('|');
    var xSjxOl = 0x0;
    while (!![]) {
        switch (muTBxG[xSjxOl++]) {
        case '0':
            for (var k = 0x0; PCPQQH['ocFYy'](k, M); k++) {
                s = readLine()['split']('\x20');
                var i = PCPQQH['sRUuo'](parseInt, s[0x0]);
                var x = PCPQQH['sRUuo'](parseInt, s[0x1]);
                console['log'](PCPQQH['YLlic'](PCPQQH['SEPil'](sum, T[i]), x));
            }
            continue;
        case '1':
            for (var i = 0x1; i <= N; i++) {
                T['push'](PCPQQH['jIwhd'](parseInt, s[i - 0x1]));
                sum += T[i];
            }
            continue;
        case '2':
            var sum = 0x0;
            continue;
        case '3':
            var s = PCPQQH['mAgHA'](readLine)['split']('\x20');
            continue;
        case '4':
            var N = PCPQQH['ubLtv'](parseInt, PCPQQH['mAgHA'](readLine));
            continue;
        case '5':
            var M = PCPQQH['ubLtv'](parseInt, PCPQQH['mAgHA'](readLine));
            continue;
        case '6':
            var T = [0x0];
            continue;
        }
        break;
    }
}
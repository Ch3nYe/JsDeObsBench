function main(input) {
    var wpYDgN = {
        'DzbYR': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'KLVYV': 'Yes'
    };
    var args = input['split']('\x20');
    var n = wpYDgN['DzbYR'](parseInt, args[0x0], 0xa);
    var m = wpYDgN['DzbYR'](parseInt, args[0x1], 0xa);
    if (n === m) {
        return wpYDgN['KLVYV'];
    } else {
        return 'No';
    }
}
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
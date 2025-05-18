function main(input) {
    var zqoxtc = {
        'DCXhR': '4|1|2|3|0',
        'hZNbA': function (callee, param1) {
            return callee(param1);
        }
    };
    var YTsSRw = zqoxtc['DCXhR']['split']('|');
    var KlZorb = 0x0;
    while (!![]) {
        switch (YTsSRw[KlZorb++]) {
        case '0':
            return money;
        case '1':
            var money = inputs[0x0]['split']('\x20')[0x0];
            continue;
        case '2':
            var kRegexp = new RegExp(inputs[0x1]['replace']('\x20', '|'));
            continue;
        case '3':
            while (kRegexp['test'](zqoxtc['hZNbA'](String, money))) {
                money++;
            }
            continue;
        case '4':
            var inputs = input['split']('\x0a');
            continue;
        }
        break;
    }
}
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
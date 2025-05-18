function Main(input) {
    var xPVbgT = {
        'VgFEZ': '0|3|2|8|5|6|7|1|4',
        'ptwsi': function (x, y) {
            return x < y;
        },
        'qhNga': function (x, y) {
            return x <= y;
        }
    };
    var Jyeppt = xPVbgT['VgFEZ']['split']('|');
    var irMUYd = 0x0;
    while (!![]) {
        switch (Jyeppt[irMUYd++]) {
        case '0':
            lines = input['split']('\x0a');
            continue;
        case '1':
            for (i = 0x0; xPVbgT['ptwsi'](i, N); i++) {
                distanceTravelled += +secondLine[i];
                if (xPVbgT['qhNga'](distanceTravelled, X)) {
                    numBounces += 0x1;
                }
            }
            continue;
        case '2':
            N = +firstLine[0x0];
            continue;
        case '3':
            firstLine = lines[0x0]['split']('\x20');
            continue;
        case '4':
            console['log'](numBounces);
            continue;
        case '5':
            secondLine = lines[0x1]['split']('\x20');
            continue;
        case '6':
            distanceTravelled = 0x0;
            continue;
        case '7':
            numBounces = 0x1;
            continue;
        case '8':
            X = +firstLine[0x1];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function main(input) {
    var aZBNPo = {
        'Oubvw': function (x, y) {
            return x == y;
        }
    };
    input = input['split']('\x0a');
    var answer = input[0x0];
    var answerA = input[0x0]['toUpperCase']();
    if (aZBNPo['Oubvw'](answer, answerA)) {
        console['log']('A');
    } else {
        console['log']('a');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
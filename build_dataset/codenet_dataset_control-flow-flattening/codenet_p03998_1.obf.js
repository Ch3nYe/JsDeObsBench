function Main(input) {
    var RDLQPX = '0|2|1|4|5|3'['split']('|');
    var RbQPzl = 0x0;
    while (!![]) {
        switch (RDLQPX[RbQPzl++]) {
        case '0':
            var input = input['split']('\x0a');
            continue;
        case '1':
            var hands = {
                'a': input[0x0]['split'](''),
                'b': input[0x1]['split'](''),
                'c': input[0x2]['split']('')
            };
            continue;
        case '2':
            var answer;
            continue;
        case '3':
            console['log'](answer);
            continue;
        case '4':
            var currentPlayer = 'a';
            continue;
        case '5':
            while (!![]) {
                currentCard = hands[currentPlayer]['shift']();
                if (currentCard) {
                    currentPlayer = currentCard;
                } else {
                    answer = currentPlayer['toUpperCase']();
                    break;
                }
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
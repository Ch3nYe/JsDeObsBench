function Main(input) {
    input = input['split']('\x0a');
    input = input[0x0];
    switch (input) {
    case 'A': {
            console['log']('T');
            return;
        }
    case 'T': {
            console['log']('A');
            return;
        }
    case 'C': {
            console['log']('G');
            return;
        }
    case 'G': {
            console['log']('C');
            return;
        }
    default: {
            return;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
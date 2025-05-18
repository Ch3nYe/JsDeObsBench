function Main(input) {
    const bbHqUj = {
        'Qqixh': function (x, y) {
            return x && y;
        },
        'mKMJE': function (x, y) {
            return x && y;
        },
        'vDxmV': function (x, y) {
            return x && y;
        },
        'KjWpF': 'Yes'
    };
    input = input['split']('');
    let N = input['includes']('N');
    let S = input['includes']('S');
    let E = input['includes']('E');
    let W = input['includes']('W');
    let NS = N && S || bbHqUj['Qqixh'](!N, !S);
    let EW = bbHqUj['mKMJE'](E, W) || bbHqUj['vDxmV'](!E, !W);
    if (NS && EW) {
        console['log'](bbHqUj['KjWpF']);
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
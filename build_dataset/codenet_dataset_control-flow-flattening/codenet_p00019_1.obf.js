function main(input) {
    var aCJeAq = {
        'Ztzob': function (callee, param1) {
            return callee(param1);
        },
        'PFDIz': function (x, y) {
            return x <= y;
        },
        'OiwvV': function (x, y) {
            return x * y;
        }
    };
    var ans = 0x1;
    var inputNum = aCJeAq['Ztzob'](toInt, input);
    for (var i = 0x1; aCJeAq['PFDIz'](i, input); i++) {
        ans = aCJeAq['OiwvV'](ans, i);
    }
    console['log'](ans);
}
function toInt(str) {
    var xmzJuQ = {
        'rJkqa': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return xmzJuQ['rJkqa'](parseInt, str, 0xa);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
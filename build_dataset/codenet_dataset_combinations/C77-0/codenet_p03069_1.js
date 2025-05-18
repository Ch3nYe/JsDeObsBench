function Main(input) {
    "use strict";
    const elements = input.split('\n');
    let blackFlag = false;
    let numBlack = 0;
    let numWhiteAfterBlack = 0;

    for (let i = 0; i < elements[0]; i++) {
        if (blackFlag === false && elements[1][i] === '#') {
            blackFlag = true;
        }
        if (blackFlag === true && elements[1][i] === '.') {
            numWhiteAfterBlack++;
        }
        if (elements[1][i] === '#') {
            numBlack++;
        }
    }

    if (numWhiteAfterBlack === 0 && blackFlag === false) {
        console.log('0');
    } else if(numWhiteAfterBlack === 0 && blackFlag === true){
        console.log(numBlack);
    }else if (numBlack <= numWhiteAfterBlack) {
        console.log(numBlack);
    } else {
        console.log(numWhiteAfterBlack);
    }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
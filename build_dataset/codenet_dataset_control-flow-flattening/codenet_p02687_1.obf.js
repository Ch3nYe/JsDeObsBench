'use strict';
const Main = input => {
    const NOwnkm = {
        'jhlBR': 'ABC',
        'IaQWk': 'ARC'
    };
    if (input === NOwnkm['jhlBR']) {
        console['log'](NOwnkm['IaQWk']);
    } else {
        console['log'](NOwnkm['jhlBR']);
    }
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(_0x42c34a) {
    lines = _0x42c34a['split']('\x0a');
    firstLine = lines[0x0]['split']('\x20');
    N = +firstLine[0x0];
    X = +firstLine[0x1];
    secondLine = lines[0x1]['split']('\x20');
    distanceTravelled = 0x0;
    numBounces = 0x1;
    for (i = 0x0; i < N; i++) {
        distanceTravelled += +secondLine[i];
        if (distanceTravelled <= X) {
            numBounces += 0x1;
        }
    }
    console['log'](numBounces);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
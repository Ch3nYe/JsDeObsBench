process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  var line, lines = chunk.split("\n"),
      i, len = lines.length, j, jLen,
      deg, pow, max;

  for (i=0; i<len; i++) {
    line = lines[i];
    if (line == "#") {
      break;
    }

    line = line.replace(/north/g, 0);
    line = line.replace(/west/g, 1);

    deg = 0;

    jLen = line.length;
    pow = line.length - 1;
    max = 90 * Math.pow(2, pow);
    for (j=jLen; j>=0; j--) {
      if (line[j]*1) {
        if (deg < max) {
          deg += 90 * Math.pow(2, j);
        }   
      } else {
        if (deg > 0) {
          deg -= 90 * Math.pow(2, j);
        }
      }
    }

    while(pow > 0 && deg % 2 === 0) {
      deg = deg / 2;
      pow--;
    }
    
    if (pow > 0) {
      console.log(deg + "/" + Math.pow(2, pow));
    } else {
      console.log(deg);
    }
  }
});
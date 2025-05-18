const calc = (str) => {
  const areas = [];
  const depthIndexes = [];
  let sum = 0;

  for (let i=0; i<str.length; i++) {
    const char = str[i];

    if (char === '\\') {
      depthIndexes.push(i);
      continue;
    }

    if (char === '/' && depthIndexes.length > 0) {
      const j = depthIndexes.pop();
      sum += i - j;
      let currentArea = i - j;
      while (areas.length > 0 && areas[areas.length-1].depth > j) {
        currentArea += areas[areas.length-1].area;
        areas.pop();
      }
      areas.push({
        depth: j,
        area: currentArea,
      });
    }
  }



  console.log(sum);
  if (areas.length === 0) {
    console.log(0);
    return;
  }
  console.log(`${areas.length} ${areas.map(obj => obj.area).join(' ')}`);
};


let inputStr = '';
process.stdin.on('data', (input) => { inputStr += String.raw`${input}` });

process.stdin.on('end', () => { calc(inputStr); });

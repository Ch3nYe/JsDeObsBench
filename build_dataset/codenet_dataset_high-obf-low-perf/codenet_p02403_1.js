let fs = require('fs');

const fuga = data => {
  lines = data.split("\n");
  lines = lines.map(line => line.split(" "));
  lines = lines.map(line => line.map(elem => parseInt(elem)));

  for(let i = 0; i < lines.length; i++) {
    let str = "";
    if(!lines[i][0]) return;
    for(let j = 0; j < lines[i][0]; j++) {
      for(let k = 0; k < lines[i][1]; k++) {
        str += "#";
      }
      console.log(str);
      str = "";
    }
    console.log("");
  }
}

const readFile = route => {
  fs.readFile(route, 'utf8', (err, data) => {
    fuga(data);
  });
}

const readFileWithoutArg = () => {
  const data = require('fs').readFileSync('/dev/stdin', 'utf8');
  fuga(data)
}

let sampleInputPath = "";

if(process.argv.length > 2) {
  sampleInputPath = process.argv[2];
  readFile(sampleInputPath);
} else {
  readFileWithoutArg();
}


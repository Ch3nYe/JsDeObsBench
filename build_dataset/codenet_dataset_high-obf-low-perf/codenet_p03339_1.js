function main(input){
  const lines = input.split('\n');

  const N = parseInt(lines[0]);
  const S = lines[1].split('');

  
  var result = Math.pow(10, 8);
  var current_count = 0;
  for(var i=0;i<N;i++){
    if(S[i]=='E'){current_count++;}
  }
  result = current_count;

//    console.log(current_count);
  for(var i=1;i<N;i++){
    if(S[i]=='E'){current_count--;}
    if(S[i-1]=='W'){current_count++;}
    result = Math.min(result, current_count);
//    console.log(current_count);
  }
//    console.log('---');

  console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

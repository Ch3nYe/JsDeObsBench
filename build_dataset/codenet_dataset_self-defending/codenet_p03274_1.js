function get_run_length(min, max){
  var result = 0;

  if(max > Math.abs(min)){
    result = Math.abs(min*2) + max;
  }else{
    result = Math.abs(min) + max*2;
  }

  if(min>=0){result = max;}
  if(max<=0){result = Math.abs(min);}

  return result;
}

function main(input){
  const lines = input.split('\n');
  const N = parseInt(lines[0].split(' ')[0]);
  const K = parseInt(lines[0].split(' ')[1]);
  const Xs = lines[1].split(' ').map(x => parseInt(x))

  var result = 1e7;
  for(var i=0;i<N-K+1;i++){
    var min = Xs[i];
    var max = Xs[i+K-1];

   var tmp = get_run_length(min, max);
    result = Math.min(tmp, result);
    //console.log([i,result,min,max]);
  }

  console.log(result);
}


main(require('fs').readFileSync('/dev/stdin', 'utf8'));

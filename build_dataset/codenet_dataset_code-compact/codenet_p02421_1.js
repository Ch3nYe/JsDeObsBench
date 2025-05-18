var input = '';
var readable = process.stdin;
readable.resume();
readable.setEncoding( 'utf-8' );
readable.on( 'data', function( chunk ) {
  input += chunk;
});

readable.on( 'end', function() {
  var data = input.split( "\n" );
  var n = data[0];
  var tscore = 0;
  var hscore = 0;
  for( var i=1; i<data.length; i++ ) {
    var taha = data[i].split( ' ' );
    if( taha[0] < taha[1] ) {
      hscore += 3;
    } else if( taha[1] < taha[0] ) {
      tscore += 3;
    } else {
      hscore += 1;
      tscore += 1;
    }
  }
  console.log( tscore+' '+hscore );  
});
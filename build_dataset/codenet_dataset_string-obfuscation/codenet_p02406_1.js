var readable = process.stdin;
readable.resume();
readable.setEncoding( 'utf-8' );
readable.on( 'data', function( chunk ) {
  var n = parseInt( chunk );
  var i = 1;
  var output = [];
  do{
    var x = i;
    if( 0 == x%3 ) {
      output.push( " "+i );
    } else {
      do {
        if( 3 == x%10 ) {
          output.push( " "+i );
          break;
        } else {
          x /= 10;
        }
      } while( x );
    }
  } while( ++i <= n );
  
  console.log( output.join( '' ) );
});
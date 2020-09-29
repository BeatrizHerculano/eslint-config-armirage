/* Example code: @armirage/eslint-config-armirage */

const thing = "Hello";
const another = "World";
const total = [ 1, 2, 3 ];

function armirage( arg ) {
	let out = "Bye";
	if ( !arg ) {
		out = thing;
	} else if ( arg === thing ) {
		out = total.toString() + " " + another;
	}
	return out;
}

console.log( armirage( "Hello" ));

'use strict';


$(document).ready(()=>{
	set_random_citation();
});

function set_random_citation(){
	let citation = Citation.random();
	/* insert into document */
	$('.container').append(Citation.to_string(citation));
}
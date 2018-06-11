'use strict';


$(document).ready(()=>{
	set_daily_citation();
});

function set_daily_citation(){
	/* get an id of the day to set the daily citation */
	let date = new Date();
	let id = date.getFullYear() * date.getMonth() * date.getDate();
	id %= Citation.citations.length;
	let citation = Citation.get_citation(id);
	/* insert into document */
	$('.container').append(Citation.to_string(citation));
}
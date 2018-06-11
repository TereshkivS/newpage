'use strict';

$(document).ready(()=>{
	$.each(Citation.lecturers, (i, lecturer)=>{
		$('#lecturers').append($('<option>', {
			value: lecturer.id,
			text: lecturer.name.second
		}));
	});

	$('#lecturers').on('input', update_container);

	update_container();
});

function filter_by_lecturer_id(id){
	if (id == '*'){
		return Citation.get_all_citations();
	}
	let result = [];
	$.each(Citation.citations, (i, citation)=>{
		if (citation.lecturer_id == id){
			result.push(citation);
		}
	});
	return result;
}


function insert_citations(citations){
	$.each(citations, (i, citation)=>{
		$('.container').append(Citation.to_string(citation));
	});
}

function update_container(){
	$('.container').empty();

	let list = filter_by_lecturer_id($('#lecturers').val());
	insert_citations(list);
}
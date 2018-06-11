'use strict';


$(document).ready(()=>{

	let query = getJsonFromUrl().filter.replaceAll('+', ' ');

	$('#filter').val(query);

	let arr = search_by_filter(query);
	insert_citations(arr);
});

function search_by_filter(filter){
	if (!filter){
		return [];
	}
	let result = [];
	$.each(Citation.citations, (i, citation)=>{
		if (citation.text.toLowerCase().match(filter)){
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
function getJsonFromUrl() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

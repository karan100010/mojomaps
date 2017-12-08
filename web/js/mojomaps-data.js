function getJSONFromGDURL(url){
		$.getJSON(url, processData)
}			

function processData(data)
{
	console.log(data)
}




		
//Functions to get tile laters
function getosmmap(){ //add a tile layer to add to our map, in this case it's the 'standard' OpenStreetMap.org tile server
		osmmap=L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		maxZoom: 18
	})
	return osmmap
}
		
function getmapboxmap(){ //add a tile layer to add to our map, in this case it's the MapBox tile server
		mapboxmap=L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiYXJqdW52ZW4iLCJhIjoiY2phN3ptODN4MDEzMTMybG8xM2t1bzltZCJ9.1HxRGkovlxUEqMNHlMmDmw'
	})
	return mapboxmap
}
		
//Selecting tile layer

function getTileLayer(maptype){
	if (maptype=="osm"){
		tilelayer=getosmmap()
	}
	else if (maptype=="mapbox"){
		tilelayer=getmapboxmap()
	}
	return tilelayer
}



function addExternalMapLayer(maplayer,maptype,lat,long,zoom){
		//var mymap = L.map(maplayer).setView([25.509815,77.201317 ], 6);
		var mymap = L.map(maplayer).setView([lat,long ], zoom);
		//Adding the selected tile layer
		//tilelayer.addTo(mymap);
		tilelayer=getTileLayer(maptype)
		mymap.addLayer(tilelayer);
}

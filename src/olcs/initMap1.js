import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';


class initMap{
	constructor(url) {
	  this.url = url;
	  
	}
	
	initMap(){
		new Map({
		  target: 'map',
		  layers: [
		    new TileLayer({
		      source: new XYZ({
		        url:this.url
		      })
		    })
		  ],
		  view: new View({
		    center: [0, 0],
		    zoom: 2
		  })
		});
	}
	
}

export  default  initMap
	


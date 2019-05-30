import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';


/**
 * 初始化地图
 */
class initMap{
	/**
	 * @param {Object} 天地图地址
	 */
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
			controls: [],
		  view: new View({
		    center: [0, 0],
		    zoom: 2,
				
		  })
		});
	}
	
}

export  default  initMap



	


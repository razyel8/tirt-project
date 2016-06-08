var raster = new ol.layer.Tile({
    source: new ol.source.MapQuest({layer: 'osm'})
});

var source = new ol.source.Vector({wrapX: false});
var geojsonObject = { "type": "FeatureCollection", "features": [ { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 16.3667, 48.2 ] }, "properties": { "country": "AT", "city": "" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 16.3667, 48.2 ], [ 16.3667, 48.2 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 16.3667, 48.2 ] }, "properties": { "country": "AT", "city": "" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 16.3667, 48.2 ], [ 16.3667, 48.2 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 16.3667, 48.2 ] }, "properties": { "country": "AT", "city": "" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 16.3667, 48.2 ], [ 105, 35 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 105, 35 ] }, "properties": { "country": "CN", "city": "" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 105, 35 ], [ 105, 35 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 105, 35 ] }, "properties": { "country": "CN", "city": "" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 105, 35 ], [ 105, 35 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 105, 35 ] }, "properties": { "country": "CN", "city": "" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 105, 35 ], [ 105, 35 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 105, 35 ] }, "properties": { "country": "CN", "city": "" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 105, 35 ], [ 116.3883, 39.9289 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 116.3883, 39.9289 ] }, "properties": { "country": "CN", "city": "Beijing" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 116.3883, 39.9289 ], [ 116.3883, 39.9289 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 116.3883, 39.9289 ] }, "properties": { "country": "CN", "city": "Beijing" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 116.3883, 39.9289 ], [ 116.3883, 39.9289 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 116.3883, 39.9289 ] }, "properties": { "country": "CN", "city": "Beijing" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [ 116.3883, 39.9289 ], [ 116.3883, 39.9289 ] ] }, "properties": {} }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 116.3883, 39.9289 ] }, "properties": { "country": "CN", "city": "Beijing" } } ] }
var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    })
});

var image = new ol.style.Circle({
    radius: 5,
    fill: null,
    stroke: new ol.style.Stroke({color: 'red', width: 1})
});

var styles = {
    'Point': new ol.style.Style({
        image: image
    }),
    'LineString': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 1
        })
    }),
    'MultiLineString': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 1
        })
    }),
    'MultiPoint': new ol.style.Style({
        image: image
    }),
    'MultiPolygon': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'yellow',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 0, 0.1)'
        })
    }),
    'Polygon': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            lineDash: [4],
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.1)'
        })
    }),
    'GeometryCollection': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'magenta',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'magenta'
        }),
        image: new ol.style.Circle({
            radius: 10,
            fill: null,
            stroke: new ol.style.Stroke({
                color: 'magenta'
            })
        })
    }),
    'Circle': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'red',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.2)'
        })
    })
};

var styleFunction = function(feature) {
    return styles[feature.getGeometry().getType()];
};

var vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
});

var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: styleFunction
});




var vL= new ol.layer.Vector({
    title: 'added Layer',
    source: new ol.source.Vector({
        //features: geojsonObject,
        url: 'jsons/geo3.json',
        projection : 'EPSG:3857',
        format: new ol.format.GeoJSON()
    })
})


var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.MapQuest({
                layer: 'osm'
            })
        }),
        vectorLayer
    ],
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
        })
    }),
    view: new ol.View({
        center: [0, 0],
        zoom: 2,
        projection: 'EPSG4326'
    })
});

var draw; // global so we can remove it later
//function addInteraction() {
//    var value = 'Point';
//    if (value !== 'None') {
//        var geometryFunction, maxPoints;
//        if (value === 'Square') {
//            value = 'Circle';
//            geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
//        } else if (value === 'Box') {
//            value = 'LineString';
//            maxPoints = 2;
//            geometryFunction = function (coordinates, geometry) {
//                if (!geometry) {
//                    geometry = new ol.geom.Polygon(null);
//                }
//                var start = coordinates[0];
//                var end = coordinates[1];
//                geometry.setCoordinates([
//                    [start, [start[0], end[1]], end, [end[0], start[1]], start]
//                ]);
//                return geometry;
//            };
//        }
//        draw = new ol.interaction.Draw({
//            source: source,
//            type: /** @type {ol.geom.GeometryType} */ (value),
//            geometryFunction: geometryFunction,
//            maxPoints: maxPoints
//        });
//        map.addInteraction(draw);
//    }
//}
//
//
//addInteraction();

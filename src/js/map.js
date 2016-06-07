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

var vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
});


var vL= new ol.layer.Vector({
    title: 'added Layer',
    source: new ol.source.Vector({
        features: geojsonObject,
        format: new ol.format.GeoJSON()
    })
})


var map = new ol.Map({
    layers: [raster, vL],
    projection:'EPSG:26915',
    target: 'map',
    view: new ol.View({
        center: [17.038538, 51.107885],
        zoom: 4
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

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname, 'src')));

app.use('/src', express.static('src'));
app.use('/bower_components', express.static('bower_components'));

var traceroute = require('traceroute');
var geoip = require('geoip-local');
var destination = '111.193.186.221';
console.log("1");

function FeaturePoint(lon, lat, properties) {
    return {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [lat, lon]},
        "properties": properties
    }
}

function FeatureLine(startX, startY, endX, endY, properties) {
    return {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [startX, startY], [endX, endY]
            ]
        },
        "properties": properties
    }
}

function GeoJSON(featuresArray) {
    return {
        "type": "FeatureCollection",
        "features": featuresArray
    }
}

function Hop(ip, t1, t2, t3) {
    return {
        "ip": ip,
        "t1": t1,
        "t2": t2,
        "t3": t3,
        "avg": (t1+t2+t3)/3
    }
}

app.post('/tracert', function (req, res) {
    console.log(req.body.address);
    var featuresArr = [];
    var routeTable = [];
    destination = req.body.address;
    traceroute.trace(destination, function (err, hops) {
        console.log("2");
        if (!err) {
            console.log(hops);
            var lastCityCoor;
            for(var i = 0; i<hops.length; i++){
                var hop = hops[i];
                var ipAddr = Object.keys(hop)[0];
                if (ipAddr !== undefined && ipAddr.match('^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$') && !ipAddr.match('(^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)')) {
                    routeTable.push(Hop(ipAddr, hop[ipAddr][0], hop[ipAddr][1], hop[ipAddr][2]))
                    geoip.lookup(ipAddr, function (geo) {
                        if(lastCityCoor !== undefined){
                            featuresArr.push((FeatureLine(lastCityCoor[1], lastCityCoor[0],geo.ll[1], geo.ll[0], {})))
                        }
                        lastCityCoor = [geo.ll[0], geo.ll[1]];
                        featuresArr.push(FeaturePoint(geo.ll[0], geo.ll[1], {"country": geo.country, "city": geo.city}));
                    });
                }
            }
            res.send([GeoJSON(featuresArr), routeTable]);
            console.log(GeoJSON(featuresArr));
            //hops.forEach(function (hop) {
            //
            //})
        } else {
            console.log("ERROR!");
        }
    });


});

app.listen(8080);

module.exports = app;


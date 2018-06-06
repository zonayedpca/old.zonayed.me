function initMap() {
    var myLatLng = {lat: 23.756107, lng: 90.387196};

    var map = new google.maps.Map(document.getElementById('googlemaps'), {
        zoom: 15,
        center: myLatLng,
        streetViewControl:!1,
        scaleControl:!1,
        clickableIcons:!1,
        draggable:1,
        zoomControl:!1,
        mapTypeControl:!1,
        scrollwheel:!1,
        styles: [
    {
        "featureType": "road",
        "stylers": [
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -79
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -78
            },
            {
                "hue": "#6600ff"
            },
            {
                "lightness": -47
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#6600ff"
            },
            {
                "saturation": -11
            }
        ]
    },
    {},
    {},
    {
        "featureType": "water",
        "stylers": [
            {
                "saturation": -65
            },
            {
                "hue": "#1900ff"
            },
            {
                "lightness": 8
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "weight": 1.3
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -16
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "saturation": -72
            }
        ]
    },
    {}
]
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Redstora - The Restaurant',
        icon: {
          url: "assets/img/common/marker.png",
          scaledSize: new google.maps.Size(37, 48)
        }
    });
}
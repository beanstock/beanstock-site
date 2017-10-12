function initMap() {
      // Styles a map in night mode.

      var myLatLng = {lat: 49.2840552, lng: -123.1000557};

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.2840552, lng: -123.1000557},
        zoom: 12,
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6EBF64"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "color": "#6EBF64"
            }
        ]
    },
    {
    "featureType": "poi.park",
    "stylers": [
      {
        "visibility": "on",
        "color": "#6EBF64"
      }
    ]
    },
    {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "on",
        "color": "#6EBF64"
      }
    ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified",
                "color": "#6EBF64"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off",
                "color": "#6EBF64"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#cfe5ef"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
      });
      var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Beanstock: 298 Alexander Street'
        });
    }

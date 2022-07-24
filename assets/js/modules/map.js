import $ from 'jquery';

// GLOBALY ACCESSIBLE ----------------------------------------------------------------------------------
var map;
var marker_houses;
var marker_house_icon;
// -----------------------------------------------------------------------------------------------------

$(function () {

  window.initMap = function () {

    map = new google.maps.Map($('.block-map .map__wrapper')[0], {
      zoom: 4.9,
      center: new google.maps.LatLng(54.5159, 20.3777),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 13
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#144b53"
            },
            {
              "lightness": 14
            },
            {
              "weight": 1.4
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "color": "#08304b"
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0c4152"
            },
            {
              "lightness": 5
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#0b434f"
            },
            {
              "lightness": 25
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#0b3d51"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "color": "#146474"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.station.bus",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.station.bus",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.station.bus",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.station.bus",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.station.rail",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.station.rail",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.station.rail",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#021019"
            }
          ]
        }
      ]
    });

    //Max & Min zoom
    var opt = { minZoom: 4.9, maxZoom: 17 };
    map.setOptions(opt);

    // trigger resize because it was under display: none;
    google.maps.event.trigger(map, 'resize');

    marker_houses = [
      {
        lat: 61.4720,
        lng: 11.4689
      },
      {
        lat: 46.955057,
        lng: 26.099037
      },
      {
        lat: 50.955057,
        lng: 22.099037
      },
      {
        lat: 50.955057,
        lng: 28.099037
      },
      {
        lat: 48.855057,
        lng: 16.599037
      },
      {
        lat: 50.855057,
        lng: 8.599037
      },
      {
        lat: 45.855057,
        lng: 4.599037
      },
      {
        lat: 52.955057,
        lng: 38.099037
      }
    ];
    marker_house_icon = [
      {
        lat: 54.4720,
        lng: 20.4689
      },
    ]
    for (let i = 0; i < marker_houses.length; i++) {
      createMarker(marker_houses[i]);
    }

    for (let i = 0; i < marker_houses.length; i++) {
      createMarker(marker_house_icon[i]);
    }

    $('.block-map').removeClass('loading');
  }

  $(document).ready(function () {
    var script = document.createElement('script');
    script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAWmbZX-BYSCOA_hyvO28-NHbpOaCpiJJE&callback=initMap&v=3');
    script.setAttribute('defer', 'defer');
    script.setAttribute('async', '');
    document.head.appendChild(script);
  });

});

function createMarker(marker_data) {
  /*
   * HTMLMapMarker Javascript class
   * Extends the Google Maps OverlayView class
   * Set up to accept our latlng, html for the div, and the map to attach it to as arguments
   */
  class HTMLMapMarker extends google.maps.OverlayView {
    // Constructor accepting args
    constructor(args) {
      super();
      this.latlng = args.latlng;
      this.html = args.html;
      this.setMap(args.map);
    }

    // Create the div with content and add a listener for click events
    createDiv() {
      this.div = document.createElement('div');
      this.div.style.position = 'absolute';
      if (this.html) {
        this.div.innerHTML = this.html;
      }
      google.maps.event.addDomListener(this.div, 'click', event => {
        google.maps.event.trigger(this, 'click');
      });

      google.maps.event.addDomListener(marker, 'click');

      $('.wrapper-marker', '.block-map').on('click', function (event) {

      });

      $(document).on('click', function (e) {
        if (
          !$(e.target).closest('.wrapper-marker', '.block-map').length &&
          !$(e.target).closest('.block-map-popup').length
        ) {

        }
      })
    }

    // Append to the overlay layer
    // Appending to both overlayLayer and overlayMouseTarget which should allow this to be clickable
    appendDivToOverlay() {
      const panes = this.getPanes();
      panes.overlayLayer.appendChild(this.div);
      panes.overlayMouseTarget.appendChild(this.div);
    }

    // Position the div according to the coordinates
    positionDiv() {
      const point = this.getProjection().fromLatLngToDivPixel(this.latlng);
      if (point) {
        this.div.style.left = `${point.x}px`;
        this.div.style.top = `${point.y}px`;
      }
    }

    // Create the div and append to map
    draw() {
      if (!this.div) {
        this.createDiv();
        this.appendDivToOverlay();
      }
      this.positionDiv();
    }

    // Remove this from map
    remove() {
      if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
      }
    }

    // Return lat and long object
    getPosition() {
      return this.latlng;
    }

    // Return whether this is draggable
    getDraggable() {
      return false;
    }
  }

  for (let i = 0; i < marker_houses.length; i++) {
    if (marker_houses[i] == marker_data) {
      var marker = new HTMLMapMarker({
        latlng: new google.maps.LatLng(marker_data.lat, marker_data.lng),
        map: map,
        html:
          '<div class=\'map__marker--circle\' id=house_' + i + ' data=' + i + '>' +
            '<span class=\'map__marker-content\'>' +
              + i +
            '</span>' +
          '</div>'
      });
    }
  }
  
  for (let i = 0; i < marker_house_icon.length; i++) {
    if (marker_house_icon[i] == marker_data) {
      var marker = new HTMLMapMarker({
        latlng: new google.maps.LatLng(marker_data.lat, marker_data.lng),
        map: map,
        html:
          '<div class=\'map__marker--house\' id=house_' + i + ' data=' + i + '>' +
            '<span class=\'map__marker-content\'>' +
              + i +
            '</span>' +
          '</div>'
      });
    }
  }

  return marker;

}

function disableMap() {
  map.setOptions({
    gestureHandling: 'none'
  })
}
function enableMap() {
  map.setOptions({
    gestureHandling: 'greedy'
  })
}
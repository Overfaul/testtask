function initMap() {
    const uluru = { lat: 43.44488197373046, lng: -80.51535904589342 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
    });

    map.setOptions({
        disableDefaultUI: true,
        mapTypeControl: false,
        draggable: false,
        scaleControl: false,
        scrollwheel: false,
        navigationControl: false,
        streetViewControl: false,
    });
    var noPoi = [
        {
            featureType: "poi",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    map.setOptions({ styles: noPoi });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: './public/marker.png'
    });

    const contentString =
        '<div id="map-content">' +
            '<h3 id="map-content__headline">Voodoo</h3>' +
            '<p id="map-content__subline"> 137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine</p>' +
            '<div id="mark-info">' +
                '<div id="phone-container"> <img src="public/phone.png" alt=""><p id = "phone-container__phone-number">1-800-480-9597</p> </div>'+
                '<div id="mail-container"> <img src="public/mail.png" alt=""><p id = "mail-container__mail">info@voodoo.com</p> </div>' +
            '</div>' +
        "</div>";


    const infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    infowindow.open({
        anchor: marker,
        map,
    });

    let getstyle = Array.from(document.getElementsByClassName('gm-style-moc'))
    console.log(getstyle)
}

window.initMap = initMap;
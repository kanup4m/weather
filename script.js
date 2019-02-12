if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
        var geoLat = pos.coords.latitude.toFixed(5);
        var geoLng = pos.coords.longitude.toFixed(5);
        var geoAcc = pos.coords.accuracy.toFixed(1);
        console.log(geoLat);
        _dsSecret = "8e82dcfc97cec9868e5ffd7c4a29d6ff";
        console.log(geoLat);
        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var API = "https://api.darksky.net/forecast/";
        var Key = _dsSecret + "/";
        var Para = "?exclude=minutely,hourly,daily,alerts,flags&units=auto";
        var URLRequest = proxy + API + Key + String(geoLat) + "," + String(geoLng) + Para
        $.getJSON(URLRequest)
            //Success promise
            .done(function(data) {
                var wSummary = data.currently.summary;
                var wTemperature = Math.floor(data.currently.temperature);
                var humidity = data.currently.humidity;
                var windSpeed = data.currently.windSpeed;
                var timezone = data.timezone;
                console.log(timezone);
                console.log(wSummary);
                console.log(wTemperature);
                document.querySelector(".summary").textContent = wSummary;
                document.querySelector(".temp").textContent = wTemperature + "℃";
                document.querySelector(".latitude").textContent = "Latitude : " + geoLat;
                document.querySelector(".longitude").textContent = "Longitude : " + geoLng;
                document.querySelector(".pressure").textContent = "Wind Speed : " + windSpeed + " m/s";
                document.querySelector(".humidity").textContent = "Humidity : " + humidity;
                console.log(humidity);
                console.log(pressure);
                var img = data.currently.icon;
            })
            //Error promise
            .fail(function() {
                alert('Sorry, something bad happened when retrieving the weather');
            });
    });
}
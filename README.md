<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather-website</title>
    <link href="weather.css" rel="stylesheet"/>
</head>
<body>
    <h3 class="head">Weather-website</h3>
    <div class="card">
        <div class="search">
            <input class="input" type="text" placeholder="Enter the city name"/>
            <button class="btn">Search</button>
        </div>
        <div class="weather">  
            <img class="image" src="./clear.png"/>
            <h1 class="temperature">22°C</h1>
            <h2 class="city">Indore</h2>
            <div class="details">
                <div class="col">
                    <img src="./humidity.png">
                    <div>
                        <p class="humidity">100%</p>
                        <p>Humidity</p>
                    </div>
                    <div class="col">
                        <img src="./wind.png">
                        <div>
                            <p class="wind">15km/hr</p>
                            <p>Wind-speed</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
   <script src="weather.js" ></script>
</body>
</html>

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=c900e4786b571f2b1b2bc87737088560&units=metric&q=`;
const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");
const image = document.querySelector(".image");
    async function checkWeather(city){
        const response = await fetch(apiUrl+city);
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        if(data.weather[0].main==="Clouds"){
            image.src="./clouds.png";
        }if(data.weather[0].main==="Clear"){
            image.src="./clear.png";
        }if(data.weather[0].main==="Rain"){
            image.src="./drizzle.png";
        }if(data.weather[0].main==="Mist"){
            image.src="./mist.png";
        }if(data.weather[0].main==="Snow"){
            image.src="./snow.png";
        }

    }
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    })
    
    
